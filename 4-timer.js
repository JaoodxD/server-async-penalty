import { createServer } from 'node:http'

createServer((req, res) => {
  setTimeout(() => res.end('hello, world'), 0)
}).listen(3000)
