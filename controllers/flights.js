// TODO: re-evaluate the use of async/await and try/catch for errors
let Flight = require('../models/flight');
let Ticket = require('../models/ticket');
let Defaults = require('../models/defaults');

function defaultDate() {
    const newFlight = new Flight();
    const dt = newFlight.departs;
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    return departsDate
}

async function index(req,res,next) {
    let flights = await Flight.find({})
    res.render('flights/index', { title: `All Flights`, data: flights })
}

async function create(req,res,next) {
    await Flight.create(req.body)
    res.redirect('/flights')
}

async function deleteFlight(req,res,next) {
    await Flight.findByIdAndDelete(req.params.id);
    res.redirect('/flights')
}

async function updateFlight(req,res,next) {
    Flight.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/flights')
}

async function showFlight(req,res,next) {
    let flightDetails = await Flight.findById(req.params.id).exec()
    let ticketDetails = await Ticket.find({flight: req.params.id}).exec()
    res.render('flights/show', { 
        title: `Flight Details`, 
        flights: flightDetails,
        tickets: ticketDetails,
        airportOptions: Defaults.airportOptions(),
        defaultDate: defaultDate()
    })
}

function newFlight(req,res,next) {
    res.render('flights/new', { 
        title: `New Flight`,
        airlineOptions: Defaults.airlineOptions(),
        airportOptions: Defaults.airportOptions(),
        departs: defaultDate()
     })
}

module.exports = {
    index,
    create,
    new: newFlight,
    delete: deleteFlight,
    update: updateFlight,
    show: showFlight
}