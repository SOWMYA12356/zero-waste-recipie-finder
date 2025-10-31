// src/pages/Blog.js
import React from "react";
import "../css/Blog.css";

function Blog() {
  const tips = [
    {
      title: "Save Leftover Rice",
      description: "Turn leftover rice into delicious rice fritters or fried rice with veggies."
    },
    {
      title: "Overripe Bananas",
      description: "Make banana pancakes, banana bread, or smoothies instead of throwing them away."
    },
    {
      title: "Stale Bread",
      description: "Use it for bread pizza, croutons, or bread pudding recipes."
    },
    {
      title: "Veggie Scraps",
      description: "Save peels and stems for soups, stocks, or composting."
    },
  ];

  return (
    <div className="auth-box">
      <h1>Cooking Tips & Zero-Waste Ideas 🌿</h1>
      {tips.map((tip, index) => (
        <div key={index} className="card">
          <h3>{tip.title}</h3>
          <p>{tip.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
