const users = [
    {
        id: 1,
        name: "ibrahim",
        age: 20
    },
    {
        id: 2,
        name: "rafay",
        age: 21
    },
    {
        id: 3,
        name: "rafay",
        age: 20
    },
    {
        id: 4,
        name: "Fareeha",
        age: 15
    }
]


import express from 'express'
const app = express()
app.use(express.json())
const PORT = 3000


app.get("/", (req,res)=>{
    res.send("HELLO FROM NEW NODE..... I LOVE YOU")
})
app.post("/", (req,res)=>{
    res.send(users)
})

app.listen(PORT, ()=>{
    console.log(`The server is running on http://localhost:${PORT}`)
})