// server.js
const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send('Hello Springworks!!')
})
app.listen(3000, () => {
    console.log('Server is up on 3000')
})
