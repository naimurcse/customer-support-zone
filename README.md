# FAQ

## What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows write HTML-like markup directly within JavaScript code, primarily used with React. It simplifies the process of describing user interfaces by allowing a more familiar, declarative syntax for UI elements. While resembling HTML, JSX isn't standard HTML; it gets compiled into regular JavaScript by tools like Babel before the browser executes it.

JSX is widely adopted because it greatly improves code readability and developer experience by enabling me to combine UI structure and logic seamlessly in the same file. Additionally, JSX supports React's component-based architecture, making it straightforward to build and manage reusable UI components.

## What is the difference between State and Props?

In React, both State and Props are plain JavaScript objects that hold information which influences what a component renders, but they serve different purposes. Props (short for "properties") are immutable and passed from a parent component to a child component, similar to how arguments are passed to a function. They are read-only and cannot be modified by the receiving child component, ensuring a unidirectional data flow and promoting reusable components.

State is mutable data that is managed internally by a component itself. It allows a component to create, manage, and update its own data in response to user interactions, network responses, or other dynamic events.

## What is the useState hook, and how does it work?

The useState hook is a fundamental feature in React that allows to add state variables to functional components. With useState, functional components can now manage their own internal data, making components cleaner, smaller, and more reusable.

useState at the top level of our functional component, passing in the initial value for our state. It returns an array containing two elements: the current state value and a function to update that value. When the setCount function is called with a new value, React re-renders the component with the updated state, automatically reflecting the changes in the UI.

## How can you share state between components in React?

Sharing state between components in React can be handled in several ways. The most common methods involve lifting state up, using the Context API, or employing dedicated state management libraries.

For components with a parent-child relationship, the primary method is "lifting state up". This involves moving the state from a child component to its closest common parent. The parent then passes this state down to its children as props, along with callback functions that the children can use to update the parent's state.

## How is event handling done in React?

Event handling in React is similar to how it's done in plain JavaScript, but with some key differences that provide consistency and performance benefits. React uses a "Synthetic Event" system, which is a cross-browser wrapper around the browser's native events. This system normalizes event properties and behaviors, ensuring that our event handlers work identically across different browsers without you needing to worry about inconsistencies.

When we attach an event listener in React, you typically provide a function as a prop to a given React element, using camelCase for the event names (e.g., onClick instead of onclick). React also optimizes event handling through techniques like event delegation and event pooling.
