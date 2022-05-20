const router = require('express').Router()
const Projects = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const projects = await Projects.getAll()
       
        res.json(projects)
    } catch(err) {
        next(err)
    }
})
router.post('/', async (req, res, next) => {
    try {
        const project = await Projects.create(req.body) 
        res.json(project)
    } catch(err) {
        next(err)
    }
})



router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'ERROR ERROR something went wrong in the projects router, RUN FROM THE BOOGYBUG',
        message: err.message,
        stack: err.stack

    })
})

module.exports = router