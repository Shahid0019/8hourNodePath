const express = require('express')
const app = express()


app.get('/',(req, res)=>{
  console.log('response sended')
  res.send("homepage")
})
app.get('about',(req,res)=>{
  res.send("This is a about Page")
})

app.all('*',(req,res)=>{
  res.status(404).send('page not found')
})

app.listen(5000,()=>{
  console.log("port is listening on 5000  ")
})


// app.get
// app.post
// app.put 
// app.delete
// app.use
// app.all
// app.listen