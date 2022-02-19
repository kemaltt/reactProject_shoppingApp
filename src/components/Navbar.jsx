import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../auth/firebase-config";

export default function Navbar() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const handleLogOut = () => {
    signOut(auth);
    navigate("/homepage");
  };

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light d-flex align-items-center justify-content-between">
        <a className="navbar-brand text-white" href="">
          Shopping App
        </a>

        <div className="navbar-list  d-flex   ">
          {currentUser ? (
            <>
              <li
                onClick={() => {
                  navigate("/");
                }}
                className="nav-item"
              >
                Home
              </li>
              <li
                onClick={() => {
                  navigate("/favorites");
                }}
                className="nav-item"
              >
                Favorites
              </li>
              <li className="nav-item">Cart</li>
              <div className="d-flex align-items-center">
                <li className="nav-item1 text-capitalize text-light ml-5 ">
                  {currentUser.displayName}
                </li>
                {/* <button
                  onClick={handleLogOut}
                  className="logout-btn btn btn-outline-warning"
                >
                  Logout
                </button> */}
                <svg
                  onClick={handleLogOut}
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="yellow"
                  className="logout-btn bi bi-box-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
              </div>
            </>
          ) : (
            <>
              <li
                onClick={() => {
                  navigate("/");
                }}
                className="nav-item"
              >
                Home
              </li>
              <li
                onClick={() => {
                  navigate("/favorites");
                }}
                className="nav-item"
              >
                Favorites
              </li>
              <li className="nav-item">Cart</li>
              <li
                onClick={() => {
                  navigate("/login");
                }}
                className="nav-item"
              >
                Login
              </li>
              <li
                onClick={() => {
                  navigate("/signup");
                }}
                className="nav-item"
              >
                Register
              </li>
            </>
          )}

          {/* {currentUser ? (
          <div className="d-flex">
            <h3 className="text-capitalize text-light">
              {currentUser.displayName}
            </h3>
            <button
              onClick={handleLogOut}
              className="btn btn-outline-warning mx-2"
            >
              Log Out
            </button>
          </div>
        ) : ( */}
          {/* <form className="form my-2 my-lg-0">
            <button
              // onClick={() => navigate("/login")}
              className="btn btn-outline-light my-2 mx-1"
              type="button"
            >
              Home
            </button>
            <button
              // onClick={() => navigate("/login")}
              className="btn btn-outline-light my-2 mx-1"
              type="button"
            >
              Favorites
            </button>
            <button
              // onClick={() => navigate("/login")}
              className="btn btn-outline-light my-2 mx-1"
              type="button"
            >
              Cart
            </button>
            <button
              // onClick={() => navigate("/login")}
              className="btn btn-outline-light my-2 mx-1"
              type="button"
            >
              Login
            </button>
            <button
              // onClick={() => navigate("/register")}
              className="btn btn-outline-light "
              type="button"
            >
              SignUp
            </button>
          </form> */}
        </div>
      </nav>
    </React.Fragment>
  );
}
