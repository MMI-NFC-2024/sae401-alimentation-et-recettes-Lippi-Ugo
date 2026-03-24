/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3639090298")

  // update collection data
  unmarshal({
    "createRule": "(@request.auth.role = \"pro\" || @request.auth.role = \"professionnel\")",
    "deleteRule": "(@request.auth.role = \"pro\" || @request.auth.role = \"professionnel\") && auteur_id = @request.auth.id",
    "updateRule": "(@request.auth.role = \"pro\" || @request.auth.role = \"professionnel\") && auteur_id = @request.auth.id && @request.body.auteur_id = @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3639090298")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "updateRule": ""
  }, collection)

  return app.save(collection)
})
