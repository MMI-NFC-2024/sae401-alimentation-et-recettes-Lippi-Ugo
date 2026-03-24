/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3786205377")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.role = \"professionnel\" || @request.auth.role = \"pro\" || @request.auth.role = \"admin\"",
    "updateRule": "@request.auth.role = \"professionnel\" || @request.auth.role = \"pro\" || @request.auth.role = \"admin\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3786205377")

  // update collection data
  unmarshal({
    "createRule": "(@request.auth.role = \"professionnel\" || @request.auth.role = \"pro\" || @request.auth.role = \"admin\")",
    "updateRule": "(@request.auth.role = \"professionnel\" || @request.auth.role = \"pro\" || @request.auth.role = \"admin\")"
  }, collection)

  return app.save(collection)
})
