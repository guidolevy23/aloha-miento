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
        const oneDepto = await Depto.findByPk(id)
        if(!oneDepto) throw new Error("User does not exist")
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
router.delete('/:id', async (req,res) =>{
    const {id} = req.params
    console.log(id);
    try {
        const deletedDepto = await Depto.findByPk()
        await Depto.destroy({where:{id:id}})
        res.status(200).send(deletedDepto);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

module.exports = router;