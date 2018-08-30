import * as http from 'http'

const id = `${Math.round(Math.random() * 10000)}`
const runCount = Math.round(Math.random() * 30)

const server = http.createServer((req, res) => {
  res.write(`response from ${id}`, 'utf-8', (err) => {
    res.end()
  })
}).listen(process.env.PORT)

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
})

let count = 0
const intervalId = setInterval(() => {
  console.log(id, new Date())
  if (++count > runCount) {
    clearInterval(intervalId)
    process.exit()
  }
}, 1000)
