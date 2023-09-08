let Ticket = require('../models/ticket');
let Flight = require('../models/flight');

async function create(req,res,next) {
    try {
        let newTicket = await Ticket.create({
            seat: req.body.seat,
            price: req.body.price,
            flight: req.params.id
        })
        res.redirect(`/flights/${req.params.id}`)
    }
    catch (err) {
        console.log(err)
        res.render('tickets/new', {title: `New Ticket`, errorMsg: err})
    }
}

async function deleteTicket(req,res,next) {
    await Ticket.findByIdAndDelete(req.params.id)
    res.redirect(`/flights/${req.query.flight}`)
}

async function newTicket(req,res,next) {
    let flightDetails = await Flight.findById(req.params.id);
    res.render('tickets/new', {title: `New Ticket`, flight: req.params.id, flightDetails, errorMsg: ''})
}

module.exports = {
    create,
    delete: deleteTicket,
    new: newTicket
}