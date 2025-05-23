const express = require("express");
const multer = require("multer");
const productController = require("../controllers/ProductController");

const router = express.Router();

// Configuración de multer
const upload = multer({ dest: "uploads/" }); // ✅ SOLO ESTA

// Rutas
router.post("/", upload.single("imagen"), productController.Post);
router.get("/", productController.get);
router.put("/editar/:id", upload.single("imagen"), productController.put); // ✅ Agregá multer acá también
router.delete("/:id", productController.delete);

module.exports = router;

router.post("/",upload.single('imagen'),productController.Post)
router.get("/",productController.get)
router.put("/editar/:id",productController.put)
router.delete("/:id",productController.delete)
module.exports = router