import { createServer } from 'node:http'

createServer(async (req, res) => {
  res.end('hello, world')
}).listen(3000)
