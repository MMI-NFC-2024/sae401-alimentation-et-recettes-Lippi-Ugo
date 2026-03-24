/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3786205377")

  // update collection data
  unmarshal({
    "createRule": "(@request.auth.role = \"admin\") || ((@request.auth.role = \"pro\" || @request.auth.role = \"professionnel\") && @request.body.auteur_id = @request.auth.id)",
    "deleteRule": "@request.auth.role = \"admin\"",
    "listRule": "",
    "updateRule": "(@request.auth.role = \"admin\") || ((@request.auth.role = \"pro\" || @request.auth.role = \"professionnel\") && auteur_id = @request.auth.id && @request.body.auteur_id = @request.auth.id)",
    "viewRule": ""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3786205377")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.verified = true",
    "deleteRule": "@request.auth.id != \"\"",
    "listRule": "@request.auth.id != \"\"",
    "updateRule": "@request.auth.verified = true",
    "viewRule": "@request.auth.id != \"\""
  }, collection)

  return app.save(collection)
})
