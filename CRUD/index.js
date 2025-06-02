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
import morgan from 'morgan'
const app = express()
app.use(express.json())  //also a middleware (post ki request se jab body mai data bhejty hain to ye osy json mai convert kr deta hai)
const PORT = 3000


// middleware application level
app.use(morgan('tiny'))    //morgan use krty hian check krny ke lia ke konsi api call ho rhi hai

// application level middleware

function middleware(req, res, next){
    // console.log("Middleware", Date.now());   //eg of executing any code
    req.requestBy = "Muhammad Ibrahim"   //eg of doing changes in req/res
    res.status(500).send("System mai maslah ho gya bhai!!!!") // eg of ending req.res cycle!!!
    next();
}

// app.use(middleware);

app.get("/", middleware,  (req,res)=>{
    res.send("HELLO FROM NEW NODE..... I LOVE YOU")
    console.log("Request by --> ", req.requestBy)
})
app.post("/", (req,res)=>{
    console.log("req.body->", req.body)
    res.send(users)
})

app.listen(PORT, ()=>{
    console.log(`The server is running on http://localhost:${PORT}`)
})

