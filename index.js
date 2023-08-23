const express = require('express')
const app = express()
const port = 3000

app.get('/homepage', (req, res) => res.send("goodbye, world!"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})