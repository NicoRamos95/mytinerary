const mongoose = require('mongoose')

const ItinerarySchema = new mongoose.Schema({
    title: {type: String, required: true},
    name: {type: String, required: true},
    pic: {type: String, required: true},
    like: {type: Number, default: 0},
    hours: {type: Number, required: true},
    price: {type: Number, required: true},
    hashtag: {type: String, required: true},
    activities: [
        {actImage: String, actTitle: String}
        ],
    comments: [
        {userPic: String, userName: String, content: String}
    ],
    cityId: { type: mongoose.Schema.ObjectId, ref: 'city'}
})

//cambiar antes de cargar base de datos
const Itinerary = mongoose.model('itinerary', ItinerarySchema)

module.exports = Itinerary