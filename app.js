const request = require('request')
const geocode = require('./utils/geocode.js')


// const url = 'http://api.weatherstack.com/current?access_key=88cb06ba50103cb611375faaa1f97483&query=37.8267,-122.4233&units=s'

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(`${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature}. It feels like ${response.body.current.feelslike} degrees out.`)
//     }

// })




geocode('Boston', (error, data) => {
    console.log('Error: ', error)
    console.log('Data: ', data )
})