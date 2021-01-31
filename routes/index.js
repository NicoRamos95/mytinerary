const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController')
const itineraryController = require('../controllers/itineraryController')


router.route('/cities')
.get(cityController.allCities)
.post(cityController.addCity)

router.route('/cities/:id')
.get(cityController.singleCity)

router.route('/itineraries')
.get(itineraryController.allItinerary)
.post(itineraryController.addItinerary)

router.route('/itineraries/:id')
.get(cityController.cityItinerary)


module.exports = router