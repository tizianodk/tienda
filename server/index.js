const express = require("express")
const mongoose = require("mongoose")
const server = express()
const userRoutes = require("./routes/userRoutes.js")
const productRoutes = require("./routes/ProductRoutes.js")
const cors = require("cors")
const ordenRoutes =require("./routes/ordenRoutes.js")
require('dotenv').config();


server.use(cors())
server.use(express.json())
server.use("/uploads", express.static("uploads"));
server.use("/usuarios",userRoutes)
server.use("/productos",productRoutes)
server.use("/ordenes",ordenRoutes)


mongoose.connect('mongodb://localhost:27017/tienda2')
  .then(() => console.log(' Conectado a MongoDB'))
  .catch((err) => console.error(' Error de conexión:', err));








server.listen(3000,()=>{
    console.log("escuchando en el puerto 3000")
})