import express from "express"
import data from "./data/data.json" assert{type: "json"}

const app = express() 

const PORT = 3000 
app.use(express.json())

app.get("/", (req,res) =>{
    res.send("Hello world")
})

app.get("/ab?cd", (req,res) => {
    res.send("path for ab?cd")
})

app.get("/ab+cd", (req,res) => {
    res.send("path for ab?cd")
})

app.get(/.*fly$/, (req,res) =>{


})


app.get("/fruits/:fruitName?", (req,res) => {
    const {fruitName} = req.params
    if (fruitName) {
        const fruit = data.fruits.find((f) => f.name ===
    fruitName)
    if(!fruit) {
        res.status(404).send("fruit not found")
    }
    res.status(200).send(fruit)
    }
    else if(!fruitName) {
        res.status(200)
    }
})

app.post("/fruits/", (req,res) =>{
    console.log(req.body)
res.send("data save succefully")
})




app.get("/Users/:id?", (req, res) => {
    if (req.params.id) {
      res.send(`User ID: ${req.params.id}`);
    } else {
      res.send("All users");
    }
  })



// app.get("/users/:name",(req, res)=>{
//     if(req.status(400).send(`<h1> 404 NOT FOUND </h1>`)
// })

app.get("/users/:name",(req, res)=>{
    res.status(200)
    res.set("content-type", text/html)

    res.send(`<html>
        <body>
        <h1 style= 'color:red'>Hello ${req.params.name} </h1>
        </body> 
        </html>`
        )
    
})





app.listen(PORT, ()=> {
    console.log(`server is running on port http://localhost:${PORT}`)
}) 