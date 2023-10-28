const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).send({message : "Hello World"})
})

app.listen(5000, () => {
    console.log("App listening on port 5000")
})