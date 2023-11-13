const express = require("express");
const app  = express();
const path = require("path");


app.use(express.static("public"));

let port = process.env.PORT || 3000;
let mensajeIncializacion = "servidor corriendo en puerto ";

app.listen(port, ()=>{
    console.log(mensajeIncializacion + port);
})

app.get("/", (req, res)=>{
    res.sendFile(path.resolve("./views/home.html"));
})


app.get("/register", (req, res)=>{
    res.sendFile(path.resolve("./views/register.html"));
})


app.get("/login", (req, res)=>{
    res.sendFile(path.resolve("./views/login.html"));
})