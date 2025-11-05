# 🟩 Advanced Node.js Modules

## 📘 Overview

In Node.js, **modules** (also called *libraries*) are reusable pieces of code that help organize and structure an application.
There are **three main types of Node.js modules**:

1. **Core Modules**
2. **Local Modules**
3. **Third-Party Modules**

---

## 🧱 1. Core Modules

Core modules are built into Node.js and provide essential functionality without needing installation.

### 🔹 Common Core Modules

| Module          | Description                                              | Example                                                                                                                                                                                                                                                              |
| :-------------- | :------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **http**        | Enables data transfer over HTTP.                         | `js\nconst http = require('http');\nhttp.createServer((req, res) => {\n  res.write('hello from server');\n  res.end();\n}).listen(6000);\n`                                                                                                                          |
| **fs**          | Works with the file system (read/write files).           | **Asynchronous:**<br>`js\nconst fs = require('fs');\nfs.readFile('sample.txt', 'utf8', (err, data) => {\n  if (err) throw err;\n  console.log(data);\n});\n`<br>**Synchronous:**<br>`js\nconst data = fs.readFileSync('/content.md', 'utf8');\nconsole.log(data);\n` |
| **os**          | Provides system information.                             | `js\nconst os = require('os');\nconsole.log('OS Platform:', os.platform());\nconsole.log('Architecture:', os.arch());\n`                                                                                                                                             |
| **path**        | Handles and manipulates file paths.                      | `js\nconst path = require('path');\nconsole.log(path.basename('/content/index/home.html')); // home.html\n`                                                                                                                                                          |
| **util**        | Used internally for debugging and deprecating functions. | `js\nconst util = require('util');\nfor (let i = 1; i <= 10; i++) {\n  console.log(util.format('The loop has executed %d time(s).', i));\n}\n`                                                                                                                       |
| **url**         | Parses and manipulates web addresses.                    | `js\nconst url = require('url');\nconst webAddress = 'http://localhost:2000/index.html?lastName=Kent&firstName=Clark';\nconst qry = url.parse(webAddress, true);\nconsole.log(qry.query.firstName); // Clark\n`                                                      |
| **querystring** | Parses URL query strings into readable objects.          | `js\nconst querystring = require('querystring');\nconst params = querystring.parse('lastName=Kent&firstName=Clark');\nconsole.log(params.firstName); // Clark\n`                                                                                                     |

---

## 💻 2. Local Modules

* These are **custom modules** created by the developer or team.
* Used to organize and structure application-specific logic.
* Example:

  ```js
  // greet.js
  module.exports = function() {
    console.log("Hello, Sehrish!");
  };

  // app.js
  const greet = require('./greet');
  greet();
  ```

---

## 🌐 3. Third-Party Modules

* Created by the Node.js community and installed using **npm (Node Package Manager)**.
* Often open-source or in the public domain.
* Examples:

  * **AsyncJS** – Helps manage asynchronous code easily.
  * **Axios** – Used to make HTTP requests.
  * **Express** – A lightweight web framework for building servers and APIs.

---

## 📖 Summary Table

| Type            | Description                                 | Source       |
| :-------------- | :------------------------------------------ | :----------- |
| **Core**        | Built-in modules that come with Node.js     | Node.js      |
| **Local**       | Custom modules created for a project        | Developer    |
| **Third-Party** | Community-created modules installed via npm | npm registry |

---

## 🧩 Key Takeaways

* Node.js modules promote **code reusability** and **organization**.
* **Core modules** are always available without installation.
* **Local modules** help structure custom app logic.
* **Third-party modules** extend functionality with open-source tools.


