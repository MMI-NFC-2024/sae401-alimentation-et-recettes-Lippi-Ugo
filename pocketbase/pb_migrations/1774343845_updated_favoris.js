/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_408992728")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.auth.role = \"utilisateur\" && @request.body.utilisateur_id = @request.auth.id",
    "deleteRule": "@request.auth.id != \"\" && @request.auth.role = \"utilisateur\" && utilisateur_id = @request.auth.id",
    "listRule": "@request.auth.id != \"\" && @request.auth.role = \"utilisateur\" && utilisateur_id = @request.auth.id",
    "updateRule": "@request.auth.id != \"\" && @request.auth.role = \"utilisateur\" && utilisateur_id = @request.auth.id && @request.body.utilisateur_id = @request.auth.id",
    "viewRule": "@request.auth.id != \"\" && @request.auth.role = \"utilisateur\" && utilisateur_id = @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_408992728")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.body.utilisateur_id = @request.auth.id",
    "deleteRule": "@request.auth.id != \"\" && utilisateur_id = @request.auth.id",
    "listRule": "@request.auth.id != \"\" && utilisateur_id = @request.auth.id",
    "updateRule": "@request.auth.id != \"\" && utilisateur_id = @request.auth.id && @request.body.utilisateur_id = @request.auth.id",
    "viewRule": "@request.auth.id != \"\" && utilisateur_id = @request.auth.id"
  }, collection)

  return app.save(collection)
})
