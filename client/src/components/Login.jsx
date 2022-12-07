import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:3800/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => navigate("/profile"))
      .catch((err) => {
        navigate("/login");
      });
  }, []);

  const handleLogin = () => {
    axios
      .post("http://localhost:3800/login", { username, password })
      .then((user) => {
        localStorage.setItem("token", user.data.token);
        console.log("user is successfully login");
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        navigate("/login");
      });
  };

  return (
    <div className="container border rounded p-3 " style={{ width: "350px",marginTop:"200px" }}>


      <h3>Login</h3>



      <div className="form-group">
        <label for="exampleInputEmail1" style={{float: "left"}} >Email address</label>


        <input

          className="form-control"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
        />

      </div>


      <div className="form-group">
        <label for="exampleInputPassword1" style={{float: "left"}}>Password</label>

        <input
          className="form-control"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />

      </div>






      <button  style={{marginRight: "290px"}} className="btn btn-danger "   type="submit" onClick={handleLogin}>
        Login
      </button>



    </div>
  );
};

export default Login;
