const { Router } = require('express');
const {Seller} = require("../db");
const router = Router()

//post one

router.post('/', async(req,res)=>{
    try {
        const {email , name ,last_name ,image} = req.body;
        const newSeller = await Seller.create({email , name ,last_name ,image});
        res.status(200).send(newSeller);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

//get all
router.get('/' , async(req,res)=>{
    try {
        const allSeller = await Seller.findAll();
        res.status(200).send(allSeller);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

//get one
router.get('/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const oneSeller = await Seller.findOne({
            where:{
                id_seller:id,
            },
        });
        if(!oneSeller) throw new Error("Seller does not exist")
        res.status(200).send(oneSeller)
    } catch (error) {
        res.status(404).send(error.message)
    }
})


//update one
router.put('/', async(req,res)=>{
    try {
        const {id_Seller , id_depto} = req.body;
        const theSeller = await Seller.findByPk(id_Seller);
        await theSeller.addDeptos(id_depto);
        res.status(200).send(theSeller);
    } catch (error) {
        
    }
})

//delete one
router.delete('/:id', async (req,res) =>{
    const {id} = req.params
    try {
        const deletedSeller = await Seller.findByPk(id)
        await Seller.destroy({where:{id:id}})
        res.status(200).send(deletedSeller);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

module.exports = router;