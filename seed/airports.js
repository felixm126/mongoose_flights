const db = require('../db')
const { Airport } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
	const airports = [
		{
			name: 'Logan International Airport',
			location: 'Boston, Massachusetts',
			code: 'BOS',
		},
		{
			name: 'Daniel K. Inouye International Airport',
			location: 'Honolulu, Hawaii',
			code: 'HNL',
		},
		{
			name: 'Los Angeles International Airport',
			location: 'Los Angeles, California',
			code: 'LAX',
		},
		{
			name: 'John F. Kennedy International Airport',
			location: 'New York, New York',
			code: 'JFK',
		},
		{
			name: "Chicago O'Hare International Airport",
			location: 'Chicago, Illinois',
			code: 'ORD',
		},
	]

	await Airport.insertMany(airports)
	console.log('Created airports!')
}

const run = async () => {
	await main()
	db.close()
}

run()
