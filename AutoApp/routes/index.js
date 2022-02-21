var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Manufacturer Dashboard' });
});

/* GET Manufacturer page. */
router.get('/manufacturer', function(req, res, next) {
  res.render('manufacturer', { title: 'Manufacturer Dashboard' });
});

/* Manuwrite */ 
router.post('/manuwrite', function(req, res){
  const vin = req.body.VinNumb;
  const make = req.body.CarMake;
  const model = req.body.CarModel;
  const color = req.body.CarColor;
  const DOM = req.body.DOM;
  const flag = req.body.CarFlag;

  let ManufacturerClient = new clientApplication();
  ManufacturerClient.generateAndSubmitTxn(
    "manufacturer",
    "Admin",
    "autochannel", 
    "KBA-Automobile",
    "CarContract",
    "createCar",
    vin,make,model,color,DOM,flag
  ).then(message => {
    console.log("Message is $$$$",message)
    res.status(200).send({message: "Added Car"})
  })
  .catch(error =>{
    console.log("Some error Occured $$$$###", error)
    res.status(500).send({error:`Failed to Add`,message:`${error}`})
  });
})

module.exports = router;
