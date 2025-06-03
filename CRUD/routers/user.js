import express from 'express'
const router = express.Router()

const users = [
    {
        id: 1,
        fulname: "Muhammad Ibrahim",
        email: "muhammadibrahim29052005@gmail.com"
    }
];

router.get("/", (req,res)=>{
    res.status(200).json({
        error: false,
        data: users,
        msg: "User's fetched successfully!"
    })
})

router.post("/", (req,res)=>{
    const {email, fulname} = req.body;
    users.push({ id: users.length + 1 ,  fulname, email})
    res.status(201).json({
        error: false,
        data: users,
        msg: "User added successfully!"
    })
})

router.get("/:id", (req,res)=>{
   const user = users.find((data)=> data.id == req.params.id)
   if(!user){
    return res.status(404).json({
        error: true,
        data: null,
        msg: "User Not found"
    })
   }
   res.status(200).json({
    error: false,
    data: user,
    msg: "User Found"
   })

})

export default router