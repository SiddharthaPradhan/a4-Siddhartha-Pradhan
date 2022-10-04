const express = require('express')

const app = express()


app.use(express.static("./public/"));
app.use(express.static("./node_modules/"));


app.listen(process.env.PORT || 3000)
console.log("Server started")