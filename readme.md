# Simple Calculator Demo

A simple Node.js app which does nothing more but serve a calculator interface to the user. See the `www/js/calculator.js` for implementation details and `www/js/calculator_spec.js` for tests of its functionality. The `www/index.html` will provide you with interface elements, and the `www/css/style.css` file will contain styling information.

# Getting Started

If you haven't yet installed Node.js, you'll want to do that first. We'll just assume you have homebrew installed. If not, I highly recommend it, as it simplifies life in many ways. You can get it here: <http://brew.sh/>. Then to install Node.js, run the command:

  `brew install node`

Before attempting to run the server or the tests, you'll want to load the dependencies listed in the `package.json` file. You can do this by running the command:

  `npm install`

# Running The App

In the console, simply run the command:

  `node server`

Open your browser and navigate to <http://localhost:8080/>. Once there you'll be able to check out some awesome features of this amazing app, such as: Adding, Subtracting, Multiplying, and even Dividing(it'll divide odd as well).

# Running The Tests

You'll be excited to hear that all of the functions described above have been tested. And you yourself can verify this. Simply run this command in your console:

  `mocha www/js/calculator_spec`
