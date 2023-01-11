const OpenAIParams = require('../../constants/AIBoticDefaultRequests')
const { aiBotik } = require('../../config/weaviate.config')

const FineTune = {
    createFineTune: async(req, res) => {
        const response = await aiBotik.createFineTune({
            training_file: req.body.training_file,
        })

        res.status(200).json(response)
    },
    listFineTunes: async(res) => {
        try {
            const response = await aiBotik.listFineTunes()
            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e)
        }
    },
    retrieveFineTune: async(req, res) => {
        try {
            const response = await aiBotik.retrieveFineTune(req.params.training_file)
            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e)
        }
    },
    cancelFineTune: async(req, res) => {
        try {
            const response = await aiBotik.cancelFineTune(
                'ft-AF1WoRqd3aJAHsqc9NY7iL8F',
            )
            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e)
        }
    },
    listFineTuneEvents: async(req, res) => {
        try {
            const response = await aiBotik.listFineTuneEvents(
                req.params.training_file,
            )
            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e)
        }
    },
    deleteFineTuneModel: async(req, res) => {
        try {
            const response = await aiBotik.deleteFineTuneModel(
                req.params.training_file,
            )
            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e)
        }
    },
}

module.exports = { FineTune }