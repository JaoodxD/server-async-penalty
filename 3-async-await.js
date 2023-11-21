import { createServer } from 'node:http'

createServer(async (req, res) => {
  await 1
  res.end('hello, world')
}).listen(3000)
