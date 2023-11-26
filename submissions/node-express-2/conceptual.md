### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

A stateless method of securely transmitting information between parties as a JavaScript Object Notation (JSON) object. 

- What is the signature portion of the JWT?  What does it do?

- If a JWT is intercepted, can the attacker see what's inside the payload?

The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way. 

- How can you implement authentication with a JWT?  Describe how it works at a high level.

Authentication: The client sends the user's credentials to the server, which authenticates the user and generates a JWT containing information about the user.

- Compare and contrast unit, integration and end-to-end tests.

Integration Tests: Integration tests are more complex than unit tests because you have to deal with dependencies. End-To-End: End-to-end tests simulate a specific user interaction flow with your app. For example, clicking or entering text.

- What is a mock? What are some things you would mock?

A mock is a fake class or method that simulates the behavior of a real class or method.

When testing things that cross the dependency inversion boundaries of the system

- What is continuous integration?

A software development practice that involves merging code changes from multiple contributors into a single project.

- What is an environment variable and what are they used for?

Environment variables allow us to keep values on our local and production environments distinct and safe as we develop our app.

- What is TDD? What are some benefits and drawbacks?

TDD is a powerful software development methodology that can improve the design, reliability, and maintainability of software. However, it also has some disadvantages, including a slower development process and the risk of over-testing.

- What is the value of using JSONSchema for validation?

It defines the structure and content of JSON data, and ensures that data complies with a set of guidelines.

- What are some ways to decide which code to test?

Focus on code that affects the behavior of the overall software product.

- What does `RETURNING` do in SQL? When would you use it?


The RETURNING clause in SQL retrieves values from a data modification statement after it has been executed. This can be useful when you want to know the values that were inserted, updated, or deleted.

- What are some differences between Web Sockets and HTTP?

A WebSocket connection uses full-duplex two-way communication—either side of the connection can send messages whenever they want. An HTTP connection uses half-duplex communication; only one party can communicate at a time, and the server's message is always in response to a request from a client.


- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

I liked Flask because it goes well with python and I find it easy to understand and implement 