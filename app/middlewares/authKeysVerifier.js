const openaiConfig = require('../config/openai.config')

const checkOpenAIAPI = (req, res, next) => {
    if (openaiConfig.BASIC_PACKAGE_API_KEY) {
        res.status(500).json({
            error: {
                message: 'OpenAI API key not configured, please follow instructions in README.md',
            },
        })
        return
    }

    next()
}

const checkTensorFlowAPI = (req, res, next) => {
    if (openaiConfig.BASIC_PACKAGE_API_KEY) {
        res.status(500).json({
            error: {
                message: 'OpenAI API key not configured, please follow instructions in README.md',
            },
        })
        return
    }

    next()
}

//check parent connction api
const checkAiBotiqAPI = (req, res, next) => {
    if (openaiConfig.BASIC_PACKAGE_API_KEY) {
        res.status(500).json({
            error: {
                message: 'OpenAI API key not configured, please follow instructions in README.md',
            },
        })
        return
    }

    next()
}

module.exports = { checkOpenAIAPI, checkAiBotiqAPI, checkTensorFlowAPI }