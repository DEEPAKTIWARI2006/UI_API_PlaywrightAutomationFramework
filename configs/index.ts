import qa from './qa.config';
import uat from './uat.config';
import prod from './prod.config';
import { getEnv } from '../configs/env';

const env = getEnv();

const configMap: any = {
    uat,
    qa,
    prod
};

export const config = configMap[env];

if (!config) {
    throw new Error(`Invalid env: ${env}`);
}