/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_909016537")

  // update collection data
  unmarshal({
    "createRule": "(@request.auth.role = \"admin\" || @request.auth.role = \"pro\" || @request.auth.role = \"professionnel\")",
    "deleteRule": "@request.auth.role = \"admin\"",
    "updateRule": "(@request.auth.role = \"admin\" || @request.auth.role = \"pro\" || @request.auth.role = \"professionnel\")"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_909016537")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "updateRule": ""
  }, collection)

  return app.save(collection)
})
