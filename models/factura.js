
module.exports = (Sequelize, DataTypes) => {
    const Factura = Sequelize.define('Factura', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
      },  
      instr: {
        type: DataTypes.STRING,
        allowNull: false
      },
      monto: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      iva: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      apt: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      FK_CI_Gas: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
      active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
      },
    }, { timestamps: false });
  
    return Factura
} 