const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=88cb06ba50103cb611375faaa1f97483&query='+latitude+','+longitude+'&units=s'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if ( body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, {
                description: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                feelslike: body.current.feelslike
            })
        }
    })
}


module.exports = forecast