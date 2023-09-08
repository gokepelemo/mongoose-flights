const Defaults = require('./defaults');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: Defaults.airportOptions()
    },
    arrival : {
        type: Date
    }
}, {
    timestamps: true
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: Defaults.airlineOptions()
    },
    airport: {
        type: String,
        enum: Defaults.airportOptions(),
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: Date.now()+31536000000
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
})

module.exports = mongoose.model('Flight', flightSchema)