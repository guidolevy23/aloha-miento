const { Router } = require('express');
const userRouter = require('./user.js')
const deptoRouter = require('./depto.js')

const router = Router()

router.use('/user', userRouter);
router.use('/depto', deptoRouter);

module.exports = router;