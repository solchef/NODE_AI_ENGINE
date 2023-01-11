const { aiBoticWeaviateClient } = require('../../config/weaviate.config')

const initAddWeaviateSchema = async(req, res) => {
    await aiBoticWeaviateClient.schema
        .classCreator()
        .withClass({})
        .do()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((e) => {
            res.status(500).json(e)
        })
}

const doFetchWeaviateSchema = async(req, res) => {
    await aiBoticWeaviateClient.schema
        .getter()
        .do()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((e) => {
            res.status(500).json(e)
        })
}

const doAddNewProperty = async(req, res) => {
    await aiBoticWeaviateClient.schema
        .propertyCreator()
        .withClassName(className)
        .withProperty(prop)
        .do()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            console.error(err)
        })
}

const doImportNewData = async(req, res) => {
    // Get the data from the data.json file
    const data = { HELLO: 'HELLO' }

    // Prepare a batcher
    let batcher = aiBoticWeaviateClient.batch.objectsBatcher()
    let counter = 0

    data.publications.forEach((publication) => {
        // Construct an object with a class, id, properties and vector
        const obj = {
            class: 'Publication',
            id: publication.id,
            properties: {
                name: publication.name,
            },
            vector: publication.vector,
        }

        // add the object to the batch queue
        batcher = batcher.withObject(obj)

        // When the batch counter reaches 20, push the objects to Weaviate
        if (counter++ == 20) {
            // flush the batch queue
            batcher
                .do()
                .then((resp) => {
                    console.log(resp)
                })
                .catch((err) => {
                    console.error(err)
                })

            // restart the batch queue
            counter = 0
            batcher = aiBoticWeaviateClient.batch.objectsBatcher()
        }
    })

    // Flush the remaining objects
    batcher
        .do()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
}

const doEmbeddedSearch = async(req, res) => {
    try {
        let response = await aiBoticWeaviateClient.graphql
            .get()
            .withClassName('Publication')
            .withFields('name _additional{certainty distance}') // note that certainty is only supported if distance==cosine
            .withNearText({
                concepts: ['fashion'],
                distance: 0.6, // prior to v1.14 use certainty instead of distance
                moveAwayFrom: {
                    concepts: ['finance'],
                    force: 0.45,
                },
                moveTo: {
                    concepts: ['haute couture'],
                    force: 0.85,
                },
            })
        res.status(200).json(response)
    } catch (e) {
        console.log(e)
    }
}

const WeaviateSchema = {
    initAddWeaviateSchema,
    doFetchWeaviateSchema,
    doAddNewProperty,
    doImportNewData,
    doEmbeddedSearch,
}

module.exports = { WeaviateSchema }