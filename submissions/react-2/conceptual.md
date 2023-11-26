### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

React Router is a JavaScript framework that lets us handle client and server-side routing in React applications.

- What is a single page application?

A single page application  is a web application that loads a single HTML page

- What are some differences between client side and server side routing?

Unlike server-side routing, client-side routing involves JavaScript handling the routing process internally.

- What are two ways of handling redirects with React Router? When would you use each?

1. Using the Redirect component: This component simply re-routes the user to a chosen route and can be used in the Route components or in the return statement of another component. This is mostly useful when a user attempts to go to a route that is protected or does not exist.
2. Using the history object: The history object can be accessed with the useHistory hook in ReactRouter and will send the user to a new route and add it to the browser history (history.push("/redirect-route")). This is more useful as a final action inside of a callback function (i.e. when a form is submitted so the user can be redirected if the submit is successful).


- What are two different ways to handle page-not-found user experiences using React Router? 

The 404 error page displays paths that don't exist on the website. So, instead of specifying the path, use an asterisk (*) to match anything. The NotFound component will render for all the URLs not specified in routes.

Links to important (and relevant) pages on your website – this helps users find what they're looking for more easily.

- How do you grab URL parameters from within a component using React Router?

To grab URL parameters from within a component using React
 Router
, you can use the useParams hook.

- What is context in React? When would you use it?

It allows us to pass data through our component trees, giving our components the ability to communicate and share data at different levels. 

You should use useContext in React when passing data from a parent component to a deep-level child component without passing it down through all intermediate components. 

- Describe some differences between class-based components and function
  components in React.


In React, there are two types of components: function components and class components. Function components are plain JavaScript functions that take props as an argument and return a React element. They are typically shorter and easier to read than class components. Class components are ES6 classes that extend React.

- What are some of the problems that hooks were designed to solve?

Wrapper hell, huge components, and confusing classes.