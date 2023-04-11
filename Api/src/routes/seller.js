const { Router } = require('express');
const {Seller} = require("../db");
const router = Router()

router.post('/', async(req,res)=>{
    try {
        const {email , name ,last_name ,image} = req.body;
        const newSeller = await Seller.create({email , name ,last_name ,image});
        res.status(200).send(newSeller);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router;