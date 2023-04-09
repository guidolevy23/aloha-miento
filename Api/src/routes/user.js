const { Router } = require('express');
const {User} = require("../db.js");
const router = Router()

router.post("/user", async (req,res) => {
    try {
        const {email , name ,last_name ,image} = req.body;
        console.log(email);
        const newUser = await User.create({email , name ,last_name ,image}); 
        res.status(200).send(newUser)
    } catch (error) {
        res.status(400).send(error.message)
    }
    
})

module.exports = router;