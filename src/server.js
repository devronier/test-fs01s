const express = require("express")

const server = express()

server.use(express.json())

server.get("/", (req, res) => {

    res.status(200).send("Hello")
})

server.post("/login", (req, res) => {

    const login = req.body

    if(!login && !login?.email.includes("@")) {
        return res.sendStatus(400)
    }
    if(login?.senha.length < 6) {
        return res.sendStatus(400)
    }

    res.sendStatus(200)
})

 

function teste(nome = "") {
    nome.replace()
}
 

module.exports = server
