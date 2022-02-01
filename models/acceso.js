module.exports = (Sequelize, DataTypes) => {
    const Acceso = Sequelize.define('Acceso', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
      },  
      cedulaVi: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      infoVeh: {
        type: DataTypes.STRING,
        allowNull: false
      },
      horaEn: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      horaSa: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fk_prop : {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
      }
    }, { timestamps: false });
    return Acceso
} 