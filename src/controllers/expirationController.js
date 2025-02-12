const { Card } = require("../models");

exports.deleteCard = async (req, res) => {
  try {
    const cardId = req.params.id; // Obtener el ID de la tarjeta desde los parámetros de la ruta

    const card = await Card.findByPk(cardId);

    if (!card) {
      return res.status(404).json({ error: "Tarjeta no encontrada" });
    }

    await card.destroy(); // Eliminar la tarjeta

    res.status(200).json({ message: "Tarjeta eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la tarjeta" });
  }
};
