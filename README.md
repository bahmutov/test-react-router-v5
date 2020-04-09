# test-react-router-v5
> Component tests for apps that use [React Router v5](https://reacttraining.com/react-router/web/guides/quick-start)

Uses [cypress-react-unit-test v2](https://github.com/bahmutov/cypress-react-unit-test/pull/108)

- [src/App.spec.js](src/App.spec.js) shows basic routing
- [src/Nesting.spec.js](src/Nesting.spec.js) shows two level of routing
- [src/Auth.spec.js](src/Auth.spec.js) takes protected routes for a spin
- [src/RouteConfig.spec.js](src/RouteConfig.spec.js) passes the list of routes from the test to the component to render

![Route config test](images/route-config.png)
