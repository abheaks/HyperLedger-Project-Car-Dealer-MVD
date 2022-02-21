const {clientApplication} = require('./client')

let ManufacturerClient = new clientApplication();

ManufacturerClient.generateAndSubmitTxn(
    "manufacturer",
    "Admin",
    "autochannel",
    "KBA-Automobile",
    "CarContract",
    "createCar",
    "CAR02",
    "Hatchback",
    "Nexon",
    "Blue",
    "21/07/2021",
    "1"
).then(message => {
    console.log(message);
})