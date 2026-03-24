/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2926344555")

  // update collection data
  unmarshal({
    "createRule": "(@request.auth.role = \"professionnel\" || @request.auth.role = \"pro\") && @request.body.auteur_id = @request.auth.id",
    "deleteRule": "(@request.auth.role = \"professionnel\" || @request.auth.role = \"pro\") && auteur_id = @request.auth.id",
    "updateRule": "(@request.auth.role = \"professionnel\" || @request.auth.role = \"pro\") && auteur_id = @request.auth.id && @request.body.auteur_id = @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2926344555")

  // update collection data
  unmarshal({
    "createRule": "(@request.auth.role = \"pro\" || @request.auth.role = \"professionnel\") && @request.body.auteur_id = @request.auth.id",
    "deleteRule": "(@request.auth.role = \"pro\" || @request.auth.role = \"professionnel\") && auteur_id = @request.auth.id",
    "updateRule": "(@request.auth.role = \"pro\" || @request.auth.role = \"professionnel\") && auteur_id = @request.auth.id && @request.body.auteur_id = @request.auth.id"
  }, collection)

  return app.save(collection)
})
