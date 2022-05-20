const router = require('express').Router()
const Resources = require('./model')

// router.get('/', (res, req) => {
//     // Resources.find()
//     //     .then(resource => {
//     //         res.json(resource)
//     //     })
   
// })
// router.post('/', (res, req) => {
    
// })



router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'ERROR ERROR something went wrong in the resource router, RUN FROM THE BOOGYBUG',
        message: err.message,
        stack: err.stack

    })
})

module.exports = router