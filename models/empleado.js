module.exports = (Sequelize, DataTypes) => {
    const Empleado = Sequelize.define('Empleado', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, 
      },  
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cedula: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      labor: {
        type: DataTypes.STRING,
        allowNull: false
      },
      salario: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      infoBanco: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      fk_areasco: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
      }
    }, { timestamps: false });
    return Empleado
} 