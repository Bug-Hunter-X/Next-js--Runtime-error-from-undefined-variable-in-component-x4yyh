# Next.js Runtime Error from Undefined Variable

This repository demonstrates an uncommon bug in Next.js where referencing an undefined variable within a component results in a runtime error instead of a build-time error.  This can be difficult to debug as the error doesn't appear during the build process.

## Bug Description

The `about.js` file attempts to render the undefined variable `name`. This doesn't cause a build error; instead, it throws a runtime error when the component is rendered on the client-side.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.  You'll see a runtime error in your browser's console.

## Solution

The `aboutSolution.js` file demonstrates a fix.  Always ensure variables are defined or handled appropriately before usage within components to prevent runtime errors.  Consider using optional chaining or nullish coalescing to handle potential undefined values.