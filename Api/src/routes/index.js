const { Router } = require('express');
const userRouter = require('./user.js')
const deptoRouter = require('./depto.js')
const sellerRouter = require('./seller.js');

const router = Router()

router.use('/user', userRouter);
router.use('/depto', deptoRouter);
router.use('/seller', sellerRouter);

module.exports = router;