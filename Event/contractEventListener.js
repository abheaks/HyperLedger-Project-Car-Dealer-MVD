const {EventListener} = require('./events')

let ManufacturerEvent =new EventListener();
ManufacturerEvent.contactEventListener("manufacturer","Admin","autochannel",
    "KBA-Automobile","CarContract","adCarEvent");