const result = require('dotenv').config()

if (result.error) {
    throw result.error
}

jest.setTimeout(30000)
