# Working with Node.js Modules

## Node.js Packages
- A **package** consists of one or more modules.  
- The `package.json` file describes details about a Node.js module.  
- If no `package.json` exists, Node.js assumes the **main script** is `index.js`.  
- To specify a different main script, provide a relative path to the Node.js script in the module directory.

### Example `package.json`
```json
{
  "name": "today",
  "version": "1.0.0",
  "main": "lib/today.js",
  "license": "MIT"
}
```

* `name` + `version` = unique identifier for the module (e.g., `today-1.0.0`)
* `main` = path to the main Node.js script
* `license` = module usage rights

---

## Importing Node.js Modules

* Use the `require` function to import a module.
* Node.js assumes a `.js` file extension if not specified.
* `require` returns a JavaScript object representing the module.

### Single Script Module Example

```js
// hello.js
const today = require("./today.js"); // Import module using relative path
console.log(today.dayOfWeek());
```

### Directory Module Example

* Node.js checks for a script file matching the directory name.
* If not found, defaults to `index.js` inside that directory.

```js
// Directory: mod_today/index.js
exports.dayOfWeek = function() {
    const day = new Date().getDay();
    return day; // 0 = Sunday, 1 = Monday, ...
};
```

```js
// hello.js
const today = require("./mod_today"); // Automatically loads index.js
console.log(today.dayOfWeek());
```

---

## Exporting Functions or Properties

* Each module has an **implicit `exports` object**.
* To make a function or value available to other applications, **add it as a property** to `exports`.

### Example

```js
exports.dayOfWeek = function() {
    const day = new Date().getDay();
    return day; // Returns number representing the day of the week
};
```

### Accessing Exported Properties

```js
const today = require("./mod_today");
console.log(today.dayOfWeek()); // Access exported function
```

---

## Key Points

* Every package has a `package.json` file describing the module.
* Use the **exports object** to expose functionality from a module.
* `require` returns a JavaScript object representing the module instance.
* Access properties of a module through the variable returned by `require`.
