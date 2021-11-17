const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.end('Start from NodeJS')
})

app.listen(3000, () => {
    console.log('Server has started on port 3000...')
})