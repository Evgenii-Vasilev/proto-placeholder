const path = require('path')
const clientPath = __dirname + '/../client/pages'
const express = require('express')
const server = express()
const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(clientPath, 'main.html'))
})

router.get('/proto', (req, res) => {
    const file = path.join(__dirname, 'db/test.txt')
    res.download(file, 'proto.txt', err => {
        if (err) console.error(err)
    })
})

server.use('/', router)
server.listen(3000, () => {
    console.log('Server running on PORT: http://localhost:3000/')
})