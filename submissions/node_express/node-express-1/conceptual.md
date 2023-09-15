### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

then/catch method chaining and async/await

- What is a Promise?

A Promise is an object representing the eventual completion or failure of an asynchronous operation

- What are the differences between an async function and a regular function?

 an async is a function always returns a promise. Other values are wrapped in a resolved promise automatically

- What is the difference between Node.js and Express.js?

NodeJS is a javascript runtime environment for running JavaScript programs and is used to build server-side applications. ExpressJS is a web framework that enables you to design a web application to handle a variety of different HTTP demands.

- What is the error-first callback pattern?

a function which either returns an error object or any successful data returned by the function.

- What is middleware?

software and cloud services that provide common services and capabilities to applications and help developers and operators build and deploy applications more efficiently

- What does the `next` function do?

It will run or execute the code after all the middleware function is finished

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

It only returns 3 users instead of being able to return any user. 

There is no promis to await.
