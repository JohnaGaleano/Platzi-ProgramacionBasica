let servidor = require("express")
let server = servidor()

server.get("/", home )

function home (req,res)
{
    res.send("You'r welcome")
}

server.listen(3000)