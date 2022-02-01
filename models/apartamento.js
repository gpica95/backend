module.exports = (Sequelize, DataTypes) => {
    const Apartamento = Sequelize.define('Apartamento', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
      },  
      NumApt: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      NumLocal: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
     NumQuinta: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      FK_ProLoc: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
      }
    }, { timestamps: false });
    return Apartamento
} 