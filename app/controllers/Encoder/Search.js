const { aiBotik } = require('../../config/weaviate.config')
const { encode, decode } = require('.')

const Search = {
    checkNumberOfTokens: async(req, res) => {
        try {
            const response = encode(req.body.content)
            res.status(200).json({ characters: response, count: 0 })
        } catch (e) {
            res.status(500).json(e)
        }
    },
    checkEstimate: async(res) => {
        try {
            const response = encode(req.body.content)
            res.status(200).json({ characters: response, count: 0 })
        } catch (e) {
            res.status(500).json(e)
        }
    },

    decodeTokens: async(req, res) => {
        try {
            const response = decode(req.body.encoded)
            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e)
        }
    },
}

module.exports = { Search }