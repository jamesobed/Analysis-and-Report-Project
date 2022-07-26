## Trip Analysis-and-Report-Project

# Engineering Solution 

This repo contains sample solution you should be able to use to analysis trip and give a detailed report.

You can run the test cases by running

```bash
yarn
yarn jest --watch
```

Or if you use npm

```bash
npm install
npm test -- --watch
```

You can elide the `--watch` flag to just run tests

If all tests pass, you have successfully solved the questions.

The solution to question 1 should go in `src/analysis.js`
The solution to question 2 should go in `src/report.js`

Ensure to write tests as necessary for any utility functions that you may create.

---

Do not delete the `node_modules` folder in the `src` folder, it is a hack to get the `api` files to be absolute.

You need the `api` module for Question 1-2.
See documentation for the `api` module at [api.md](./api.md)
