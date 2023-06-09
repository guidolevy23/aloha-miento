const { Router } = require('express');
const {User , Depto, Seller} = require("../db.js");
const router = Router()

//get all
// find all trae un array
router.get('/' , async(req,res)=>{
    try {
        const allUser = await User.findAll({
            include: [{model:Depto},{model:Seller}],
        });
        res.status(200).send(allUser);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

//get one
router.get('/:id', async(req,res)=>{
    try {
        const {id} = req.params;
        const oneUser = await User.findOne({
            where:{
                id_user:id,
            },
            include: [{model:Depto},{model:Seller}],
        });
        if(!oneUser) throw new Error("User does not exist")
        res.status(200).send(oneUser)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

//post one
router.post("/", async (req,res) => {
    try {
        const {email , name ,last_name ,image} = req.body;
        const newUser = await User.create({email , name ,last_name ,image}); 
        res.status(200).send(newUser)
    } catch (error) {
        res.status(400).send(error.message)
    }
    
})

//update one
router.put('/', async(req,res)=>{
    console.log("ESTOY EN ROUTES")
    try {
        const {id_user , id_depto} = req.body;
        const theUser = await User.findByPk(id_user);
        const theDepto = await Depto.findOne({
            where:
                {id_depto},
            include:Seller
        });
        
        console.log(theUser,theDepto)
        await theUser.addDeptos(theDepto);
        await theUser.addSeller(theDepto.Seller.dataValues.id_seller)
        res.status(200).send(theUser);
    } catch (error) {
        
    }
})

//delete one
router.delete('/:id', async (req,res) =>{
    const {id} = req.params
    try {
        const deletedUser = await User.findByPk(id)
        await User.destroy({where:{id:id}})
        res.status(200).send(deletedUser);
    } catch (error) {
        res.status(404).send(error.message);
    }
})

module.exports = router;