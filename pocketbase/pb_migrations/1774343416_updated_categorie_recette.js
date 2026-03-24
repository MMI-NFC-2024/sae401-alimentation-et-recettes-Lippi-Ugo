/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2348078371")

  // update collection data
  unmarshal({
    "createRule": "(@request.auth.role = \"admin\" || @request.auth.role = \"pro\" || @request.auth.role = \"professionnel\")",
    "deleteRule": "@request.auth.role = \"admin\"",
    "listRule": "",
    "updateRule": "(@request.auth.role = \"admin\" || @request.auth.role = \"pro\" || @request.auth.role = \"professionnel\")",
    "viewRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2348078371")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})
