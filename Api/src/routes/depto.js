const { Router } = require('express');
const {Depto} = require("../db");
const router = Router()

router.post("/depto", async (req,res)=>{
    try {
        const {meters , ubication ,owner ,price, available, images , description} = req.body;
        // console.log(meters , ubication ,owner ,price, available, images , description);
        const newDepto = await Depto.create({meters , ubication ,owner ,price, available, images , description})
        res.status(200).send(newDepto)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router;