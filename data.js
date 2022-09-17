module.exports = function () {
    var data = {
        mayoristas: [
            {
                id: 1,
                dni: "123",
                telefono: "321",
                nombre: "Luna",
                correo: "luna@gmail.com",
                RUC: "32121"
            },
            {
                id: 2,
                dni: "123",
                telefono: "321",
                nombre: "Milena",
                correo: "milena@gmail.com",
                RUC: "32121"
            },
            {
                id: 3,
                dni: "123",
                telefono: "321",
                nombre: "Yuli",
                correo: "yuli@gmail.com",
                RUC: "32121"
            }
        ],
        acuerdos: [
            {
                id: 1,
                descuento: 0.05,
                fechaInicio: new Date(2022, 8, 5),
                fechaFin: new Date(2022, 10, 5),
                agricultor:{
                    id:12
                },
                mayorista:{
                    id:13
                }
            },
            {
                id: 2,
                descuento: 0.05,
                fechaInicio: new Date(2022, 8, 5),
                fechaFin: new Date(2022, 10, 5),
                agricultor:{
                    id:12
                },
                mayorista:{
                    id:14
                }
            },
            {
                id: 3,
                descuento: 0.05,
                fechaInicio: new Date(2022, 8, 5),
                fechaFin: new Date(2022, 10, 5),
                agricultor:{
                    id:15
                },
                mayorista:{
                    id:16
                }
            }
        ],
        agricultores:[
            {
                id: 1,
                dni: "123",
                telefono: "321",
                nombre: "Jhon",
                correo: "jhon@gmail.com",
                direccion: "Av Las Lomas"
            }
        ]
    }
    return data
}