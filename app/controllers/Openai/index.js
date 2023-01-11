const { aiBotik, aiBotikAdvanced } = require('../../config/weaviate.config')
const { Models } = require('./Models')
const { Images } = require('./Images')
const { Files } = require('./Files')
const { FineTunes } = require('./FineTune')


module.exports = {
    aiBotik,
    aiBotikAdvanced,
    Models,
    Images,
    Files,
    FineTunes
}