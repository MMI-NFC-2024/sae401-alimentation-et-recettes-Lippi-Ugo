/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1663733077")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.auth.role = \"utilisateur\" && @request.body.suivi_id != \"\"",
    "deleteRule": "@request.auth.id != \"\" && @request.auth.role = \"utilisateur\" && suivi_id.utilisateur_id = @request.auth.id",
    "listRule": "@request.auth.id != \"\" && @request.auth.role = \"utilisateur\" && suivi_id.utilisateur_id = @request.auth.id",
    "updateRule": "@request.auth.id != \"\" && @request.auth.role = \"utilisateur\" && suivi_id.utilisateur_id = @request.auth.id && @request.body.suivi_id != \"\"",
    "viewRule": "@request.auth.id != \"\" && @request.auth.role = \"utilisateur\" && suivi_id.utilisateur_id = @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1663733077")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\" && @request.body.suivi_id != \"\"",
    "deleteRule": "@request.auth.id != \"\" && suivi_id.utilisateur_id = @request.auth.id",
    "listRule": "@request.auth.id != \"\" && suivi_id.utilisateur_id = @request.auth.id",
    "updateRule": "@request.auth.id != \"\" && suivi_id.utilisateur_id = @request.auth.id && @request.body.suivi_id != \"\"",
    "viewRule": "@request.auth.id != \"\" && suivi_id.utilisateur_id = @request.auth.id"
  }, collection)

  return app.save(collection)
})
