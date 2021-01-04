const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

if (process.argv[2]) {
  geocode(process.argv[2], (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error)
    } else {
      forecast(latitude, longitude, (error, { description, temperature, feelslike}) => {
        if (error) {
          return console.log(error)
        }
        console.log(location)
        console.log(description, temperature, feelslike)

      })
    }
})
} else {
  console.log("Please provide an address.")
}
