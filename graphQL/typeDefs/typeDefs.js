const{ gql } = require('apollo-server-express')

const typeDefs = gql`
 
type Propietario{
    id: Int!
    nombre: String!
    cedula: Int!
    correo: String!
    numprop: Int!
    telefono: Int!
    active: Boolean!
}

type Acceso{
    id: Int!
    cedulaVi: Int!
    infoVeh: String!
    horaEn: Int!
    horaSa: Int!
    fk_prop: Int!
    active: Boolean!
}

type Areasco{
    id: Int!
    nombre: String!
    FK_gas: Int!
    active: Boolean!
}

type Control{
    id: Int!
    NumCo: Int!
    FK_ID_Acce: Int!
    active: Boolean!
}

type Edificio{
    id: Int!
    nombre: String!
    numPisos: Int!
    numApt: Int!
    numPer: Int!
    FKPro_Ed: Int!
    active: Boolean!
}

type Empleado{
    id: Int!
    nombre: String!
    cedula: Int!
    labor: String!
    salario: Int!
    telefono: Int!
    infoBanco: Int!
    fk_areasco: Int!
    active: Boolean!
}

type Factura{
    id: Int!
    instr: String!
    monto: Int!
    iva: Int!
    apt: Int!
    FK_CI_Gas: Int!
    active: Boolean!
}

type Familiar{
    id: Int!
    nombre: String!
    edad: Int!
    telefono: Int!
    correo: String!
    parent: String!
    FK_ID_Pro: Int!
    active: Boolean!
}

type Gasto{
    id: Int!
    mantCal: Int!
    luz: Int!
    agua: Int!
    mantAse: Int!
    projar: Int!
    prolimp: Int!
    bombil: Int!
    gasnoco: Int!
    bonos: Int!
    sueltra: Int!
    retenc: Int!
    FK_Fac: Int!
    active: Boolean!
}

type Apartamento{
    id: Int!
    NumApt: Int!
    NumLocal: Int!
    NumQuinta: Int!
    FK_ProLoc: Int!
    active: Boolean!
}

type Query{
    

    getPropietarios: [Propietario],
    getPropietario(id: Int!): Propietario

    getAccesos: [Acceso],
    getAcceso(id: Int!): Acceso

    getAreasco: [Areasco],
    getAreaco(id: Int!): Areasco

    getEdificios: [Edificio],
    getEdificio(id: Int!): Edificio

    getEmpleados: [Empleado],
    getEmpleado(id: Int!): Empleado

    getFacturas: [Factura],
    getFactura(id: Int!): Factura

    getFamiliares: [Familiar],
    getFamiliar(id: Int!): Familiar

    getGastos: [Gasto],
    getGasto(id: Int!): Gasto

    getApartamentos: [Apartamento],
    getApartamento(id: Int!): Apartamento

    getControles: [Control],
    getControl(id: Int!): Control

    updatePropietarios: [Propietario],
    updatePropietario(id: Int!): Propietario

    updateAccesos: [Acceso],
    updateAcceso(id: Int!): Acceso

    updateAreasco: [Areasco],
    updateAreaco(id: Int!): Areasco

    updateEdificios: [Edificio],
    updateEdificio(id: Int!): Edificio

    updateEmpleados: [Empleado],
    updateEmpleado(id: Int!): Empleado

    updateFacturas: [Factura],
    updateFactura(id: Int!): Factura

    updateFamiliares: [Familiar],
    updateFamiliar(id: Int!): Familiar

    updateGastos: [Gasto],
    updateGasto(id: Int!): Gasto

    updateApartamentos: [Apartamento],
    updateApartamento(id: Int!): Apartamento

    updateControles: [Control],
    updateControl(id: Int!): Control

}

type Mutation{

    createPropietario(nombre: String!, cedula: Int!, correo: String!, numprop: Int!, telefono: Int!, active: Boolean!): Propietario!
    createAcceso(cedulaVi: Int!, infoVeh: String!, horaEn: Int!, horaSa: Int!,fk_prop: Int!, active: Boolean!): Acceso!
    createAreasco(nombre: String!,FK_gas: Int!, active: Boolean!): Areasco!
    createControl(NumCo: Int!,FK_ID_Acce: Int!, active: Boolean!): Control!
    createEdificio(nombre: String!, numPisos: Int!, numApt: Int!, numPer: Int!, FKPro_Ed: Int!, active: Boolean!): Edificio!
    createEmpleado(nombre: String!, cedula: Int!, labor: String!, salario: Int!, telefono: Int!, infoBanco: Int!,fk_areasco: Int!, active: Boolean!): Empleado!
    createFactura(instr: String!, monto: Int!, iva: Int!, apt: Int!,FK_CI_Gas: Int!, active: Boolean!): Factura!
    createFamiliar(nombre: String!, edad: Int!, telefono: Int!, correo: String!, parent: String!,FK_ID_Pro: Int!, active: Boolean!): Familiar!
    createGasto(mantCal: Int!, luz: Int!, agua: Int!, mantAse: Int!, projar: Int!, prolimp: Int!, bombil: Int!, gasnoco: Int!, bonos: Int!, sueltra: Int!, retenc: Int!, FK_Fac: Int!, active: Boolean!): Gasto!
    createApartamento(NumApt: Int!, NumLocal: Int!,NumQuinta: Int!, FK_ProLoc: Int!, active: Boolean!): Apartamento!
    

    updatePropietario(nombre: String!, cedula: Int!, correo: String!, numprop: Int!, telefono: Int!, active: Boolean!): Propietario!
    updateAcceso(cedulaVi: Int!, infoVeh: String!, horaEn: Int!, horaSa: Int!,fk_prop: Int!, active: Boolean!): Acceso!
    updateAreasco(nombre: String!,FK_gas: Int!, active: Boolean!): Areasco!
    updateControl(NumCo: Int!,FK_ID_Acce: Int!, active: Boolean!): Control!
    updateEdificio(nombre: String!, numPisos: Int!, numApt: Int!, numPer: Int!, FKPro_Ed: Int!, active: Boolean!): Edificio!
    updateEmpleado(nombre: String!, cedula: Int!, labor: String!, salario: Int!, telefono: Int!, infoBanco: Int!,fk_areasco: Int!, active: Boolean!): Empleado!
    updateFactura(instr: String!, monto: Int!, iva: Int!, apt: Int!,FK_CI_Gas: Int!, active: Boolean!): Factura!
    updateFamiliar(nombre: String!, edad: Int!, telefono: Int!, correo: String!, parent: String!,FK_ID_Pro: Int!, active: Boolean!): Familiar!
    updateGasto(mantCal: Int!, luz: Int!, agua: Int!, mantAse: Int!, projar: Int!, prolimp: Int!, bombil: Int!, gasnoco: Int!, bonos: Int!, sueltra: Int!, retenc: Int!, FK_Fac: Int!, active: Boolean!): Gasto!
    updateApartamento(NumApt: Int!, NumLocal: Int!,NumQuinta: Int!, FK_ProLoc: Int!, active: Boolean!): Apartamento!
    
}
`
module.exports = typeDefs
