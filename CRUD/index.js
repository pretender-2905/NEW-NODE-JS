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
import userRoutes from './routers/user.js'
// import coursesRoutes from './routers/courses.js'
const app = express()
app.use(express.json())  //also a middleware (post ki request se jab body mai data bhejty hain to ye osy json mai convert kr deta hai)
const PORT = 3000

const tasks = [
    {
        id: 1,
        task: "Wake up at 5:00 am",
        completed: false
    },
    {
        id: 2,
        task: "Break Fast",
        completed: true
    },
    {
        id: 3,
        task: "Get ready for University",
        completed: true
    },
    {
        id: 4,
        task: "Study Node js",
        completed: false
    }
]

// middleware application level
app.use(morgan('tiny'))    //morgan use krty hian check krny ke lia ke konsi api call ho rhi hai

// application level middleware

function middleware(req, res, next){
    // console.log("Middleware", Date.now());   //eg of executing any code
    req.requestBy = "Muhammad Ibrahim"   //eg of doing changes in req/res
    // res.status(500).send("System mai maslah ho gya bhai!!!!") // eg of ending req.res cycle!!!
    next();
}

app.use(middleware); // koi bhi api call karengy to middle ware chaly ga

// app.get("/",  (req,res)=>{
//     res.send("HELLO FROM NEW NODE..... I LOVE YOU")
//     console.log("Request by --> ", req.requestBy)
// })

// ------------------------------------------------------------
// params start
// app.get("/",  (req,res)=>{
//     console.log("requested by-->", req.requestBy);
//     res.status(200).send(tasks)
// })

app.get("/singleTask/:id", (req,res)=>{
    const task = tasks.find((data)=> data.id == req.params.id)
    if(!task) return res.status(404).send("Task Not found")
    res.status(200).send(task)
})
// params end
// --------------------------------------------------------------

// query start


app.get("/", (req,res)=>{
    const {completed} = req.query
   let  filter 
    if(completed){
        filter = tasks.filter((data)=> completed == "1" ? data.completed == true : data.completed ==false)
    }
        res.status(200).send(filter)
})

// query end
// -----------------------------------------------------------
app.use("/user", userRoutes)
// app.use("/courses", coursesRoutes)


// app.post("/", (req,res)=>{
//     console.log("req.body->", req.body)
//     res.send(users)
// })

app.listen(PORT, ()=>{
    console.log(`The server is running on http://localhost:${PORT}`)
})

