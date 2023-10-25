### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React is an open-source JavaScript library for building user interfaces
React provides state-of-the-art functionality and is an excellent choice for developers looking for an easy-to-use and highly productive JavaScript framework.

- What is Babel?

Babel in react operates as a transpiler, converting the latest JavaScript syntax into a version that can run in all environments.

- What is JSX?

JSX is a syntax extension to JavaScript that allows you to write HTML in JavaScript.

- How is a Component created in React?

The simplest way to define a component is to write a JavaScript function.

- What are some difference between state and props?

Props are used to pass data from a parent component to a child component, while state is used to manage data within a component.

- What does "downward data flow" refer to in React?

Downward data flow is the idea that parent components pass data down to their children via props.

- What is a controlled component?

Components that have their state and behavior controlled by the parent component.

- What is an uncontrolled component?

An uncontrolled component is a component that maintains its own internal state.

- What is the purpose of the `key` prop when rendering a list of components?

To help React differentiate between the items and perform updates more efficiently.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

An index would be unique but it would not be stable since the array can mutate and indices can shift around.

- Describe useEffect.  What use cases is it used for in React components?

The useEffect Hook allows you to perform side effects in your components.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

The useRef Hook allows you to persist values between renders.

Setting the ref's current value does not trigger a re-render.

- When would you use a ref? When wouldn't you use one?

Managing focus, text selection, or media playback.

When you need to keep track of a value.


- What is a custom hook in React? When would you want to write one?

Custom Hooks are a mechanism to reuse stateful logic.

f you have one or multiple React hooks that will be used at multiple locations in a code.
