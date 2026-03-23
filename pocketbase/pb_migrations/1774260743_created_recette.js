/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1819170229",
        "max": 0,
        "min": 0,
        "name": "nom",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1843675174",
        "max": 0,
        "min": 0,
        "name": "description",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "file3309110367",
        "maxSelect": 0,
        "maxSize": 0,
        "mimeTypes": null,
        "name": "image",
        "presentable": false,
        "protected": false,
        "required": false,
        "system": false,
        "thumbs": null,
        "type": "file"
      },
      {
        "hidden": false,
        "id": "number313655829",
        "max": null,
        "min": null,
        "name": "temps_preparation",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "number4280825391",
        "max": null,
        "min": null,
        "name": "temps_cuisson",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "number4006664941",
        "max": null,
        "min": null,
        "name": "nb_parts",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "convertURLs": false,
        "hidden": false,
        "id": "editor2575139115",
        "maxSize": 0,
        "name": "instructions",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "editor"
      },
      {
        "hidden": false,
        "id": "number1208856098",
        "max": null,
        "min": null,
        "name": "calories_par_part",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1622896614",
        "max": 0,
        "min": 0,
        "name": "auteur_id",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": true,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "select1232983604",
        "maxSelect": 0,
        "name": "categorie",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "Petit-déjeuner",
          "Déjeuner",
          "Dîner",
          "Collation",
          "Dessert",
          "Sauce & Condiment"
        ]
      },
      {
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
      },
      {
        "hidden": false,
        "id": "select3807930449",
        "maxSelect": 0,
        "name": "objectif",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "Perte de poids",
          "Prise de muscle",
          "Maintien du poids",
          "Santé générale",
          "Détox",
          "Énergie",
          "Performance sportive"
        ]
      },
      {
        "hidden": false,
        "id": "json1264587087",
        "maxSize": 0,
        "name": "ingredients",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "json"
      },
      {
        "hidden": false,
        "id": "select3848597695",
        "maxSelect": 0,
        "name": "statut",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "select",
        "values": [
          "draft",
          "approuve",
          "rejete"
        ]
      },
      {
        "hidden": false,
        "id": "autodate_created",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate_updated",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_3639090298",
    "indexes": [],
    "listRule": null,
    "name": "recette",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3639090298");

  return app.delete(collection);
})
