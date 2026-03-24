/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3639090298")

  // update field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "select2860927612",
    "maxSelect": 0,
    "name": "regime",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Sans gluten",
      "Végétarien",
      "Vegan",
      "Keto",
      "Paléo",
      "Méditerranéen"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3639090298")

  // update field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "select2860927612",
    "maxSelect": 0,
    "name": "regime",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Sans gluten",
      "Végétarien",
      "Vegan",
      "Keto",
      "Low carb",
      "Paléo",
      "Méditerranéen"
    ]
  }))

  return app.save(collection)
})
