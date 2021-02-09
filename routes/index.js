const express = require('express')
const router = express.Router()
const cityController = require('../controllers/cityController')
const itineraryController = require('../controllers/itineraryController')
const userController = require('../controllers/userController')
const validator = require('../controllers/validator')
const passport = require('passport')
require('../config/passport')


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

router.route('/user/register')
.post(validator.register, userController.register)

router.route('/user/login')
.post(userController.logIn)

router.route('/user/ls')
.post(passport.authenticate('jwt', {session: false}), userController.logLS)


module.exports = router