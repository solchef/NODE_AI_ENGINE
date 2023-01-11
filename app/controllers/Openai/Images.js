const OpenAIParams = require('../../constants/AIBoticDefaultRequests')
const { aiBotik } = require('../../config/weaviate.config')

const Images = {
    createImage: async(req, res) => {
        const response = await aiBotik.createImage(
            Object.assign(OpenAIParams.CreateImageParams),
            JSON.stringify(req.body),
        )
        res.status(200).json(response)
    },
    editImage: async(req, res) => {
        const response = await aiBotik.createImageEdit(
            Object.assign(OpenAIParams.CreateImageParams),
            JSON.stringify(req.body),
        )
        res.status(200).json(response)
    },
    imageVariation: async(req, res) => {
        const response = await aiBotik.createImageVariation(
            Object.assign(OpenAIParams.CreateImageParams),
            JSON.stringify(req.body),
        )
        res.status(200).json(response)
    },
}

module.exports = { Images }