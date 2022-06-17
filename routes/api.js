const express = require('express')
var router = express.Router();
//Añadimos la capa business
import business from "../business/business"

router.use('/populate', business.populate);

//Llamada a la funcion populate de la capa business
router.use('/joke', business.getJoke);

// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

module.exports = router
