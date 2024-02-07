const db = require('../db')
const { Airport, Flight } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
	const BOS_Airport = await Airport.find({ code: 'BOS' })
	const HNL_Airport = await Airport.find({ code: 'HNL' })
	const LAX_Airport = await Airport.find({ code: 'LAX' })
	const JFK_Airport = await Airport.find({ code: 'JFK' })
	const ORD_Airport = await Airport.find({ code: 'ORD' })

	const flights = [
		{
			airline: 'American Airlines',
			flightNumber: 199,
			price: 600,
			numberOfSeats: 150,
			departingAirport: BOS_Airport[0]._id,
			arrivalAirport: JFK_Airport[0]._id,
			departureDateTime: new Date('2024-02-10T08:00:00Z'),
		},
		{
			airline: 'United Airlines',
			flightNumber: 221,
			price: 800,
			numberOfSeats: 145,
			departingAirport: LAX_Airport[0]._id,
			arrivalAirport: HNL_Airport[0]._id,
			departureDateTime: new Date('2024-02-15T11:30:00Z'),
		},
		{
			airline: 'Delta Airlines',
			flightNumber: 330,
			price: 450,
			numberOfSeats: 150,
			departingAirport: ORD_Airport[0]._id,
			arrivalAirport: LAX_Airport[0]._id,
			departureDateTime: new Date('2024-03-22T09:45:00Z'),
		},
		{
			airline: 'Spirit Airlines',
			flightNumber: 2200,
			price: 220,
			numberOfSeats: 180,
			departingAirport: JFK_Airport[0]._id,
			arrivalAirport: LAX_Airport[0]._id,
			departureDateTime: new Date('2024-04-28T13:20:00Z'),
		},
		{
			airline: 'JetBlue Airlines',
			flightNumber: 921,
			price: 450,
			numberOfSeats: 140,
			departingAirport: LAX_Airport[0]._id,
			arrivalAirport: JFK_Airport[0]._id,
			departureDateTime: new Date('2024-05-17T18:00:00Z'),
		},
		{
			airline: 'United Airlines',
			flightNumber: 221,
			price: 730,
			numberOfSeats: 150,
			departingAirport: ORD_Airport[0]._id,
			arrivalAirport: HNL_Airport[0]._id,
			departureDateTime: new Date('2024-07-03T12:30:00Z'),
		},
		{
			airline: 'Delta Airlines',
			flightNumber: 192,
			price: 540,
			numberOfSeats: 150,
			departingAirport: HNL_Airport[0]._id,
			arrivalAirport: ORD_Airport[0]._id,
			departureDateTime: new Date('2024-08-19T16:15:00Z'),
		},
		{
			airline: 'JetBlue Airlines',
			flightNumber: 822,
			price: 780,
			numberOfSeats: 145,
			departingAirport: BOS_Airport[0]._id,
			arrivalAirport: ORD_Airport[0]._id,
			departureDateTime: new Date('2024-09-30T10:45:00Z'),
		},
	]

	await Flight.insertMany(Flights)
	console.log('Created flights with airports!')
}
const run = async () => {
	await main()
	db.close()
}

run()
