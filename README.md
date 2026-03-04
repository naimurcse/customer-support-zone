# FAQ

## What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like markup directly within your JavaScript code, primarily used with React. It simplifies the process of describing user interfaces by allowing a more familiar, declarative syntax for UI elements. While resembling HTML, JSX isn't standard HTML; it gets compiled into regular JavaScript by tools like Babel before the browser executes it. This transformation turns your easy-to-read JSX into React.createElement() calls that browsers can understand.

JSX is widely adopted because it greatly improves code readability and developer experience by enabling you to combine UI structure and logic seamlessly in the same file. It inherently guards against common injection attacks by automatically escaping embedded values, enhancing application security. Additionally, JSX supports React's component-based architecture, making it straightforward to build and manage reusable UI components. Its integration with development tools also offers benefits like better autocompletion and error checking.

## What is the difference between State and Props?

In React, both State and Props are plain JavaScript objects that hold information which influences what a component renders, but they serve different purposes. Props (short for "properties") are immutable and passed from a parent component to a child component, similar to how arguments are passed to a function. They are read-only and cannot be modified by the receiving child component, ensuring a unidirectional data flow and promoting reusable components.

State, on the other hand, is mutable data that is managed internally by a component itself. It allows a component to create, manage, and update its own data in response to user interactions, network responses, or other dynamic events. When a component's state changes, React automatically re-renders that component to reflect the new state, driving dynamic UI updates without needing to reload the entire page.

## What is the useState hook, and how does it work?

The useState hook is a fundamental feature in React that allows you to add state variables to functional components. Before hooks were introduced in React 16.8, state management was only possible in class-based components. With useState, functional components can now manage their own internal data, making components cleaner, smaller, and more reusable.

Here’s how it works: you call useState at the top level of your functional component, passing in the initial value for your state. It returns an array containing two elements: the current state value and a function to update that value. You typically use array destructuring to assign these to descriptive variable names (e.g., const = useState(0)). When the setCount function is called with a new value, React re-renders the component with the updated state, automatically reflecting the changes in the UI.

## How can you share state between components in React?

Sharing state between components in React can be handled in several ways, depending on the relationship between the components and the complexity of your application. The most common methods involve lifting state up, using the Context API, or employing dedicated state management libraries.

For components with a parent-child relationship, the primary method is "lifting state up". This involves moving the state from a child component to its closest common parent. The parent then passes this state down to its children as props, along with callback functions that the children can use to update the parent's state. This ensures that the state is owned by a single component, preventing duplication and ensuring a single source of truth.

For more complex applications where state needs to be shared across many components that aren't directly related, "prop drilling" (passing props through multiple intermediate components) can become cumbersome. In such cases, the React Context API is a powerful built-in solution. Context allows you to create a "container" for shared data, making it accessible to any component within its provided tree without explicitly passing props down every level. It's often used for global state like user authentication, theme preferences, or language settings. For very large applications with complex state logic, external state management libraries like Redux, Zustand, Recoil, or Jotai might be more appropriate, offering centralized stores, predictable updates, and extensive tooling.

## How is event handling done in React?

Event handling in React is similar to how it's done in plain JavaScript, but with some key differences that provide consistency and performance benefits. React uses a "Synthetic Event" system, which is a cross-browser wrapper around the browser's native events. This system normalizes event properties and behaviors, ensuring that your event handlers work identically across different browsers without you needing to worry about inconsistencies.

When you attach an event listener in React, you typically provide a function as a prop to a given React element, using camelCase for the event names (e.g., onClick instead of onclick). For example, you might have an onClick event on a button that calls a handleClick function. This approach aligns with React's declarative nature. React also optimizes event handling through techniques like event delegation and event pooling, which reduce memory overhead and enhance application performance, especially for large applications with many interactive elements.
