const { Router } = require('express');
const {User} = require("../db.js");
const router = Router()

router.get('/' , async(req,res)=>{
    try {
        const allUser = await User.findAll();
        res.status(200).send(allUser);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

router.get('/', async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})

router.delete('/:id', async (req,res) =>{
    const {id} = req.params
    console.log(id);
    try {
        const deletedUser = await User.findAll({id:id})
        await User.destroy({where:{id:id}})
        res.status(200).send(deletedUser);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

router.post("/", async (req,res) => {
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