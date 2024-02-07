// Write your queries here
const db = require('./db')
const { Flight, Airport } = require('./models')

const findFlight = async () => {
	try {
		
		}
	} catch (error) {
		console.log('Error in pulling information', error)
	}

// const createFlight = async () => {
// 	const airport = await Airport.findOne()

// 	let flight = await Flight.create({})
// 	console.log(flight)
// }

// const updateFlight = async () => {
// 	const updated = await Flight.updateOne({})
// 	console.log(updated)
// }

// const deleteFlight = async () => {
// 	let deleted = await Flight.deleteOne({})
// 	console.log(deleted)
// }

async function main() {
	try {
		await findFlight()
		// await createFlight()
		// await updateFlight()
		// await deleteFlight()
	} catch (error) {
		console.log(error)
	} finally {
		await db.close()
	}
}

main()
