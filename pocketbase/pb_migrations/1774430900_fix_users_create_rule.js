/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
    const collection = app.findCollectionByNameOrId("pbc_1616027263")

    // update collection data
    collection.createRule = "@request.auth.role ?= \"\" || @request.auth.role = \"admin\""

    return app.save(collection)
}, (app) => {
    const collection = app.findCollectionByNameOrId("pbc_1616027263")

    // revert collection data
    collection.createRule = "@request.auth.role = \"admin\""

    return app.save(collection)
})
