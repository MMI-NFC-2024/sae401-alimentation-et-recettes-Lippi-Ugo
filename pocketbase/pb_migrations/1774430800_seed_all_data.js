/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  // ========== SEED USERS ==========
  const users = app.findCollectionByNameOrId("users");
  
  const adminData = {
    email: "admin@nutrition.com",
    password: "AdminPassword123!",
    passwordConfirm: "AdminPassword123!",
    nom: "Admin",
    prenom: "System",
    age: 30,
    sexe: "Autre",
    role: "admin"
  };
  const adminUser = new Record(users, adminData);
  app.save(adminUser);

  const proData = {
    email: "pro@nutrition.com",
    password: "ProPassword123!",
    passwordConfirm: "ProPassword123!",
    nom: "Pro",
    prenom: "User",
    age: 35,
    sexe: "Autre",
    role: "pro"
  };
  const proUser = new Record(users, proData);
  app.save(proUser);

  const userData = {
    email: "user@nutrition.com",
    password: "UserPassword123!",
    passwordConfirm: "UserPassword123!",
    nom: "User",
    prenom: "Regular",
    age: 25,
    sexe: "Autre",
    role: "utilisateur"
  };
  const regularUser = new Record(users, userData);
  app.save(regularUser);

  // ========== SEED ALIMENTS ==========
  const aliment = app.findCollectionByNameOrId("aliment");
  
  const aliments = [
    { nom: "Riz blanc", calories_100g: 130, proteines: 2.7, glucides: 28, lipides: 0.3, fibres: 0.4, auteur_id: adminUser.id },
    { nom: "Brocoli", calories_100g: 34, proteines: 2.8, glucides: 7, lipides: 0.4, fibres: 2.4, auteur_id: adminUser.id },
    { nom: "Carotte", calories_100g: 41, proteines: 0.9, glucides: 10, lipides: 0.2, fibres: 2.8, auteur_id: adminUser.id },
    { nom: "Tomate", calories_100g: 18, proteines: 0.9, glucides: 3.9, lipides: 0.2, fibres: 1.2, auteur_id: adminUser.id },
    { nom: "Épinards", calories_100g: 23, proteines: 2.9, glucides: 3.6, lipides: 0.4, fibres: 2.2, auteur_id: adminUser.id },
    { nom: "Concombre", calories_100g: 16, proteines: 0.7, glucides: 3.6, lipides: 0.1, fibres: 0.5, auteur_id: adminUser.id },
    { nom: "Poulet fermier", calories_100g: 165, proteines: 31, glucides: 0, lipides: 3.6, fibres: 0, auteur_id: adminUser.id },
    { nom: "Œufs", calories_100g: 155, proteines: 13, glucides: 1.1, lipides: 11, fibres: 0, auteur_id: adminUser.id },
    { nom: "Saumon", calories_100g: 206, proteines: 25, glucides: 0, lipides: 11, fibres: 0, auteur_id: adminUser.id },
    { nom: "Lentilles", calories_100g: 116, proteines: 9, glucides: 20, lipides: 0.4, fibres: 8, auteur_id: adminUser.id },
    { nom: "Avocat", calories_100g: 160, proteines: 2, glucides: 9, lipides: 15, fibres: 7, auteur_id: adminUser.id },
    { nom: "Feta", calories_100g: 265, proteines: 14, glucides: 4, lipides: 21, fibres: 0, auteur_id: adminUser.id },
    { nom: "Quinoa", calories_100g: 120, proteines: 4.4, glucides: 21, lipides: 1.9, fibres: 2.8, auteur_id: adminUser.id },
    { nom: "Oignon", calories_100g: 40, proteines: 1.1, glucides: 9, lipides: 0.1, fibres: 1.7, auteur_id: adminUser.id },
    { nom: "Citron", calories_100g: 29, proteines: 1.1, glucides: 9, lipides: 0.3, fibres: 2.8, auteur_id: adminUser.id },
    { nom: "Beurre", calories_100g: 717, proteines: 0.9, glucides: 0.1, lipides: 81, fibres: 0, auteur_id: adminUser.id },
    { nom: "Ail", calories_100g: 149, proteines: 6.3, glucides: 33, lipides: 0.5, fibres: 2.1, auteur_id: adminUser.id }
  ];

  aliments.forEach(alimentData => {
    const record = new Record(aliment, alimentData);
    app.save(record);
  });

  // ========== SEED REGIMES ==========
  const regime = app.findCollectionByNameOrId("regime");
  
  const regimes = [
    { nom: "Régime Méditerranéen", description: "<p>Basé sur les aliments de la région méditerranéenne. Riche en fruits, légumes, huile d'olive et poisson.</p>", benefices: ["Santé cardiaque", "Longévité", "Énergie"] },
    { nom: "Régime Keto", description: "<p>Riche en lipides et faible en glucides pour entrer en cétose.</p>", benefices: ["Perte de poids", "Stabilité glycémique", "Énergie"] },
    { nom: "Régime Vegan", description: "<p>Aucun produit animal. Basé sur les plantes, fruits, légumes et légumineuses.</p>", benefices: ["Bien-être animal", "Santé cardio", "Lignines"] },
    { nom: "Régime Paléo", description: "<p>Revenir aux aliments primaires : viande, poisson, fruits, légumes, noix.</p>", benefices: ["Énergie", "Santé digestive", "Muscles"] },
    { nom: "Régime Hyperprotéiné", description: "<p>Riche en protéines pour la construction musculaire et la récupération.</p>", benefices: ["Muscles", "Satiété", "Récupération"] },
    { nom: "Régime Sans Gluten", description: "<p>Élimine le gluten pour les personnes intolerantes ou sensibles.</p>", benefices: ["Digestion", "Énergie", "Bien-être"] }
  ];

  regimes.forEach(regimeData => {
    const record = new Record(regime, regimeData);
    app.save(record);
  });

  // ========== SEED PRODUITS SPONSORISES ==========
  const produit = app.findCollectionByNameOrId("produit_sponsorise");
  
  const produits = [
    { nom: "Beurre de Cacahuète Bio - 1kg", description: "Pur beurre de cacahuète bio sans additifs. Idéal pour le Keto, Vegan et les sportifs. Source de protéines et de bons lipides.", prix: "14,90€", lien_affiliation: "https://www.nu3.fr/products/nu3-beurre-de-cacahuete-bio" },
    { nom: "Farine de Patate Douce Bio - 1kg", description: "Farine sans gluten à IG bas, parfaite pour remplacer la farine classique dans vos recettes saines et sportives.", prix: "16,50€", lien_affiliation: "https://www.nutripure.fr/fr/musculation/44-farine-de-patate-douce-bio.html" },
    { nom: "Psyllium Blond Bio - Téguments", description: "Riche en fibres pour le confort digestif. Indispensable pour lier les pâtes à pain Keto et sans gluten.", prix: "9,90€", lien_affiliation: "https://lafourche.fr/products/la-fourche-psyllium-blond-bio-200g" },
    { nom: "Isolat de Pois Nature - 1kg", description: "Protéine végétale premium, sans lactose et hautement digestible. Parfaite pour la récupération musculaire des vegans.", prix: "26,90€", lien_affiliation: "https://fr.myprotein.com/p/nutrition-sportive/isolat-de-proteine-de-pois/10530113/" },
    { nom: "Érythritol - Alternative au Sucre", description: "Édulcorant naturel zéro calorie, parfait pour la pâtisserie Keto et les diabétiques. Goût neutre sans arrière-goût.", prix: "11,90€", lien_affiliation: "https://www.nu3.fr/products/nu3-erythritol" },
    { nom: "Huile MCT Premium C8/C10 - 500ml", description: "Huile MCT pure pour booster l'énergie mentale et physique en régime Keto. Idéale dans le café ou les salades.", prix: "24,90€", lien_affiliation: "https://www.go-keto.com/fr/produit/go-keto-mct-oil-premium/" },
    { nom: "Graines de Chia Bio - Superaliment", description: "Source exceptionnelle d'Oméga-3 et de fibres. Parfaites pour réaliser des puddings nutritifs et sains.", prix: "7,50€", lien_affiliation: "https://www.kazidomi.com/fr/products/kazidomi-graines-de-chia-bio-500g" },
    { nom: "Pâte à Tartiner Protéinée - Sans Sucre", description: "Gourmandise saine au goût noisette-cacao. Sans sucre ajouté et riche en protéines, compatible IG Bas.", prix: "5,90€", lien_affiliation: "https://www.foodspring.fr/protein-cream" },
    { nom: "Magnésium Bisglycinate Premium", description: "Forme de magnésium hautement assimilable pour réduire la fatigue, le stress et améliorer le sommeil. Souvent recommandé.", prix: "19,90€", lien_affiliation: "https://www.nutriting.com/nu-shop/complement-alimentaire-magnesium" },
    { nom: "Farine de Manioc Bio - Sans Gluten", description: "Alternative parfaite à la farine de blé pour la cuisine Paleo et sans gluten. Donne de la légèreté aux gâteaux.", prix: "6,50€", lien_affiliation: "https://lafourche.fr/products/la-fourche-farine-de-manioc-bio-500g" }
  ];

  produits.forEach(produitData => {
    const record = new Record(produit, produitData);
    app.save(record);
  });

}, (app) => {
  // rollback
});
