const cron = require("node-cron");
const Card = require("../models/Card");
const { Op } = require("sequelize");

const expireCards = async () => {
  try {
    const now = new Date();
    const updated = await Card.update(
      { status: "expired" },
      { where: { due_date: { [Op.lt]: now }, status: "active" } }
    );
    
    if (updated[0] > 0) {
      console.log(`✅ ${updated[0]} tarjetas marcadas como expiradas.`);
    }
  } catch (error) {
    console.error("❌ Error en la expiración de tarjetas:", error);
  }
};

// Ejecutar cada 5 minutos
cron.schedule("*/5 * * * *", expireCards);

module.exports = expireCards;
