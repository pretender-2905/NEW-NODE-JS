import express from 'express'
const router = express.Router()
const users = [
    {
        fullname: "Ibrahim",
        email: "muhammadibrahim29052005@gmail.com",
        id : 1,
    },
];

router.get("/", (req,res)=>{
    res.status(200).json({
        error: false,
        data: users,
        msg: "User's fetched Successfully"
    });
});

router.post("/", (req, res)=>{
    const {name, fullname} = req.body
    users.push({fullname, name, id: users.lenth + 1});
    res.status(201).json({
        error: false,
        data:users,
        msg: "User added Successfully!"
    })
})

// get with params
router.get("/:id", (req,res)=>{
    const user = users.find((data)=> data.id == req.params.id)
    if(!user){
        return res.status(404).json({
            error: true,
            data:null,
            msg: "User not found"
        });
    }
    res.status(200).json({
        error: false,
        data: user,
        msg: "User found"
    })
    
})

export default router;


// fetch kry gain aur successfuly fetch hoga to status:200
// add kry gain aur successfuly add hoga to status:201