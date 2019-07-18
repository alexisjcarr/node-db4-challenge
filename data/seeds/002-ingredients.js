exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "chicken", measurement: 1, recipe_id: 1 },
        { ingredient_name: "butter", measurement: 1, recipe_id: 1 },
        { ingredient_name: "bread crumbs", measurement: 0, recipe_id: 1 },
        { ingredient_name: "flour", measurement: 0.75, recipe_id: 2 },
        { ingredient_name: "butter", measurement: 1, recipe_id: 2 },
        { ingredient_name: "egg", measurement: 2, recipe_id: 2 },
        { ingredient_name: "sugar", measurement: 2, recipe_id: 2 },
        { ingredient_name: "chicken", measurement: 1, recipe_id: 3 },
        { ingredient_name: "rice", measurement: 10, recipe_id: 3 },
        { ingredient_name: "tortillas", measurement: 20, recipe_id: 3 },
        { ingredient_name: "shrimp", measurement: 2, recipe_id: 4 },
        { ingredient_name: "rice", measurement: 10, recipe_id: 4 },
        { ingredient_name: "potatoes", measurement: 6, recipe_id: 5 },
        { ingredient_name: "evaporated milk", measurement: 0.75, recipe_id: 5 },
        { ingredient_name: "macaroni", measurement: 75, recipe_id: 6 },
        { ingredient_name: "cheese", measurement: 0.75, recipe_id: 6 }
      ]);
    });
};
