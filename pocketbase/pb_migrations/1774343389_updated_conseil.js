/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2926344555")

  // update collection data
  unmarshal({
    "createRule": "(@request.auth.role = \"pro\" || @request.auth.role = \"professionnel\") && @request.body.auteur_id = @request.auth.id",
    "deleteRule": "(@request.auth.role = \"pro\" || @request.auth.role = \"professionnel\") && auteur_id = @request.auth.id",
    "listRule": "",
    "updateRule": "(@request.auth.role = \"pro\" || @request.auth.role = \"professionnel\") && auteur_id = @request.auth.id && @request.body.auteur_id = @request.auth.id",
    "viewRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2926344555")

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
