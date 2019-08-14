const raw_compiled_services = require('./compiled_resources.json')
const { startsWith } = require('lodash')

const compiled_services =
    raw_compiled_services.nested.google.nested.ads.nested.googleads.nested.v2.nested.services.nested

// console.log(compiled_services)

Object.keys(compiled_services).forEach(key => {
    if (!key.includes('Service')) {
        return
    }

    if (key.includes('View')) {
        return
    }

    console.log('')
    console.log(key)

    Object.keys(compiled_services[key].methods).forEach(method => {
        if (startsWith(method, 'Get')) {
            return
        }
        if (startsWith(method, 'Mutate')) {
            return
        }
        console.log('---', method)
    })
})
