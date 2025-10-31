import React from "react";
import "../css/Home.css";

function Home({ user, recipes, recipe, setRecipe, findRecipes }) {
  return (
    <div className="recipe-box">
      <h1>Welcome, {user?.email}!</h1>
      <p>Find delicious recipes using your leftover ingredients 🌿</p>

      {/* Recipe of the Day */}
      <div className="highlight">
        <h2>Recipe of the Day</h2>
        <div className="card">
          <h3>Veggie Stir-Fry</h3>
          <p>Mixed veggies, soy sauce, rice</p>
        </div>
      </div>

      {/* Search bar */}
      <input
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)}
        placeholder="e.g. rice, banana, bread"
      />
      <button onClick={findRecipes}>Find Recipes</button>

      {/* Search results */}
      <div className="results">
        {recipes.map((r, i) => (
          <div key={i} className="card">
            <h3>{r.name}</h3>
            <p>{r.ingredients}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
