// build your `Resource` model here
const db = require('../../data/dbConfig')

const find = (req, res, next) => {
    res.send('here')
}


module.exports = {
    find
}