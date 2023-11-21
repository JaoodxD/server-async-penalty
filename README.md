# Server perf penalty due to async-await usage

```sh
"npm run start:1" -- to bench completely sync http server
"npm run start:2" -- with async function
"npm run start:3" -- with await operator
"npm run start:4" -- schedule response with setTimeout
"npm run start:5" -- schedule response with setTimeout from node:timers/promises
```
