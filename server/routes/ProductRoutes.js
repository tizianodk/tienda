const express = require("express")
const upload = require("../middlewares/uploads");
const productController = require("../controllers/ProductController")
const router = express.Router()

router.post("/",upload.single('imagen'),productController.Post)

module.exports = router