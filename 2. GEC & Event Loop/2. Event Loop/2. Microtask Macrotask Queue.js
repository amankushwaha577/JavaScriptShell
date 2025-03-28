/*
📌 Web APIs, Their Callback Queues, and Execution Priorities

| Web API                             | Category         | Callback Queue       | Execution Priority   |
|-------------------------------------|------------------|----------------------|----------------------|
| Promise.then() / catch() / finally()| Microtask API    | Microtask Queue      | High                 |
| MutationObserver                    | DOM API          | Microtask Queue      | High                 |
| fetch().then() (response processing)| Network API      | Microtask Queue      | High                 |

| requestAnimationFrame()             | Rendering API    | Rendering Queue      | Medium               |

| setTimeout()                        | Timer API        | Macrotask Queue      | Low                  |
| setInterval()                       | Timer API        | Macrotask Queue      | Low                  |
| XMLHttpRequest (XHR)                | Network API      | Macrotask Queue      | Low                  |
| addEventListener() (DOM Events)     | Event API        | Macrotask Queue      | Low                  |
| message event (postMessage)         | Web Worker API   | Macrotask Queue      | Low                  |
| I/O operations (File API, DB API)   | System API       | Macrotask Queue      | Low                  |



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
           c. setImmediate() (since it’s Node.js-specific).
           d. I/O tasks
           ------------------
           e. message events
           f. XHR (XMLHttpRequest)
           g. addEventListener() (DOM Events) 
*/
