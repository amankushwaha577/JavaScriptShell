/*
📌 Web APIs, Their Callback Queues, and Execution Priorities

| Web API                             | Category         | Callback Queue        | Execution Priority   | Description |
|-------------------------------------|------------------|-----------------------|----------------------|-------------|
| Promise.then() / catch() / finally()| Microtask API    | Microtask Queue       | High                 | Executes the callback before macrotasks. |
| MutationObserver                    | DOM API          | Microtask Queue       | High                 | Watches for DOM changes and executes callbacks asynchronously. |
| fetch() (initial request)           | Network API      | N/A (Sent to Network) | External (Depends on Network) | Sends an HTTP request asynchronously. |
| fetch().then() (response processing)| Network API      | Microtask Queue       | High                 | Fetch response is processed as a microtask. |

| requestAnimationFrame()             | Rendering API      | Rendering Queue      | Medium              | Executes before the next repaint. Used for smooth animations. |

| setTimeout()                        | Timer API          | Macrotask Queue      | Low                 | Executes a callback after a specified delay. |
| setInterval()                       | Timer API          | Macrotask Queue      | Low                 | Executes a callback repeatedly at intervals. |
| setImmediate() *(Node.js)*          | Timer API (Node.js)| Macrotask Queue      | Low(after I/O tasks)| Executes after the current execution but before timers. *(Node.js only)* |

| XMLHttpRequest (XHR)                | Network API(Legacy)| Macrotask Queue      | Low                 | Older method for making network requests. |
| addEventListener() (DOM Events)     | Event API          | Macrotask Queue      | Low                 | Executes callback when an event occurs. |
| message event (postMessage)         | Web Worker API     | Macrotask Queue      | Low                 | Executes messages sent between main thread and workers. |
| I/O operations (File API, DB API)   | System API         | Macrotask Queue      | Low                 | Executes I/O-based operations asynchronously. |



🔼 Execution Priority Order :
----------------------------

1️⃣ Synchronous Code → Runs first in the **Call Stack**  

2️⃣ Microtasks (Highest Priority):
          a. Promise.then()
          b. MutationObserver
          c. fetch().then()

3️⃣ Rendering Tasks (Medium Priority):
          a. requestAnimationFrame()

4️⃣ Macrotasks (Low Priority) :
           a. setTimeout()
           b. setInterval()
           c. setImmediate()
           d. I/O tasks
           e. message events
           f. XHR
*/
