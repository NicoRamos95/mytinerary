const City = require('../models/City')

const cityController = {
    addCity: (req, res) => {
      const cityAdding = new City({
        cityName: req.body.cityName,
        cityPic: req.body.cityPic
      })
      cityAdding.save()
      .then(cityAdding => {
        return res.json({success: true, respuesta: cityAdding})
      })
      .catch(error => {
        return res.json({success: false, error: error})
      })
    },
    allCities: (req, res) => {
        City.find()
        .then(data => {
          return res.json({success: true, respuesta: data})
        })
        .catch(error => {
          return res.json({success: false, error: error})
        })
    },
    singleCity: (req, res) => {
        const {id} = req.params

        City.findById(id)
        .then(data => {
          return res.json({success: true, respuesta: data})
        })
        .catch(error => {
          return res.json({success: false, error: error})
        })
      }
}
module.exports = cityController