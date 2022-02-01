module.exports = (Sequelize, DataTypes) => {
    const Gasto = Sequelize.define('Gasto', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
      },  
      mantCal: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      luz: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      agua: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      mantAse: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      projar: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      prolimp: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      bombil: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      gasnoco: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      bonos: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      sueltra: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      retenc: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      FK_Fac: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
      }
    }, { timestamps: false });
    return Gasto
} 