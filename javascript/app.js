window.onload = () => {
    APP.displayCarsByMaxPrice()
    APP.getMostCheapestCar()
    APP.getMostExpensiveCar()
    APP.searchCar('t');
}



function generateCar(marca, modelo, precio, puertas = 4, cilindrada = 120) {
    this.marca = marca,
        this.modelo = modelo,
        this.puertas = puertas,
        this.precio = precio,
        this.cilindrada = cilindrada
}

const APP = {
    
    carsArray: [
        new generateCar('Peugeot', '206', 250000, 4, 126),
        new generateCar('Honda', 'Titan', 60000, 5),
        new generateCar('Fiat', '500L', 60000, 5),
        new generateCar('Ford', 'Fiesta', 100000),
        new generateCar('Honda', 'Civic', 150000, 5),
        new generateCar('Nissan', 'GT-R', 300000, 2),
        new generateCar('Peugeot', '308', 220000, 4)
    ],


    
    displayCarsByMaxPrice: function () {
        let result = this.carsArray.sort((a, b) => {
            if (a.precio < b.precio) {
                return 1
            }
        })
        // Imprimo la cantidad de autos del array
        console.log(`Autos - (${this.carsArray.length}) `)

        // Imprimo cada auto con su modelo, puertas, precio etc...
        result.map(car => {
            console.log(`     - ${car.marca} - ${car.modelo} // puertas ${car.puertas} // precio $${car.precio} // ${car.cilindrada}c`)
        })
    },

    getMostExpensiveCar: function () {
        let result = this.carsArray.sort((a, b) => {
            if (a.precio < b.precio) {
                return 1
            }
        })
        // retorno el vehiculo mas caro
        return console.log(`Vehículo más caro:` + `%c ${result[0].marca} modelo: ${result[0].modelo}`, 'color:blue;');
    },

    getMostCheapestCar: function () {
        let result = this.carsArray.sort((a, b) => {
            if (a.precio > b.precio) {
                return 1
            }
        })
        // retorno el vehiculos mas barato
        return console.log(`Vehículo más barato:` + `%c ${result[0].marca} modelo: ${result[0].modelo}`, 'color:blue;');
    },
    searchCar: function (letter) {
        // buscar  modelo de auto que tenga la  letra pedida
        console.log(`Modelo de auto buscado que tenga la letra '${letter}':`)

        for (var i in this.carsArray) {
            for(var j in this.carsArray[i].modelo){
                
                if (this.carsArray[i].modelo[j].toLowerCase() == letter) {
                    console.log(`%c \  ${this.carsArray[i].marca} - Modelo ${this.carsArray[i].modelo}`, 'color:blue')
                }else if(!this.carsArray[i].modelo[j].toLowerCase() == letter) {
                    console.log('no hay')
                }

            }
        }
    }
}




