# Here we have listed the most common questions, so you can quickly resolve any issues.

**Node is not installed on my computer. Where can I download it from?**
--
Head over to https://nodejs.org/en/ and download the latest LTS version for your operating system.

**What code editor should I use?**
--
Generally, we recommend Atom (https://atom.io) or VS Code (https://code.visualstudio.com) for development. Both are open-source and have many plugins with support for many languages.

**Where can I look up docs for JavaScript?**
--
MDN (https://developer.mozilla.org/en-US/) and w3schools (https://www.w3schools.com) have everything you need for web development.

**How do I install an npm package?**
--
NPM packages can be looked up at https://www.npmjs.com, and install from your command line emulator of choice using `npm install <packagename>`. Use the optional `--save` flag to save the dependency to you package's `package.json` file.

**Why can't NPM find my script when using `npm start`?**
--
When running `npm init`, it only detects scripts with names like `server.js` and `index.js`. You can manually enter the name when prompted, or you can edit your `package.json` file.

**Why do I keep getting an error when starting my script through node?**
--
Check the error message that node provides - more ofthen than not, it states where and what the issue is. Some error messages may include missing _[token]_, in which case you need to check your brackets and parantheses, or address already in use, which means you already have a server running on that port. Stop the other instance and launch the new one again.

**How can I verify the equality between two things in JavaScript?**
--
JS has a `==` operator, which only check loose equality. On the other hand, `===` also check whether the two things to be checked are of the same type. For more details, take a look at https://dorey.github.io/JavaScript-Equality-Table/unified/.
