import React, { useEffect } from "react";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";




const Profile = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3800/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => {
        navigate("/login");
      });
  }, []);

  
  const logout = (e) => {
    e.preventDefault();
    console.log('Logout');
  
    // CLEAR DATA FROM STORAGE
    localStorage.clear();
    sessionStorage.clear();
  
    navigate("/login");
  }
  
  
  return (
    <div>
      <h2>Profile Page</h2>

      <Link 
              to="/home" 
              onClick={logout}
			>
             Logout
			</Link>
    </div>
  );
};

export default Profile;
