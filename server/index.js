const express = require("express")
const mongoose = require("mongoose")
const server = express()
const userRoutes = require("./routes/userRoutes.js")
const cors = require("cors")


server.use(cors())
server.use(express.json())
server.use("/usuarios",userRoutes)
mongoose.connect('mongodb://localhost:27017/tienda2')
  .then(() => console.log(' Conectado a MongoDB'))
  .catch((err) => console.error(' Error de conexión:', err));








server.listen(3000,()=>{
    console.log("escuchando en el puerto 3000")
})