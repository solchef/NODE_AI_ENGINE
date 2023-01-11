const { aiBotik } = require('../../config/weaviate.config')

const Models = {
    list: async(res) => {
        try {
            const response = await aiBotik.listModels()
            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e)
        }
    },

    retrieve: async(req, res) => {
        try {
            const response = await aiBotik.retrieveModel(req.query.model)
            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e)
        }
    },

    completion: async(req, res) => {
        try {
            const response = await aiBotik.createCompletion(
                Object.assign(OpenAIParams.CompletionParams, JSON.stringify(req.body)),
            )
            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e)
        }
    },
    edit: async(req, res) => {
        try {
            const response = await aiBotik.createEdit(
                Object.assign(OpenAIParams.EditParams, JSON.stringify(req.body)),
            )

            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e)
        }
    },
    embeddings: async(req, res) => {
        try {
            const response = await aiBotik.createEmbedding(
                Object.assign(
                    OpenAIParams.CreateEmbeddingsParams,
                    JSON.stringify(req.body),
                ),
            )

            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e)
        }
    },

    createModeration: async(req, res) => {
        try {
            const response = await aiBotik.createModeration({
                input: req.body.input,
            })

            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e)
        }
    },
}

module.exports = { Models }