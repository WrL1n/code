/*
Create a resolved javascript Promise that will return 'Hello World!'.
*/

// My Solution
const promiseHelloWorld = () => new Promise((res, rej) => res('Hello World!'))

// Better Solution
async function promiseHelloWorld() {
  return 'Hello World!';
}

// Another Solution
const promiseHelloWorld = async () => 'Hello World!';

// Another Solution
const promiseHelloWorld = _ => Promise.resolve("Hello World!");
