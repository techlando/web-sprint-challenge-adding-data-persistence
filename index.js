require('dotenv').config()

const server = require('./api/server');

const port = process.env.PORT 

server.listen(port, () => console.log(`***SERVER RUNNING*** on port ${port}`))