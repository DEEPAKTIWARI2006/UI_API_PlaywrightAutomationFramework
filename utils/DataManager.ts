import path from 'path';
import fs from 'fs';
import { getEnv } from '../configs/env';

type EnvName = 'qa' | 'uat' | 'prod';

export class DataManager {
    private env: string;

    constructor() {
        this.env = this.env = getEnv();
    }

    public getEnv(): string {
        console.log("Current Environment: ", this.env);
        return this.env;
    }

    public async getPageData(pageName: string): Promise<any> {

        const commonPath = path.resolve(`test-data/common/${pageName}.ts`);
        const envPath = path.resolve(`test-data/${this.env}/${pageName}.ts`);
        const [commonData, envData] = await Promise.all([
            this.loadFile(commonPath),
            this.loadFile(envPath)
        ]);

        return this.deepMerge(commonData, envData);
    }

    private async loadFile(filePath: string): Promise<any> {
        if (!fs.existsSync(filePath)) {
            return {};
        }

        try {
            const loaded = await import(filePath);
            return loaded.default || loaded;
        } catch (error) {
            console.error(`Error loading data from ${filePath}:`, error);
            return {};
        }
    }

    private deepMerge(target: any, source: any): any {
        const output = { ...target };

        for (const key in source) {
            if (
                typeof source[key] === 'object' &&
                source[key] !== null &&
                !Array.isArray(source[key])
            ) {
                output[key] = this.deepMerge(target[key] || {}, source[key]);
            } else {
                output[key] = source[key];
            }
        }

        return output;
    }
}

export default new DataManager();