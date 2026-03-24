/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_625519172")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.body.suivi_id != \"\"",
    "updateRule": "@request.auth.id != \"\" && suivi_id.utilisateur_id = @request.auth.id && @request.body.suivi_id != \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_625519172")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.body.suivi_id.utilisateur_id = @request.auth.id",
    "updateRule": "@request.auth.id != \"\" && suivi_id.utilisateur_id = @request.auth.id && @request.body.suivi_id.utilisateur_id = @request.auth.id"
  }, collection)

  return app.save(collection)
})
