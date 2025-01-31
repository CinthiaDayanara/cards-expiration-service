require("dotenv").config();
const express = require("express");
const expirationRoutes = require("./src/routes/expirationRoutes");
const sequelize = require("./src/config/database");

// Importar el cron job para que se ejecute automáticamente
require("./src/jobs/cardExpirationJob");

const app = express();
app.use(express.json());

app.use("/expiration", expirationRoutes);

const PORT = process.env.PORT || 5011;
sequelize.sync()
  .then(() => {
    console.log("📦 Base de datos sincronizada");
    app.listen(PORT, () => {
      console.log(`🚀 Cards Expiration Service corriendo en el puerto ${PORT}`);
    });
  })
  .catch(error => console.error("❌ Error al sincronizar la base de datos:", error));
