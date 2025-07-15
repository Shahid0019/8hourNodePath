const express = require('express')
const app = express()


app.get('/',(req, res)=>{
  console.log('response sended')
  res.send("homepage")
})

app.listen(3001,()=>{
  console.log("port is listening on 3001  ")
})


// app.get
// app.post
// app.put 
// app.delete
// app.use
// app.all
// app.listen