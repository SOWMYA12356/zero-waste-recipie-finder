import React from "react";

const Navbar = ({ setPage, mode, toggleMode }) => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 50px" }}>
      <div>
        <button onClick={() => setPage("signup")}>Signup</button>
        <button onClick={() => setPage("login")}>Login</button>
      </div>

      <div>
        <button onClick={() => window.location.href = "/about"}>About</button>
        <button onClick={() => window.location.href = "/recipes"}>Recipes</button>
        <button onClick={() => window.location.href = "/profile"}>Profile</button>
        <button onClick={() => window.location.href = "/contact"}>Contact</button>
        <button onClick={toggleMode}>
          {mode === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
