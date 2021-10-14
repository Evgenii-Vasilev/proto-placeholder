const path = require('path')
const clientPath = __dirname + '/../client'
const express = require('express')
const server = express()
const router = express.Router()
const livereload = require("livereload")
const connectLivereload = require("connect-livereload")

const liveReloadServer = livereload.createServer()
liveReloadServer.watch(clientPath)
server.use(connectLivereload())


router.get('/', (req, res) => {
    res.sendFile(path.join(clientPath, 'pages/main.html'))
})

router.get('/proto', (req, res) => {
    const file = path.join(__dirname, 'db/test.txt')
    res.download(file, 'proto.txt', err => {
        if (err) console.error(err)
    })
})

server.use('/', router)
server.use(express.static(clientPath))

server.listen(3000, () => {
    console.log('Server running on PORT: http://localhost:3000/')
})