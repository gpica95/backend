module.exports = (Sequelize, DataTypes) => {
    const Control = Sequelize.define('Control', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
      },  
      NumCo: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      FK_ID_Acce: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
      }
    }, { timestamps: false });
    return Control
} 