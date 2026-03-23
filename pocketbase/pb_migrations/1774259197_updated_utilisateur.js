/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1616027263")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_tokenKey_pbc_1616027263` ON `users` (`tokenKey`)",
      "CREATE UNIQUE INDEX `idx_email_pbc_1616027263` ON `users` (`email`) WHERE `email` != ''"
    ],
    "name": "users"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1616027263")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_tokenKey_pbc_1616027263` ON `utilisateur` (`tokenKey`)",
      "CREATE UNIQUE INDEX `idx_email_pbc_1616027263` ON `utilisateur` (`email`) WHERE `email` != ''"
    ],
    "name": "utilisateur"
  }, collection)

  return app.save(collection)
})
