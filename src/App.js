import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";

// Existing components
import Signup from "./components/Signup";
import Login from "./components/Login";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";

function App() {
  const [mode, setMode] = useState("light");
  const [page, setPage] = useState("signup");
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [recipe, setRecipe] = useState("");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setPage("home");
    }
  }, []);

  const toggleMode = () => setMode(mode === "light" ? "dark" : "light");
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:5000/signup", form);
      alert("Signup successful!");
      setPage("login");
    } catch {
      alert("Error signing up!");
    }
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", form);
      alert(res.data.message);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setUser(res.data.user);
      setPage("home");
    } catch {
      alert("Invalid login!");
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setForm({ name: "", email: "", password: "" });
    setPage("login");
  };

  // ✅ Full recipe data from Recipes.js (only name + ingredients)
  const allRecipes = [
    { name: "Veggie Stir-Fry", ingredients: "Mixed veggies, soy sauce, rice" },
    { name: "Banana Pancakes", ingredients: "Overripe bananas, eggs, flour" },
    { name: "Bread Pizza", ingredients: "Leftover bread, tomato sauce, cheese" },
    { name: "Masala Maggi", ingredients: "Instant noodles, veggies, spices" },
    { name: "Oats Smoothie", ingredients: "Oats, banana, milk, honey" },
    { name: "Leftover Rice Cutlets", ingredients: "Cooked rice, mashed potato, spices" },
    { name: "Roti Pizza", ingredients: "Chapati, cheese, veggies, sauce" },
    { name: "Fruit Yogurt Bowl", ingredients: "Yogurt, fruits, nuts, honey" },
    { name: "Leftover Dal Paratha", ingredients: "Leftover dal, wheat flour, ghee" },
    { name: "Vegetable Upma", ingredients: "Rava, carrots, peas, curry leaves" },
    { name: "Chocolate Mug Cake", ingredients: "Flour, cocoa, sugar, milk" },
    { name: "Cucumber Sandwich", ingredients: "Bread, cucumber, butter, salt" },
    { name: "Poha", ingredients: "Flattened rice, onion, peanuts, curry leaves" },
    { name: "Egg Fried Rice", ingredients: "Cooked rice, eggs, soy sauce, spring onion" },
    { name: "Pasta Salad", ingredients: "Pasta, mayo, veggies, herbs" },
    { name: "Tomato Soup", ingredients: "Tomatoes, onion, garlic, butter" },
    { name: "Aloo Sandwich", ingredients: "Boiled potatoes, bread, butter, spices" },
    { name: "Paneer Tikka", ingredients: "Paneer cubes, curd, masala, capsicum" },
    { name: "Corn Chaat", ingredients: "Sweet corn, onion, lemon juice, masala" },
    { name: "Garlic Bread", ingredients: "Bread, butter, garlic, herbs, cheese" },
  ];

  // ✅ Improved search logic
  const findRecipes = () => {
    if (!recipe.trim()) return;
    const searchTerm = recipe.toLowerCase();
    const filtered = allRecipes.filter(
      (r) =>
        r.name.toLowerCase().includes(searchTerm) ||
        r.ingredients.toLowerCase().includes(searchTerm)
    );
    setRecipes(
      filtered.length
        ? filtered
        : [{ name: "No match found", ingredients: "Try another item" }]
    );
  };

  return (
    <Router>
      <div className={`app ${mode}`}>
        {/* Navbar */}
        <header>
          <h1>🌿 Zero-Waste Recipe Finder</h1>
          <div className="controls">
            <Link to="/blog">Blog</Link>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/recipes">Recipes</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={toggleMode}>
              {mode === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
            {user && <button onClick={handleLogout}>🚪 Logout</button>}
          </div>
        </header>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <main>
                {page === "signup" && (
                  <div className="auth-box">
                    <h2>Create Account</h2>
                    <input name="name" placeholder="Full Name" onChange={handleChange} />
                    <input name="email" placeholder="Email" onChange={handleChange} />
                    <input
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                    <button onClick={handleSignup}>Sign Up</button>
                    <p>
                      Already have an account?{" "}
                      <span className="link" onClick={() => setPage("login")}>
                        Login
                      </span>
                    </p>
                  </div>
                )}

                {page === "login" && (
                  <div className="auth-box">
                    <h2>Welcome Back!</h2>
                    <input name="email" placeholder="Email" onChange={handleChange} />
                    <input
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                    <button onClick={handleLogin}>Login</button>
                    <p>
                      New here?{" "}
                      <span className="link" onClick={() => setPage("signup")}>
                        Sign up
                      </span>
                    </p>
                  </div>
                )}

                {page === "home" && (
                  <div className="recipe-box">
                    <h2>Hello, {user.email}</h2>
                    <p>Enter leftover ingredient to find recipes 👇</p>
                    <input
                      value={recipe}
                      onChange={(e) => setRecipe(e.target.value)}
                      placeholder="e.g. rice, banana, bread"
                    />
                    <button onClick={findRecipes}>Find Recipes</button>

                    <div className="results">
                      {recipes.map((r, i) => (
                        <div key={i} className="card">
                          <h3>{r.name}</h3>
                          <p>{r.ingredients}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </main>
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
