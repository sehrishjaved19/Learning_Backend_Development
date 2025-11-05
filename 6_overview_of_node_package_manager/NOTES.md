# Overview of Node Package Manager (NPM)

## 📦 What is a Package Manager?
- A **package manager** is a set of tools used to handle **modules and packages** containing dependencies.
- It automates the process of **finding, installing, upgrading, configuring, maintaining, and removing** packages.
- Sometimes referred to as a **package-management system**.

### 🔗 Dependencies
- **Dependencies** are pieces of code (libraries or packages) that are **reused** in a program.
- Example:
  - Your module may depend on another module, which may depend on others — forming a **dependency chain**.

### 🧩 Libraries vs Packages
- A **library** is a collection of code that is **self-contained** (it doesn’t depend on external code).
- **Packages** work similarly — they contain reusable code and may have dependencies.

---

## ⚙️ What is NPM?
- **NPM (Node Package Manager)** is the **default package manager for Node.js**.
- It performs two main functions:

### 1. Command Line Interface (CLI)
- Allows users to **publish** and **download** packages.
- Example command:
  ```bash
  npm install <package_name>
  ```

### 2. Online Repository

* An **online database** of JavaScript packages that stores version and dependency information.
* Website: [https://www.npmjs.com](https://www.npmjs.com)

---

## 📁 The `package.json` File

* Every NPM package includes a **`package.json`** file in the project’s root directory.
* It contains **metadata** about the project in **key-value pairs**.

### Example:

```json
{
  "name": "my_project",
  "version": "1.0.0"
}
```

### Purpose:

* Identifies the project (name and version).
* Lists all **dependencies** needed to run the project.
* Used by NPM to **manage versions and installations**.

---

## 📍 Local vs Global Installation

| Type               | Command                         | Installed In                     | Access Scope                                 | Use Case                                                  |
| ------------------ | ------------------------------- | -------------------------------- | -------------------------------------------- | --------------------------------------------------------- |
| **Local Install**  | `npm install <package_name>`    | Project folder (`node_modules/`) | Only within that project                     | When you need the package **inside an app**               |
| **Global Install** | `npm install -g <package_name>` | Global system directory          | Available to **all projects** on the machine | When the package is a **CLI tool** (like nodemon, eslint) |

### ⚠️ Important:

* **Global installs** should be used carefully because:

  * All projects share the same global package.
  * Version conflicts may occur if different projects require different versions.

---

## 🧾 Summary

* A **package manager** ensures all required dependencies are installed correctly.
* **NPM** provides:

  * A **CLI tool** for managing packages.
  * An **online repository** of JavaScript packages.
* The **`package.json`** file defines project details and dependencies.
* **Local installs** are project-specific, while **global installs** are available system-wide.

---

✅ **In short:**

> NPM automates dependency management for Node.js projects, ensuring smooth installation, version control, and reuse of code.

