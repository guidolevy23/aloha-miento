const { Router } = require('express');
const {Depto} = require("../db");
const router = Router()

//get all
router.get('/' , async(req,res)=>{
    try {
        const allDepto = await Depto.findAll();
        res.status(200).send(allDepto);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

//get one
router.get('/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const oneDepto = await Depto.findAll({
            where:{
                id:id
            }
        });
        if(!oneDepto[0].dataValues.name){
            throw Error()
        }
        res.status(200).send(oneDepto)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

//post one
router.post("/", async (req,res)=>{
    try {
        const {meters , ubication ,owner ,price, available, images , description} = req.body;
        const newDepto = await Depto.create({meters , ubication ,owner ,price, available, images , description})
        res.status(200).send(newDepto)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

//delete one

module.exports = router;