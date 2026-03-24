/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3639090298")

  // add field
  collection.fields.addAt(16, new Field({
    "hidden": false,
    "id": "select2942972832",
    "maxSelect": 1,
    "name": "difficulte",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Facile",
      "Moyen",
      "Difficile"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3639090298")

  // remove field
  collection.fields.removeById("select2942972832")

  return app.save(collection)
})
