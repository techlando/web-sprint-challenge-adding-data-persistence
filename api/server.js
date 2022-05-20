const express = require('express')
const resourceRouter = require('./resource/router')
const projectsRouter = require('./project/router')
const tasksRouter = require('./task/router')
const server = express()

server.use(express.json())

server.use('/api/resources', resourceRouter)
server.use('/api/projects', projectsRouter)
server.use('/api/tasks', tasksRouter)

server.use('*', (req, res, next) => {
    res.json({ api: 'up' })
})

module.exports = server
