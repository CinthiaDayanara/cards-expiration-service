const express = require("express");
const { getCards, deleteCard } = require("../controllers/expirationController");  // Importa el controlador
const router = express.Router();


// Ruta para eliminar una tarjeta
router.delete("/:id", deleteCard);  // :id es el parámetro que recibe el ID de la tarjeta 

module.exports = router;
