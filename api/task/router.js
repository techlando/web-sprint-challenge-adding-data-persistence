const router = require('express').Router()
const Tasks = require('./model');


router.get('/', async (req, res) => {
    try {
        const task = await Tasks.getAll() 
        res.json(task)
    } catch(err) {
        next(err)
    }
})
router.post('/', async (req, res) => {
    try {
        const task = await Tasks.create(req.body) 
        res.json(task)
    } catch(err) {
        next(err)
    }
})


router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'ERROR ERROR something went wrong in the tasks router, RUN FROM THE BOOGYBUG',
        message: err.message,
        stack: err.stack

    })
})

module.exports = router