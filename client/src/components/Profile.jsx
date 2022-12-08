import React, { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";




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

      


      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              {/* <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none text-center">
                    <span className="text-center">Enumerator</span>
                </a> */}
              <h3>Enumerator</h3>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                  <a href="#" className="nav-link align-middle px-0">
                    <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Enumerator</span>
                  </a>
                </li>

                <li>
                  <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Beneficiary</span> </a>
                  <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                    <li className="w-100">
                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline " style={{ fontSize: "12px" }}>Add Beneficiary</span></a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline" style={{ fontSize: "12px" }}>List Beneficiary</span></a>
                    </li>
                  </ul>
                </li>




                <li>
                  <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                    <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Test Board</span></a>
                  <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                    <li className="w-100">
                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Test List</span></a>
                    </li>
                    <li>
                      {/* <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</a> */}
                    </li>
                  </ul>
                </li>



                <li>
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Enumerator List</span></a>
                </li>


                <li>
                  <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Transactions</span> </a>
                  <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                    <li className="w-100">
                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</a>
                    </li>
                    <li>
                      <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
                </li>
              </ul>
              {/* <hr> */}
              <div className="dropdown pb-4">
                <a >


                  <Link
                    to="/home"
                    onClick={logout}
                  >
                    Logout
                  </Link>
                </a>

              </div>
            </div>
          </div>
          <div className="col py-3">
            Content area...
          </div>



          
        </div>
      </div>




    </div>
  );
};

export default Profile;
