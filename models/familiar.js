const Propietario = require("./Propietario");

module.exports = (Sequelize, DataTypes) => {
    const Familiar = Sequelize.define('Familiar', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
      },  
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      edad: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      correo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      parent: {
        type: DataTypes.STRING,
        allowNull: false
      },
      FK_ID_Pro: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
      }
    }, { timestamps: false });

    
    return Familiar
} 