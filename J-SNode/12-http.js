const http = require ('http')

// const server = http.createServer((req,res) =>{
// res.write('Welcome to our home page ')
// res.end()
// })

// Using Evet emitter
const server = http.createServer()

// emits  requrest evernt

server.on('request', (req, res) => {
  res.write('Welcome to our home page ')    }
)

server.listen(5000)