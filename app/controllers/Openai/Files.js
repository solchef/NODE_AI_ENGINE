const OpenAIParams = require('../../constants/AIBoticDefaultRequests')
const { aiBotik } = require('../../config/openai.config')

const Files = {
    listFiles: async(res) => {
        try {
            const response = await aiBotik.listFiles()
            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e)
        }
    },

    uploadFile: async(req, res) => {
        const response = await aiBotik.createFile(
            Object.assign(OpenAIParams.CreateImageParams),
            JSON.stringify(req.body),
        )
        res.status(200).json(response)
    },

    deleteFile: async(res) => {
        try {
            const response = await aiBotik.deleteFile(req.params.file_id)
            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e)
        }
    },
    retrieveFile: async(res) => {
        try {
            const response = await aiBotik.retrieveFile(req.params.file_id)
            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e)
        }
    },
    downLoadFile: async(res) => {
        try {
            const response = await aiBotik.retrieveFile(req.params.file_id)
            res.status(200).json(response)
        } catch (e) {
            res.status(500).json(e)
        }
    },
}

module.exports = { Files }