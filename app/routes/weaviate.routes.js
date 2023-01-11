const openaiConfig = require('../config/openai.config')
const { authJwt } = require('../middlewares')
const { WeaviateSchema } = require('../controllers/Weviate')

const weaviateRoutes = (app) => {
    app.use(function(req, res, next) {
        res.header(
            'Access-Control-Allow-Headers',
            'x-access-token, Origin, Content-Type, Accept',
            'Authorization:Bearer ,' + openaiConfig.BASIC_PACKAGE_API_KEY,
        )
        next()
    })

    app.get(
        '/api/aibotik/weaviate/addSchema', [authJwt.verifyToken],
        WeaviateSchema.initAddWeaviateSchema,
    )
    app.get(
        '/api/aibotik/weaviate/fetchSchema', [authJwt.verifyToken],
        WeaviateSchema.doFetchWeaviateSchema,
    )

    app.get(
        '/api/aibotik/weaviate/addNewProperty', [authJwt.verifyToken],
        WeaviateSchema.doAddNewProperty,
    )

    app.get(
        '/api/aibotik/weaviate/importNewData', [authJwt.verifyToken],
        WeaviateSchema.doImportNewData,
    )

    app.get(
        '/api/aibotik/weaviate/doEmbeddedSearch', [authJwt.verifyToken],
        WeaviateSchema.doEmbeddedSearch,
    )
}

module.exports = weaviateRoutes