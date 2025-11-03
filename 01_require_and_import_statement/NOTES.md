# 📘 Import and Require — Notes

## 🧩 What is a Module?
- A **module** in Node.js is a file containing related and encapsulated JavaScript code that serves a specific purpose.
- Modules help developers:
  - Reuse code.
  - Organize and manage complex applications by breaking them into smaller chunks.
- Modules can be:
  - A **single file**.
  - A **collection of multiple files or folders**.

---

## 📦 Packages and Module Specifications
- A **package** is a directory containing one or more modules bundled together.
- **Module specifications** define conventions and standards for writing and organizing packages in JavaScript.
- Two main specifications used in Node.js:
  1. **CommonJS (CJS)**
  2. **ECMAScript Modules (ESM)**

### Default Behavior
- By default, **Node.js** treats `.js` files as **CommonJS modules**.
- To enable **ES modules**, rename the file extension from `.js` → `.mjs`.

---

## 🔄 Importing and Exporting Modules

### CommonJS
- Uses the `require()` statement to **import** modules.
- Uses `module.exports` to **export** modules.

#### Example:
**message.js**
```js
module.exports = "Hello programmers";
```

**main.js**

```js
let msg = require("./message.js");
console.log(msg);
```

---

### ES Modules

* Use the `import` and `export` keywords.

#### Example:

**module.mjs**

```js
const a = 1;
export { a as myValue };
```

**main.mjs**

```js
import { myValue } from "./module.mjs";
console.log(myValue);
```

---

## ⚖️ Comparison: `require()` vs `import`

| Feature             | `require()` (CommonJS)             | `import` (ES Modules)                     |
| ------------------- | ---------------------------------- | ----------------------------------------- |
| **Specification**   | CommonJS                           | ES Module                                 |
| **Syntax**          | `const module = require("module")` | `import module from "module"`             |
| **Placement**       | Can be called anywhere in the file | Must be called at the **top** of the file |
| **Binding Type**    | Dynamic binding                    | Static binding                            |
| **Error Detection** | Run-time                           | Compile-time                              |
| **Execution**       | Synchronous (one at a time)        | Asynchronous (can run simultaneously)     |
| **Performance**     | Slower for large-scale apps        | Faster for large-scale apps               |

---

## 🧠 Summary

* **Modules** are reusable, purpose-specific JavaScript files.
* **Packages** are collections of modules.
* **Module specifications** (CommonJS & ES Modules) define standards for module creation.
* **require()** → used in CommonJS, synchronous, dynamically bound, can appear anywhere.
* **import** → used in ES Modules, asynchronous, statically bound, must appear at the top.
