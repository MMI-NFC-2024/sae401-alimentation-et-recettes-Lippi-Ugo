/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_427064638")

  // update collection data
  unmarshal({
    "createRule": "(@request.auth.role = \"admin\" || @request.auth.role = \"pro\" || @request.auth.role = \"professionnel\")",
    "deleteRule": "(@request.auth.role = \"admin\" || @request.auth.role = \"pro\" || @request.auth.role = \"professionnel\")",
    "listRule": "@request.auth.id != \"\" && (utilisateur_id = @request.auth.id || @request.auth.role = \"admin\" || @request.auth.role = \"pro\" || @request.auth.role = \"professionnel\")",
    "updateRule": "(@request.auth.role = \"admin\" || @request.auth.role = \"pro\" || @request.auth.role = \"professionnel\")",
    "viewRule": "@request.auth.id != \"\" && (utilisateur_id = @request.auth.id || @request.auth.role = \"admin\" || @request.auth.role = \"pro\" || @request.auth.role = \"professionnel\")"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_427064638")

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
