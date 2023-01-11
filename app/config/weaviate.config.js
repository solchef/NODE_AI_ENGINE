const weaviate = require('weaviate-client')
const openaiConfig = require('./openai.config')

module.exports = {
    aiBoticWeaviateClient: weaviate.client({
        scheme: 'https',
        host: 'jchege.semi.network/',
        headers: { 'X-OpenAI-Api-Key': openaiConfig.BASIC_PACKAGE_API_KEY }
    })
}