module.exports = (Sequelize, DataTypes) => {
    const Areasco = Sequelize.define('Areasco', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
      },  
      nombre:{
         type: DataTypes.STRING,
         allowNull: false,
         force: true,
      },
      FK_gas: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
      }
    }, { timestamps: false });
    return Areasco
} 