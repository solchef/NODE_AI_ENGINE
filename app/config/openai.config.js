const { Configuration, OpenAIApi } = require('openai')

const configuration = new Configuration({
    organization: 'org-FPbYJDF0x3t6Dylm8Vk7t8Yp',
    apiKey: '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'
})

module.exports = {
    BASIC_PACKAGE_API_KEY: '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',
    BASIC_PACKAGE_ORGANIZATION: 'org-FPbYJDF0x3t6Dylm8Vk7t8Yp',
    aiBotik: new OpenAIApi(configuration),
}