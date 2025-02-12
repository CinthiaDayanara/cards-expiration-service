const express = require("express");
const { getCards, deleteCard } = require("../controllers/expirationController");  // Importa el controlador
const router = express.Router();

// Ruta para obtener todas las tarjetas
router.get("/", getCards);

// Ruta para eliminar una tarjeta
router.delete("/:id", deleteCard);  // :id es el parámetro que recibe el ID de la tarjeta a eliminar

module.exports = router;
