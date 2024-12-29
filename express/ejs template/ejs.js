const express = require('express')
const app = express()
const port = 3000
app.use(express.static("template"))
app.get('/', (req, res) => {
    res.send(`hello world`)
})
app.listen(port, () => {
    console.log(port)
})