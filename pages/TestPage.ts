export class TestPage {

    constructor(private readonly username: string) {
        this.username = username;
    }

    async myMethod() {

        console.log('My Name is ' + this.username);
    }
}