const router = require('express').Router()

router.get('/', (res, req) => {

})
router.post('/', (res, req) => {
    
})



router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'ERROR ERROR something went wrong in the projects router, RUN FROM THE BOOGYBUG',
        message: err.message,
        stack: err.stack

    })
})

module.exports = router