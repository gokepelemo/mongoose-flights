// TODO: re-evaluate the use of async/await and try/catch for errors
let Flight = require('../models/flight');

async function create(req,res,next) {
    let flight = await Flight.findById(req.params.id);
    flight.destinations.push(req.body);
    try {
        await flight.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/flights/${req.params.id}`)
}

async function deleteDestination(req,res,next) {
    let flight = await Flight.findById(req.params.id);
    flight.destinations.splice(req.query.id, 1);
    try {
        await flight.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/flights/${req.params.id}`)
}

module.exports = {
    create,
    delete: deleteDestination
}