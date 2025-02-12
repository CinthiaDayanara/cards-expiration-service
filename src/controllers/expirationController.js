const Card = require("../models/Card");  // Asegúrate de que el modelo esté bien importado

// Controlador para eliminar una tarjeta
const deleteCard = async (req, res) => {
  const { id } = req.params;  // Obtiene el ID de la tarjeta desde los parámetros de la URL

  try {
    const card = await Card.findByPk(id);  // Busca la tarjeta por ID

    if (!card) {
      return res.status(404).json({ message: "Tarjeta no encontrada" });
    }

    await card.destroy();  // Elimina la tarjeta de la base de datos
    res.status(200).json({ message: "Tarjeta eliminada exitosamente" });
  } catch (error) {
    console.error("Error al eliminar la tarjeta:", error);
    res.status(500).json({ message: "Error al eliminar la tarjeta" });
  }
};

module.exports = {
  deleteCard,
};
