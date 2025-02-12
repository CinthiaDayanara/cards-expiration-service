require("dotenv").config();
const express = require("express");
const cardsRoutes = require("./src/routes/expirationRoutes");
const sequelize = require("./src/config/database");

const app = express();
app.use(express.json());

// Usamos las rutas de tarjetas
app.use("/cards", cardsRoutes);

const PORT = process.env.PORT || 5011;
sequelize.sync()
  .then(() => {
    console.log("📦 Base de datos sincronizada");
    app.listen(PORT, () => {
      console.log(`🚀 Cards Service corriendo en el puerto ${PORT}`);
    });
  })
  .catch(error => console.error("❌ Error al sincronizar la base de datos:", error));
