const { Op } = require("sequelize");
const Card = require("../models/Card");

// Obtener tarjetas activas
exports.getActiveCards = async (req, res) => {
  try {
    const now = new Date();
    const activeCards = await Card.findAll({ 
      where: { due_date: { [Op.gt]: now }, status: "active" } 
    });
    res.json(activeCards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener tarjetas expiradas
exports.getExpiredCards = async (req, res) => {
  try {
    const expiredCards = await Card.findAll({ 
      where: { status: "expired" } 
    });
    res.json(expiredCards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
