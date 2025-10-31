import React, { useState } from "react";
import "../css/Recipes.css";

const Recipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [tab, setTab] = useState("instructions");

  const recipes = [
    { 
      name: "Veggie Stir-Fry", 
      ingredients: [
        "Mixed veggies",
        "soy sauce",
        "rice"
      ],
      instructions: [
        "Heat oil in a pan.",
        "Add veggies and sauté for 3 minutes.",
        "Pour soy sauce and stir well.",
        "Serve hot with rice."
      ],
      image: "https://i.pinimg.com/1200x/1b/8f/95/1b8f957716718581319f29664cf0be3f.jpg" 
    },
    { 
      name: "Banana Pancakes", 
      ingredients: [
        "Overripe bananas",
        "eggs",
        "flour"
      ], 
      instructions: [
        "Mash bananas in a bowl.",
        "Add eggs and flour, mix well.",
        "Pour onto a hot pan and cook both sides.",
        "Serve warm with honey."
      ],
      image: "https://i.pinimg.com/1200x/1f/37/d8/1f37d88c76b5fac0b863fa836d8df398.jpg" 
    },
    { 
      name: "Bread Pizza", 
      ingredients: [
        "Leftover bread",
        "tomato sauce",
        "cheese"
      ],
      instructions: [
        "Spread sauce on bread slices.",
        "Add toppings and cheese.",
        "Toast or bake for 5 minutes.",
        "Serve hot."
      ],
      image: "https://i.pinimg.com/1200x/f7/9e/a0/f79ea03a0a9a2aa26c92af0545b95a6b.jpg" 
    },
    { 
      name: "Masala Maggi", 
      ingredients: [
        "Instant noodles",
        "veggies",
        "spices"
      ],
      instructions: [
        "Boil noodles with spices.",
        "Add chopped veggies and cook 2–3 minutes.",
        "Stir and serve hot."
      ],
      image: "https://i.pinimg.com/736x/49/ab/b0/49abb03bcaf05c3ab29225dbdf8e8345.jpg"
    },
    { 
      name: "Oats Smoothie", 
      ingredients: [
        "Oats",
        "banana",
        "milk",
        "honey"
      ],
      instructions: [
        "Blend oats, banana, and milk together.",
        "Add honey and mix well.",
        "Serve chilled."
      ],
      image: "https://i.pinimg.com/736x/99/5b/3b/995b3bac292bb4757412f38622cf969e.jpg"
    },
    { 
      name: "Leftover Rice Cutlets", 
      ingredients: [
        "Cooked rice",
        "mashed potato",
        "spices"
      ],
      instructions: [
        "Mix rice, potato, and spices into a dough.",
        "Shape into cutlets.",
        "Shallow fry until golden brown.",
        "Serve with ketchup."
      ],
      image: "https://i.pinimg.com/736x/bc/fc/62/bcfc623d8471d892a3d506c34d4e8bd3.jpg"
    },
    { 
      name: "Roti Pizza", 
      ingredients: [
        "Chapati",
        "cheese",
        "veggies",
        "sauce"
      ],
      instructions: [
        "Spread sauce on chapati.",
        "Add veggies and cheese.",
        "Heat on pan till cheese melts."
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHcq6uzEWOQYx4ikbb7KPm-vwXg-mHHwQ1nw&s"
    },
    { 
      name: "Fruit Yogurt Bowl", 
      ingredients: [
        "Yogurt",
        "fruits",
        "nuts",
        "honey"
      ],
      instructions: [
        "Add fruits and nuts to yogurt.",
        "Drizzle honey on top.",
        "Serve chilled."
      ],
      image: "https://i.pinimg.com/1200x/85/a4/29/85a4293641ce6ec823da902d8d622462.jpg"
    },
    { 
      name: "Leftover Dal Paratha", 
      ingredients: [
        "Leftover dal",
        "wheat flour",
        "ghee"
      ],
      instructions: [
        "Mix dal and flour to make dough.",
        "Roll into parathas.",
        "Cook on tawa with ghee."
      ],
      image: "https://i.pinimg.com/736x/8b/f2/1a/8bf21aa213e7261aa0b30f8e7b892412.jpg"
    },
    { 
      name: "Vegetable Upma", 
      ingredients: [
        "Rava",
        "carrots",
        "peas",
        "curry leaves"
      ],
      instructions: [
        "Roast rava lightly.",
        "Add veggies and water.",
        "Cook until soft.",
        "Garnish with curry leaves."
      ],
      image: "https://i.pinimg.com/1200x/20/1e/0d/201e0d08d4cc72a9ba89a8fee3deee5a.jpg"
    },
    { 
      name: "Chocolate Mug Cake", 
      ingredients: [
        "Flour",
        "cocoa",
        "sugar",
        "milk"
      ],
      instructions: [
        "Mix ingredients in a mug.",
        "Microwave for 1–2 minutes.",
        "Serve warm."
      ],
      image: "https://www.allrecipes.com/thmb/XtXH_mc6AYr6UlixKDI2Zceudm0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/241038-Microwave-Chocolate-Mug-Cake-4x3-01-4a45acfde3dc40f3a778662ecc6f2108.jpg"
    },
    { 
      name: "Cucumber Sandwich", 
      ingredients: [
        "Bread",
        "cucumber",
        "butter",
        "salt"
      ],
      instructions: [
        "Spread butter on bread.",
        "Add cucumber slices and sprinkle salt.",
        "Cover and cut diagonally."
      ],
      image: "https://i.pinimg.com/1200x/9d/a1/35/9da135d7497489475575af65ddec1fcb.jpg"
    },
    { 
      name: "Poha", 
      ingredients: [
        "Flattened rice",
        "onion",
        "peanuts",
        "curry leaves"
      ],
      instructions: [
        "Rinse poha and drain water.",
        "Fry onion, peanuts, curry leaves.",
        "Add poha and mix well."
      ],
      image: "https://i.pinimg.com/736x/f9/96/77/f9967754ca222b76acb454f5672c329a.jpg"
    },
    { 
      name: "Egg Fried Rice", 
      ingredients: [
        "Cooked rice",
        "eggs",
        "soy sauce",
        "spring onion"
      ],
      instructions: [
        "Scramble eggs in a pan.",
        "Add rice and soy sauce.",
        "Stir fry and garnish with onions."
      ],
      image: "https://i.pinimg.com/736x/69/a1/b6/69a1b683131c3b3d270adfd478ae0bfc.jpg"
    },
    { 
      name: "Pasta Salad", 
      ingredients: [
        "Pasta",
        "mayo",
        "veggies",
        "herbs"
      ],
      instructions: [
        "Boil pasta and drain.",
        "Mix with mayo, herbs, and veggies.",
        "Serve chilled."
      ],
      image: "https://i.pinimg.com/1200x/fe/e8/bf/fee8bf9af1aabc5a56b0147e13f351ee.jpg"
    },
    { 
      name: "Tomato Soup", 
      ingredients: [
        "Tomatoes",
        "onion",
        "garlic",
        "butter"
      ],
      instructions: [
        "Boil tomatoes and blend.",
        "Add onion, garlic, and butter.",
        "Simmer and serve warm."
      ],
      image: "https://i.pinimg.com/736x/36/c9/fe/36c9fed987b12b69c210bc8e380a7a9c.jpg"
    },
    { 
      name: "Aloo Sandwich", 
      ingredients: [
        "Boiled potatoes",
        "bread",
        "butter",
        "spices"
      ],
      instructions: [
        "Mash potatoes with spices.",
        "Spread between bread slices.",
        "Grill and serve with chutney."
      ],
      image: "https://i.ytimg.com/vi/wbc62-6Gq9I/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDnYi1mbiEwGyXGeO22bi5HOW3a_g"
    },
    { 
      name: "Paneer Tikka", 
      ingredients: [
        "Paneer cubes",
        "curd",
        "masala",
        "capsicum"
      ],
      instructions: [
        "Marinate paneer in curd and masala.",
        "Grill with capsicum pieces.",
        "Serve with chutney."
      ],
      image: "https://i.pinimg.com/736x/5f/d4/32/5fd4328d6e3d5ad1b01b2c5d132d27e7.jpg"
    },
    { 
      name: "Corn Chaat", 
      ingredients: [
        "Sweet corn",
        "onion",
        "lemon juice",
        "masala"
      ],
      instructions: [
        "Boil corn and drain.",
        "Add onion, lemon, and masala.",
        "Mix and serve."
      ],
      image: "https://i.pinimg.com/736x/85/16/e5/8516e55d80cd861840bf0f92e0a75bfb.jpg"
    },
    { 
      name: "Garlic Bread", 
      ingredients: [
        "Bread",
        "butter",
        "garlic",
        "herbs",
        "cheese"
      ],
      instructions: [
        "Mix garlic and butter.",
        "Spread on bread and add cheese.",
        "Bake until golden."
      ],
      image: "https://i.pinimg.com/736x/38/19/a1/3819a163d2ae93ea60f4a3c85d821cf1.jpg"
    }
  ];

  const openRecipe = (recipe) => {
    setSelectedRecipe(recipe);
    setTab("instructions");
    document.body.style.overflow = "hidden";
  };

  const closeRecipe = () => {
    setSelectedRecipe(null);
    document.body.style.overflow = "";
  };

  return (
    <div className="recipes-container">
      <h2>🍳 Zero-Waste Recipes</h2>

      <div className="recipes-grid">
        {recipes.map((recipe, idx) => (
          <div
            key={idx}
            className="recipe-card"
            onClick={() => openRecipe(recipe)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter") openRecipe(recipe); }}
          >
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <h3>{recipe.name}</h3>
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <div className="recipe-popup" onClick={closeRecipe}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeRecipe}>✖</button>
            <h2>{selectedRecipe.name}</h2>
            <img src={selectedRecipe.image} alt={selectedRecipe.name} className="popup-image" />

            <div className="popup-tabs">
              <button className={tab === "instructions" ? "active" : ""} onClick={() => setTab("instructions")}>Instructions</button>
              <button className={tab === "ingredients" ? "active" : ""} onClick={() => setTab("ingredients")}>Ingredients</button>
            </div>

            <div className="popup-body">
              {tab === "instructions" && (
                <ol>
                  {selectedRecipe.instructions?.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              )}
              {tab === "ingredients" && (
                <ul>
                  {selectedRecipe.ingredients?.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recipes;
