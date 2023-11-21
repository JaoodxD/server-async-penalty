import { createServer } from 'node:http'
import { setTimeout as wait } from 'node:timers/promises'

createServer(async(req, res) => {
  await wait(0)
  res.end('hello, world')
}).listen(3000)
