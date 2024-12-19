# React Router Dom v6 Catch All Route Not Working

This repository demonstrates a common issue with React Router Dom v6's catch-all route (`path="/*"`).  The catch-all route is intended to match any unmatched routes, but in certain configurations, it may not function as expected.

The issue is that nested routes can interfere with the catch-all route's behavior. This example shows how to fix this.

## Setup

1. Clone this repository.
2. Run `npm install` to install the required dependencies.
3. Run `npm start` to start the development server.

## Bug

The initial `App.js` demonstrates a scenario where the catch-all route does not work as intended. Navigate to a non-existent route; the catch-all route will not be triggered.

## Solution

The `AppSolution.js` provides a corrected version, resolving the catch-all route issue.  The key change is ensuring proper nesting and route definitions.