export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/recipes") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            {
              recipeName: "Chicken Curry",
              ingredients: [
                "500g chicken breast",
                "1 onion",
                "2 cloves of garlic",
                "1 tablespoon curry powder",
                "1 teaspoon turmeric",
                "400ml coconut milk",
                "1 tablespoon vegetable oil",
                "Salt to taste",
              ],
              cookingInstructions:
                "1. Heat oil in a pan and sauté onion and garlic.\n2. Add chicken and cook until browned.\n3. Stir in curry powder and turmeric.\n4. Pour in coconut milk and simmer for 15 minutes.\n5. Season with salt to taste.\n6. Serve with rice or naan bread.",
              cuisineType: "Indian",
              image:
                "https://www.pngkit.com/png/detail/794-7942995_shutterstock-chicken-curry.png",
            },
            {
              recipeName: "Palak Paneer",
              ingredients: [
                "200g paneer (Indian cottage cheese)",
                "2 bunches of spinach",
                "1 onion",
                "2 cloves of garlic",
                "1 teaspoon cumin seeds",
                "1 teaspoon garam masala",
                "1 tablespoon ghee",
                "Salt to taste",
              ],
              cookingInstructions:
                "1. Boil spinach in water for 2-3 minutes.\n2. Drain and blend the spinach into a puree.\n3. Heat ghee in a pan and add cumin seeds.\n4. Sauté onion and garlic until golden brown.\n5. Add the spinach puree, garam masala, and salt.\n6. Cook for 5 minutes and then add cubed paneer.\n7. Simmer for another 5 minutes.\n8. Serve hot with roti or rice.",
              cuisineType: "Indian",
              image:
                "https://desichef.in/assets/img/product/slider-image/palak_paneer.png",
            },
            {
              recipeName: "Vegetable Biryani",
              ingredients: [
                "2 cups basmati rice",
                "Assorted vegetables (e.g., carrots, peas, bell peppers)",
                "1 onion",
                "2 cloves of garlic",
                "2 teaspoons biryani masala",
                "1 teaspoon turmeric",
                "4 cups vegetable broth",
                "2 tablespoons ghee",
              ],
              cookingInstructions:
                "1. Wash and soak rice in water for 30 minutes.\n2. Heat ghee in a pan and sauté onion and garlic.\n3. Add vegetables and cook until tender.\n4. Stir in biryani masala and turmeric.\n5. Drain the soaked rice and add it to the pan.\n6. Pour vegetable broth and bring to a boil.\n7. Reduce heat, cover, and cook for 15-20 minutes.\n8. Fluff the rice and serve hot.",
              cuisineType: "Indian",
              image:
                "https://w7.pngwing.com/pngs/643/1002/png-transparent-java-rice-dish-biryani-simple-indian-cuisine-cookbook-25-basic-recipes-for-beginners-take-out-butter-chicken-biriyani-food-recipe-cooking-thumbnail.png",
            },
            {
              recipeName: "Caesar Salad",
              ingredients: [
                "1 head of romaine lettuce",
                "1 cup croutons",
                "1/4 cup grated Parmesan cheese",
                "2 tablespoons lemon juice",
                "2 tablespoons olive oil",
                "1 clove of garlic",
                "1 teaspoon Dijon mustard",
                "Salt and pepper to taste",
              ],
              cookingInstructions:
                "1. Wash and dry the lettuce leaves.\n2. In a large bowl, whisk together lemon juice, olive oil, garlic, Dijon mustard, salt, and pepper.\n3. Add the lettuce leaves to the bowl and toss until coated.\n4. Sprinkle with croutons and grated Parmesan cheese.\n5. Serve immediately.",
              cuisineType: "International",
              image: "https://w7.pngwing.com/pngs/636/436/png-transparent-caesar-salad-chicken-salad-cobb-salad-barbecue-chicken-salad-leaf-vegetable-food-recipe.png",
            },
            {
              recipeName: "Spaghetti Carbonara",
              ingredients: [
                "200g spaghetti noodles",
                "150g pancetta or bacon",
                "3 egg yolks",
                "1/2 cup grated Parmesan cheese",
                "2 cloves of garlic",
                "2 tablespoons olive oil",
                "Salt and pepper to taste",
              ],
              cookingInstructions:
                "1. Cook spaghetti noodles according to package instructions.\n2. In a pan, heat olive oil and sauté pancetta or bacon until crispy.\n3. In a bowl, whisk together egg yolks, grated Parmesan cheese, minced garlic, salt, and pepper.\n4. Drain cooked pasta and add it to the pan with pancetta.\n5. Turn off the heat and quickly stir in the egg mixture.\n6. The heat from the pasta will cook the eggs.\n7. Serve immediately with additional Parmesan cheese.",
              cuisineType: "International",
              image:
                "data:image/jpeg;base64,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",
            },
            {
              recipeName: "Miso Soup",
              ingredients: [
                "2 tablespoons miso paste",
                "4 cups dashi (Japanese soup stock)",
                "100g tofu",
                "2 green onions",
                "1 sheet of seaweed",
                "Salt to taste",
              ],
              cookingInstructions:
                "1. Cut tofu into small cubes and thinly slice green onions.\n2. In a pot, bring dashi to a simmer.\n3. Dissolve miso paste in a small amount of dashi.\n4. Add the dissolved miso paste to the pot.\n5. Add tofu and simmer for 3-5 minutes.\n6. Season with salt if needed.\n7. Garnish with sliced green onions and seaweed.\n8. Serve hot as an appetizer or with rice.",
              cuisineType: "International",
              image: "https://w7.pngwing.com/pngs/550/851/png-transparent-ramen-miso-soup-kal-guksu-chinese-noodles-red-curry-miso-soup-food-plate.png",
            },
            {
              recipeName: "Vegetable Stir-Fry",
              ingredients: [
                "Assorted vegetables (e.g., bell peppers, broccoli, carrots, mushrooms)",
                "2 cloves of garlic",
                "2 tablespoons soy sauce",
                "1 tablespoon sesame oil",
                "1 tablespoon vegetable oil",
                "Salt and pepper to taste",
              ],
              cookingInstructions:
                "1. Heat vegetable oil in a pan or wok over high heat.\n2. Add minced garlic and stir-fry for a few seconds.\n3. Add the vegetables and stir-fry for 3-5 minutes until crisp-tender.\n4. In a small bowl, whisk together soy sauce, sesame oil, salt, and pepper.\n5. Pour the sauce over the vegetables and toss to coat evenly.\n6. Cook for an additional minute.\n7. Serve hot with rice or noodles.",
              cuisineType: "Asian",
              image: "https://w7.pngwing.com/pngs/651/721/png-transparent-veggie-burger-vegetable-food-recipe-stir-frying-vegetables-frying-pan-frozen-vegetables-fruit.png",
            },
            {
              recipeName: "Teriyaki Chicken",
              ingredients: [
                "500g chicken thighs",
                "1/4 cup soy sauce",
                "2 tablespoons honey",
                "1 tablespoon rice vinegar",
                "2 cloves of garlic",
                "1 teaspoon ginger",
                "1 tablespoon vegetable oil",
                "Sesame seeds for garnish",
              ],
              cookingInstructions:
                "1. In a bowl, whisk together soy sauce, honey, rice vinegar, minced garlic, and grated ginger.\n2. Cut chicken thighs into bite-sized pieces.\n3. Heat vegetable oil in a pan and cook chicken until browned.\n4. Pour the teriyaki sauce over the chicken and simmer for 5 minutes.\n5. Garnish with sesame seeds.\n6. Serve hot with steamed rice or stir-fried vegetables.",
              cuisineType: "Asian",
              image: "https://png.pngtree.com/png-vector/20201129/ourlarge/pngtree-teriyaki-chicken-rice-png-image_2437608.jpg",
            },
            {
              recipeName: "Pad Thai",
              ingredients: [
                "200g rice noodles",
                "200g shrimp (or tofu for vegetarian)",
                "1 shallot",
                "2 cloves of garlic",
                "2 tablespoons tamarind paste",
                "2 tablespoons fish sauce (or soy sauce for vegetarian)",
                "2 tablespoons vegetable oil",
                "2 tablespoons crushed peanuts",
              ],
              cookingInstructions:
                "1. Soak rice noodles in hot water until softened.\n2. In a pan, heat vegetable oil and sauté minced shallot and garlic.\n3. Add shrimp (or tofu) and cook until cooked through.\n4. Push the ingredients to one side of the pan and crack an egg.\n5. Scramble the egg and mix it with the other ingredients.\n6. Drain the softened rice noodles and add them to the pan.\n7. Stir in tamarind paste and fish sauce.\n8. Stir-fry until well combined.\n9. Serve hot, garnished with crushed peanuts and lime wedges.",
              cuisineType: "Asian",
              image: "data:image/jpeg;base64,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",
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "No recipe found",
        });
      }
    }, 2000);
  });
};
