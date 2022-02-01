//conexion con base datos
import Sequelize from 'sequelize'


const sequelize = new Sequelize('smartco', 'root', '13579',   {
    host: 'localhost',
    dialect: 'mysql'

})

const models = {
    propietario: sequelize.import('./propietario'),
    acceso: sequelize.import('./acceso'),
    areasco: sequelize.import('./areasco'),
    factura: sequelize.import('./factura'),
    familiar: sequelize.import('./familiar'),
    control: sequelize.import('./control'),
    apartamento: sequelize.import('./apartamento'),
    empleado: sequelize.import('./empleado'),
    edificio: sequelize.import('./edificio'),
    gasto: sequelize.import('./gasto'),

}

/*Object.keys(models).forEach(Propietario => {
    if ('associate' in models[Propietario]) {
        models[Propietario].associate(models)
    }
})*/

/*Object.keys(models).forEach(Familiares => {
    if ('associate' in models[Familiares]) {
        models[Familiares].associate(models)
    }
})*/

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models