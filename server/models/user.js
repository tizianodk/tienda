const  mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    nombre : String,
    apellido : String,
    email : String,
    password : String
})


const User = mongoose.model("usuarios",UserSchema)

module.exports=User
