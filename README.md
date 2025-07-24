# Task Overview

You are building a React application featuring a global modal for note creation or editing. This modal, called QuickActionModal, should be globally accessible and support opening from multiple, arbitrary places like the header or page body. The modal must manage its own form state, provide error feedback, and reset its state when closed or after a successful operation. The architecture needs to leverage React Context and useReducer, avoiding prop drilling and duplicative logic. Styles must be via inline or CSS-in-JS techniques.

## Guidance

- Use the Context API for managing modal open/close state and global access.
- Use useReducer within the modal for tracking form state and validation errors.
- The modal should display errors for required fields and prevent submission if validation fails.
- Ensure all components can trigger the same modal instance without code duplication.
- State should reset on close or successful submit.
- Use only React built-in features, no third-party libraries.
- Provide a unified, scalable pattern for modal state and logic management.

## Objectives

- Implement a QuickActionModal using React Context so it is globally accessible
- Manage the form inputs and errors with a local reducer inside the modal
- Allow triggering the modal from both header and main content sections
- Show error messages for missing required fields
- Ensure modal resets form state on close or after submit
- Prevent prop drilling or duplicate modal logic
- Use only inline styles or CSS-in-JS (no separate CSS files or libraries)

## How to Verify

- The modal can be opened from multiple locations (e.g., header and main content buttons)
- The form displays real-time validation for required fields (like an empty title)
- On valid submit, the modal closes and resets its form state
- On close, the modal resets its internal state
- Modal state management is handled through context and reducer (not through props or repeated code)
- No duplicated logic exists for opening or handling the modal in different parts of the app
- Modal and buttons are styled using only inline or CSS-in-JS approaches
