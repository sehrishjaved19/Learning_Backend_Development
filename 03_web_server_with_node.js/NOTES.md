# 🌍 Creating a Web Server with Node.js — Notes

## ⚙️ What is Node.js?
- **Node.js** is a **server-side programming framework** that uses **JavaScript** as its programming language.
- It is built for:
  - **Concurrent programming**.
  - **Scalable and lightweight** server applications.
- Ideal for developers already familiar with **JavaScript**.

---

## 🧠 Key Characteristics of Node.js
| Feature | Description |
|----------|--------------|
| **Single-threaded** | Node.js operates on a single thread. |
| **Event-driven** | Handles input/output (I/O) operations through events. |
| **Non-blocking I/O** | Instead of waiting for operations to complete, Node.js uses **callbacks** to handle results asynchronously. |
| **Fast and scalable** | Efficiently manages multiple concurrent connections with minimal system resources. |
| **Lightweight** | Built with minimal complexity and easy-to-use modules. |

---

## 🔁 Event Loop and Callbacks
- The **event loop** continuously listens for events (like incoming requests).
- When an event occurs, it triggers the corresponding **callback function**.
- This design allows Node.js to handle **many simultaneous operations** without blocking.

---

## 🧩 Modules and Packages
- Every **JavaScript file** in Node.js is considered a **module**.
- A **module** corresponds to a single **script file**.
- A **package** can contain **one or more modules**.
- The **Node.js runtime** includes **built-in utility modules** for:
  - File operations (`fs`)
  - Networking (`net`)
  - HTTP communication (`http`)
  - and many more.

---

## 🌐 Creating a Web Server with Node.js

### Using the HTTP Module
The **`http`** module allows you to:
- Create a web server that listens for **HTTP requests**.
- Send **HTTP responses** to clients.

### Steps:
1. **Import** the HTTP module.
2. **Create a server instance** using `http.createServer()`.
3. **Provide a callback function** to handle requests and responses.
4. **Listen on a specific port** using `server.listen()`.

---

### 🧾 Example Code

```js
let server = http.createServer(function(request, response) {
    let body = 'hello, world!';
    response.writeHead(200, {
        'Content-Length': body.length,
        'Content-Type': 'text/plain'
    });
    response.end(body);
});

server.listen(8080);

```

### Explanation:

### 1️⃣ `http.createServer(callback)`

* **Purpose:** Creates a **new web server** instance.
* **Parameter:** A **callback function** that handles:

  * **Incoming requests** (`request`)
  * **Outgoing responses** (`response`)

> In this code, the callback is an **anonymous function**.

---

### 2️⃣ Inside the callback

* Define the **response content** that will be sent to the client.

* **`writeHead`** sets the **HTTP response header**:

  * `200` → Status code **OK**
  * `Content-Length` → Length of the response body
  * `Content-Type` → Type of content (`text/plain` for plain text)
  * `response.end(body);` Sends the **response body** and **closes the connection**.

---

### 3️⃣ Start Listening on a Port

```js
server.listen(8080);
```

* The server starts listening for **incoming HTTP requests** on **port 8080**.
* You can access it in a browser at:
  `http://localhost:8080`

---

### 4️⃣ How It Works (Flow)

1. A client sends an HTTP request to your server (e.g., browser request).
2. Node.js invokes the **callback function**.
3. Your server constructs a response (`hello, world!`).
4. Node.js sends the response back to the client.

---

### ✅ Summary

* **`http.createServer()`** → Creates server instance.
* **Callback function** → Handles request and response.
* **`response.writeHead()`** → Sets HTTP headers.
* **`response.end()`** → Sends response.
* **`server.listen(port)`** → Starts the server on the specified port.

---

## 🧩 Summary

* **Node.js** uses **JavaScript** to build scalable, event-driven, and non-blocking web servers.
* It runs on a **single-threaded, event-loop** architecture.
* Every `.js` file is a **module**.
* The **HTTP module** allows developers to create and manage web servers.
* With minimal code, you can create a server that listens for requests and returns responses efficiently.

---

✅ **In short:**

> Node.js provides a fast, lightweight, and scalable way to build web servers using JavaScript, powered by an event-driven, single-threaded architecture.

