module.exports = (Sequelize, DataTypes) => {
    const Edificio = Sequelize.define('Edificio', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
      },  
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      numPisos: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      numApt: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      numPer: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
      },
      FKPro_Ed: {
            type: DataTypes.INTEGER,
            allowNull: true,
      }
    }, { timestamps: false });
    return Edificio
} 