const express = require("express")
const app = express()
const port = 4000


const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://jegunwoo:<Wprjsdn12>@cluster0.ulw6d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    userNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log("MongoDB is connectied...."))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send("hello world"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))