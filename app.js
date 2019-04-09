
class Vehicle {
    constructor(marca, modelo, precio) {
        this.marca = marca,
        this.modelo = modelo,
        this.precio = precio
    }
}

class Bike extends Vehicle {
    constructor(marca, modelo, precio, cilindrada) {
        super(marca, modelo, precio)
        this.cilindrada = cilindrada,
        this.vehicle = 'bike'
    }
}

class Car extends Vehicle {
    constructor(marca, modelo, precio, puertas) {
        super(marca, modelo, precio)
        this.puertas = puertas,
        this.vehicle = 'car'
    }
}


const APP = {
    //LISTA DE VEHICULOS
    vehiclesArray: [
        new Car('Peugeot', '206', 250000, 4),
        new Bike('Yamaha', 'YBR', 60000, 160),
        new Car('Fiat', '500L', 60000, 5),
        new Bike('Honda', 'Titan', 100000, 125),
        new Car('Honda', 'Civic', 150000, 5, 200),
        new Bike('Honda', 'BIZ', 30000, 125),
        new Car('Nissan', 'GT-R', 400000, 4)
    ],

    // DEVUELVE EL NUMERO CON COMA
    toComma: function (number) {
        let value = new Intl.NumberFormat().format(number)
        return value;
    },
    // RETORNA LISTA DE VEHICULOS
    displayCars: function (order) {
        let result = this.vehiclesArray.sort((a, b) => {
            if(order==='max'){
                if (a.precio < b.precio) {
                    return 1
                }
            }else{
                if (a.precio > b.precio) {
                    return 1
                }
            }
        })
        // Imprimo la cantidad de autos del array
        console.log(`Vehiculos - (${this.vehiclesArray.length}) \n`)

        // Imprimo cada auto con su modelo, puertas, precio etc...
        result.map(vehicle => {
            console.log(`     - ${vehicle.marca} - ${vehicle.modelo} // precio: $${this.toComma(vehicle.precio)} ${vehicle.vehicle === 'car' ? 'Puertas: ' + vehicle.puertas : 'Cilindrada: ' + vehicle.cilindrada + 'c'}`)
        })
    },
    // RETORNAR VEHICULO MAS CARO
    getMostExpensiveCar: function () {
        let result = this.vehiclesArray.sort((a, b) => {
            if (a.precio < b.precio) {
                return 1
            }
        })
        
        return console.log(`Vehículo más caro:` + ` ${result[0].marca} - ${result[0].modelo} // precio: $${this.toComma(result[0].precio)} `);
    },
    // RETORNAR VEHICULO MAS BARATO
    getCheapestCar: function () {
        let result = this.vehiclesArray.sort((a, b) => {
            if (a.precio > b.precio) {
                return 1
            }
        })
        return console.log(`Vehículo más barato:` + ` ${result[0].marca}  ${result[0].modelo} // precio: $${this.toComma(result[0].precio)} `);
    },
    // RETORNA MODELO DE AUTO POR LETRA
    searchCar: function (letter) {
        console.log(`Modelo de Vehiculo buscado que tenga la letra '${letter}':`)
        for (var i in this.vehiclesArray) {
            let vehicle = this.vehiclesArray[i].modelo.toLowerCase()
            if (vehicle.includes(letter)) {
                console.log(this.vehiclesArray[i].marca, this.vehiclesArray[i].modelo)
            }
        }
    }
}





// Iniciando....
APP.displayCars('max')
console.log('\n')
APP.getMostExpensiveCar()
console.log('\n')
APP.getCheapestCar()
console.log('\n')
APP.searchCar('r');