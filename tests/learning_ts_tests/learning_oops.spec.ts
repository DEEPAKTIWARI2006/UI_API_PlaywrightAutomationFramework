import { TestPage } from '../../pages/TestPage';

let testPage = new TestPage('john_doe');
testPage.myMethod();

let myname = "John Doe";
const myObj = (myname: string) => {
    console.log("This is a function expression");
    console.log(myname);
}

myObj(myname);

fetch('https://jsonplaceholder.typicode.com/todos/1') //fetch method is used to make an API call to the specified URL and retrieve data from it. It returns a promise that resolves to the response of the request. In this case, it is making a GET request to the URL 'https://jsonplaceholder.typicode.com/todos/1' to fetch a specific todo item with the ID of 1.
    .then(response => response.json())
    .then(json => console.log(json))

const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const json = await response.json();

console.log(json);

const myfunc = (a: number, b: number) => { return a + b }
console.log(myfunc(5, 10));

