# string-calculator-kata

## Setup
* Access this project folder from terminal.
* Run ``npm i``

## Test
* Run ``npm run test``

## Repository structure

In ``src/string-calculator/StringCalculator.js`` you will find the business logic of the app. In ``src/tests/specs`` you will find all the logic needed to test the application. 
The repository is setup to represent how I would structure a project that needs to scale. Every child folder of ``src`` is treated like a module, they all provide an ``index.js`` file that exposes reusable code for other modules. The global function ``rootRequire`` specified in the program entry point ``src/tests/start.js`` allows all the test suites to consume the string-calculator module in a neat way (no clumsy "../.." in the required paths). 