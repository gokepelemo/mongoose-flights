const airlines = ['Southwest', 'United', 'Delta', 'American', 'Frontier']
const airports = ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'ATL', 'JFK', 'LON']

function airlineOptions() {
    return airlines
}

function airportOptions() {
    return airports
}

module.exports = {
    airlineOptions,
    airportOptions
}