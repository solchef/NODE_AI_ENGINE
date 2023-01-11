const openaiConfig = require('../config/openai.config')
const { Search } = require('../controllers/Encoder')
const { Models } = require('../controllers/Openai')
const { authJwt } = require('../middlewares')

const aiBotikRoutes = (app) => {
    app.use(function(req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept',
            'Authorization:Bearer ,' + openaiConfig.BASIC_PACKAGE_API_KEY,
        )
        next()
    })

    //Models
    app.get('/api/aibotik/models', [authJwt.verifyToken], Models.list)
    app.get('/api/aibotik/models/:model', [authJwt.verifyToken], Models.retrieve)

    //completions
    app.post('/api/aibotik/completion', [authJwt.verifyToken], Models.completion)

    //Edits
    app.post('/api/aibotik/edit', [authJwt.verifyToken], Models.completion)



    //Search
    // app.get('/api/aibotik/search', [authJwt.verifyToken], Search)

    //
}

module.exports = aiBotikRoutes