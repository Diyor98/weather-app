const request = require('request')

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


const geocode = "https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoiZGl5b3I5OCIsImEiOiJja2poNHdtb245NWVxMnlsYnM5YmIxa3RyIn0.GTtVHEBp4vdyHpPxLK0wdw&limit=1"

request({ url: geocode, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connet to mapbox service')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location')
    } else {
        const longitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]
        console.log("Latitude " + latitude + ". Longitude " + longitude)
    }

})