import React from "react";
import "../css/Profile.css";

function Profile({ user }) {
  // ✅ ADD THESE TWO LINES
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const currentUser = user || storedUser;

  return (
    <div className="auth-box">
      <h1>Profile</h1>
      <p><b>Email:</b> {currentUser?.email}</p>
      <p><b>Name:</b> {currentUser?.name}</p>

     
    </div>
  );
}

export default Profile;
