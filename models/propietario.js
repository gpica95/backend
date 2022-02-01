module.exports = (Sequelize, DataTypes) => {
    const Propietario = Sequelize.define('Propietario', {
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
      correo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      numprop: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      telefono: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
      }
    }, { timestamps: false });
    
    //Propietario.hasMany(Factura)
    //Factura.belongsTo(Propietario)   
      /*  Propietario.associate = facturas => {
        Propietario.hasMany(facturas, {
            foreignKey: {
                name: 'id',
                filed: 'pro_id'
            },
            as: 'factura',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        })
    }*

    /*Propietario.associate = function (models) {
        Propietario.hasMany(models.Familiares, {
            foreignKey: {
                name: 'id',
                filed: 'fam_id'
            },
            as: 'Familiares',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        });
    }*/

    return Propietario
    
} 