//conexion con base datos
import Sequelize from 'sequelize'


const sequelize = new Sequelize('venetrip', 'root', '13579',   {
    host: 'localhost',
    dialect: 'mysql'

})

const models = {
    habitacion: sequelize.import('./habitacion'),
    cliente: sequelize.import('./cliente'),
    tipo: sequelize.import('./tipo'),
    reserva: sequelize.import('./reserva'),
    establecimiento: sequelize.import('./establecimiento'),

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