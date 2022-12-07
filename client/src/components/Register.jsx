import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
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
        navigate("/register");
      });
  }, []);

  const handleRegister = () => {
    axios
      .post("http://localhost:3800/register", { username, password })
      .then(() => {
        console.log("user is registered");
        navigate("/login");
        alert("Successfully registered");
      })
      .catch((error) => {
        console.log(error);
        alert("User already registered or wrong credential");

        navigate("/register");
      });
  };

  return (


    <div className="container border rounded p-3 " style={{ width: "350px",marginTop:"200px" }}>


      <h3>Registration</h3>



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






      <button  style={{marginRight: "290px"}} className="btn btn-danger "   type="submit" onClick={handleRegister}>
        Login
      </button>



    </div>


    // <div>
    //   <h2>Register Page</h2>
    //   <input
    //     type="text"
    //     placeholder="Username"
    //     value={username}
    //     onChange={(e) => {
    //       setUsername(e.target.value);
    //     }}
    //     required
    //   />
    //   <input
    //     type="password"
    //     placeholder="Password"
    //     value={password}
    //     onChange={(e) => {
    //       setPassword(e.target.value);
    //     }}
    //     required
    //   />
    //   <button type="submit" onClick={handleRegister}>
    //     Register
    //   </button>
    // </div>
  );
};

export default Register;
