// import express into our file
const express = require('express')
const path = require('path');

// create a new express application
const app = express()

// define the port our server will run on 
const port = 3000


// allow static assets in public folder


app.use(express.static(path.join(__dirname, '..', 'dist')))

// define our server routes 
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'))
})

app.get('/test',(req,res)=>{
    res.send("Server running operatinal")
    // do something when the server process this request 

    // send back a response to the client 

res.send("Hello from our server!")
    })
    app.listen(port, ()=>{
        console.log(`Server is running on port${port}`)
    })


