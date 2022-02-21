const {EventListener} = require('./events')

let ManufacturerEvent =new EventListener();
ManufacturerEvent.txnEventListener("manufacturer","Admin","autochannel",
    "KBA-Automobile","CarContract","createCar","Car031",
    "sedan",
    "sunny",
    "white",
    "20/02/2022",
    "nissan");