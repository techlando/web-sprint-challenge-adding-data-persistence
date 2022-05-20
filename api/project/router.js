const router = require('express').Router()

router.use('*', (req, res, next) => {
    res.json({ api: 'up' })
})

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'ERROR ERROR something went wrong in the projects router, RUN FROM THE BOOGYBUG',
        message: err.message,
        stack: err.stack

    })
})

module.exports = router