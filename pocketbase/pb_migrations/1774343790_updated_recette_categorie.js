/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1734844651")

  // update collection data
  unmarshal({
    "createRule": "(@request.auth.role = \"professionnel\" || @request.auth.role = \"pro\" || @request.auth.role = \"admin\")",
    "deleteRule": "(@request.auth.role = \"professionnel\" || @request.auth.role = \"pro\" || @request.auth.role = \"admin\")",
    "updateRule": "(@request.auth.role = \"professionnel\" || @request.auth.role = \"pro\" || @request.auth.role = \"admin\")"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1734844651")

  // update collection data
  unmarshal({
    "createRule": "(@request.auth.role = \"admin\" || @request.auth.role = \"pro\" || @request.auth.role = \"professionnel\")",
    "deleteRule": "(@request.auth.role = \"admin\" || @request.auth.role = \"pro\" || @request.auth.role = \"professionnel\")",
    "updateRule": "(@request.auth.role = \"admin\" || @request.auth.role = \"pro\" || @request.auth.role = \"professionnel\")"
  }, collection)

  return app.save(collection)
})
