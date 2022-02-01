const resolvers = {

    Query: {

        //Get 
        async getPropietarios(root, args, { models }){
            return await models.propietario.findAll()
        },
        async getPropietario(root, args, { models }) {
            return await models.propietario.findByPk(args.id)
        },
        async getAccesos(root, args, { models }){
            return await models.acceso.findAll()
        },
        async getAcceso(root, args, { models }) {
            return await models.acceso.findByPk(args.id)
        },
        async getAreasco(root, args, { models }){
            return await models.areasco.findAll()
        },
        async getAreaco(root, args, { models }) {
            return await models.areasco.findByPk(args.id)
        },
        async getFacturas(root, args, { models }){
            return await models.factura.findAll()
        },
        async getFactura(root, args, { models }) {
            return await models.factura.findByPk(args.id)
        },
        async getFamiliares(root, args, { models }){
            return await models.familiar.findAll()
        },
        async getFamiliar(root, args, { models }) {
            return await models.familiar.findByPk(args.id)
        },
        async getControles(root, args, { models }){
            return await models.control.findAll()
        },
        async getControl(root, args, { models }) {
            return await models.control.findByPk(args.id)
        },
        async getEdificios(root, args, { models }){
            return await models.edificio.findAll()
        },
        async getEdificio(root, args, { models }) {
            return await models.edificio.findByPk(args.id)
        },
        async getApartamentos(root, args, { models }){
            return await models.apartamento.findAll()
        },
        async getApartamento(root, args, { models }) {
            return await models.apartamento.findByPk(args.id)
        },
        async getEmpleados(root, args, { models }){
            return await models.empleado.findAll()
        },
        async getEmpleado(root, args, { models }) {
            return await models.empleado.findByPk(args.id)
        },
        async getGastos(root, args, { models }){
            return await models.gasto.findAll()
        },
        async getGasto(root, args, { models }) {
            return await models.gasto.findByPk(args.id)
        },

        //Update

       async updatePropietarios(root, args, { models }){
            return await models.propietario.findAll()
        },
        async updatePropietario(root, args, { models }) {
            return await models.propietario.findByPk(args.id)
        },
        async updateAccesos(root, args, { models }){
            return await models.acceso.findAll()
        },
        async updateAcceso(root, args, { models }) {
            return await models.acceso.findByPk(args.id)
        },
        async updateAreasco(root, args, { models }){
            return await models.areasco.findAll()
        },
        async updateAreaco(root, args, { models }) {
            return await models.areasco.findByPk(args.id)
        },
        async updateFacturas(root, args, { models }){
            return await models.factura.findAll()
        },
        async updateFactura(root, args, { models }) {
            return await models.factura.findByPk(args.id)
        },
        async updateFamiliares(root, args, { models }){
            return await models.familiar.findAll()
        },
        async updateFamiliar(root, args, { models }) {
            return await models.familiar.findByPk(args.id)
        },
        async updateControles(root, args, { models }){
            return await models.control.findAll()
        },
        async updateControl(root, args, { models }) {
            return await models.control.findByPk(args.id)
        },
        async updateEdificios(root, args, { models }){
            return await models.edificio.findAll()
        },
        async updateEdificio(root, args, { models }) {
            return await models.edificio.findByPk(args.id)
        },
        async updateApartamentos(root, args, { models }){
            return await models.apartamento.findAll()
        },
        async updateApartamento(root, args, { models }) {
            return await models.apartamento.findByPk(args.id)
        },
        async updateEmpleados(root, args, { models }){
            return await models.empleado.findAll()
        },
        async updateEmpleado(root, args, { models }) {
            return await models.empleado.findByPk(args.id)
        },
        async updateGastos(root, args, { models }){
            return await models.gasto.findAll()
        },
        async updateGasto(root, args, { models }) {
            return await models.gasto.findByPk(args.id)
        }

    },
 
            
    Mutation: {

        //create

        async createPropietario(root, { nombre, cedula, correo, numprop, telefono, active }, { models }){
            return await models.propietario.create( { nombre, cedula, correo, numprop, telefono, active })
        },
        async createAcceso(root, { cedulaVi, infoVeh, horaEn, horaSa,fk_prop, active }, { models }){
            return await models.acceso.create( { cedulaVi, infoVeh, horaEn, horaSa,fk_prop, active })
        },
        async createAreasco(root, { nombre, FK_gas, active }, { models }){
            return await models.areasco.create( { nombre,FK_gas, active })
        },
        async createControl(root, { NumCo, FK_ID_Acce, active }, { models }){
            return await models.control.create( { NumCo, FK_ID_Acce, active })
        },
        async createEdificio(root, { nombre, numPisos, numApt, numPer, FKPro_Ed, active }, { models }){
            return await models.edificio.create( { nombre, numPisos, numApt, numPer,FKPro_Ed, active })
        },
        async createEmpleado(root, { nombre, cedula, labor, salario, telefono, infoBanco,fk_areasco, active }, { models }){
            return await models.empleado.create( { nombre, cedula, labor, salario, telefono, infoBanco,fk_areasco, active })
        },
        async createFactura(root, { instr, monto, iva, apt,FK_CI_Gas, active }, { models }){
            return await models.factura.create( { instr, monto, iva, apt,FK_CI_Gas, active })
        },
        async createFamiliar(root, { nombre, edad, telefono, correo, parent,FK_ID_Pro, active }, { models }){
            return await models.familiar.create( { nombre, edad, telefono, correo, parent,FK_ID_Pro, active })
        },
        async createGasto(root, { mantCal, luz, agua, mantAse, projar, prolimp, bombil, gasnoco, bonos, sueltra, retenc,FK_Fac, active }, { models }){
            return await models.gasto.create( { mantCal, luz, agua, mantAse, projar, prolimp, bombil, gasnoco, bonos, sueltra, retenc,FK_Fac, active })
        },
        async createApartamento(root, { NumApt ,NumLocal,NumQuinta, FK_ProLoc, active }, { models }){
            return await models.apartamento.create( {NumApt ,NumLocal,NumQuinta, FK_ProLoc, active })
        },

        //update

        async updatePropietario(root, { nombre, cedula, correo, numprop, telefono, active }, { models }){
            return await models.propietario.update( { nombre, cedula, correo, numprop, telefono, active })
        },
        async updateAcceso(root, { cedulaVi, infoVeh, horaEn, horaSa,fk_prop, active }, { models }){
            return await models.acceso.update( { cedulaVi, infoVeh, horaEn, horaSa,fk_prop, active })
        },
        async updateAreasco(root, { nombre, FK_gas, active }, { models }){
            return await models.areasco.update( { nombre,FK_gas, active })
        },
        async updateControl(root, { NumCo, FK_ID_Acce, active }, { models }){
            return await models.control.update( { NumCo, FK_ID_Acce, active })
        },
        async updateEdificio(root, { nombre, numPisos, numApt, numPer, FKPro_Ed, active }, { models }){
            return await models.edificio.update( { nombre, numPisos, numApt, numPer,FKPro_Ed, active })
        },
        async updateEmpleado(root, { nombre, cedula, labor, salario, telefono, infoBanco,fk_areasco, active }, { models }){
            return await models.empleado.update( { nombre, cedula, labor, salario, telefono, infoBanco,fk_areasco, active })
        },
        async updateFactura(root, { instr, monto, iva, apt,FK_CI_Gas, active }, { models }){
            return await models.factura.update( { instr, monto, iva, apt,FK_CI_Gas, active })
        },
        async updateFamiliar(root, { nombre, edad, telefono, correo, parent,FK_ID_Pro, active }, { models }){
            return await models.familiar.update( { nombre, edad, telefono, correo, parent,FK_ID_Pro, active })
        },
        async updateGasto(root, { mantCal, luz, agua, mantAse, projar, prolimp, bombil, gasnoco, bonos, sueltra, retenc,FK_Fac, active }, { models }){
            return await models.gasto.update( { mantCal, luz, agua, mantAse, projar, prolimp, bombil, gasnoco, bonos, sueltra, retenc,FK_Fac, active })
        },
        async updateApartamento(root, { NumApt ,NumLocal,NumQuinta, FK_ProLoc, active }, { models }){
            return await models.apartamento.update( { NumApt ,NumLocal,NumQuinta, FK_ProLoc, active })
        }
    }
}

module.exports = resolvers