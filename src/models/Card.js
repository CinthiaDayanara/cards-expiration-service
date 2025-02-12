const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Card = sequelize.define("Card", {
  id: { 
    type: DataTypes.INTEGER, 
    primaryKey: true, 
    autoIncrement: true 
  },
  titulo: { 
    type: DataTypes.STRING, 
    allowNull: false, 
    field: "titulo" // Mapeo al nombre exacto de la BD
  },
  descripcion: { 
    type: DataTypes.TEXT, 
    allowNull: true, 
    field: "descripcion"
  },
  fecha_vencimiento: { 
    type: DataTypes.DATE, 
    allowNull: true, 
    field: "fecha_vencimiento"
  },
  fecha_creacion: { 
    type: DataTypes.DATE, 
    allowNull: false, 
    defaultValue: DataTypes.NOW, 
    field: "fecha_creacion"
  },
  lista_id: { 
    type: DataTypes.INTEGER, 
    allowNull: false, 
    field: "lista_id" // No se define como FK porque en la BD no está declarada
  }
}, {
  tableName: "tarjetas", // Asegurar que Sequelize use el mismo nombre de la tabla en la BD
  timestamps: false // No usamos createdAt ni updatedAt porque ya tenemos "fecha_creacion"
});

module.exports = Card;
