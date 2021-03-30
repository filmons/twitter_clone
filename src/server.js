const express = require('express')
const server = express()
const port = 8080

server.get('/', (request, response) => {
    response.send('Hello World!')
})

server.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})