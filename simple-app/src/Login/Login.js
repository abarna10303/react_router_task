import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/image/login-logo.jpg";
import "./Login.scss";
const Login = () => {
  const userDetails = [
    {
      username: "Abarna",
      password: "Abarna406@",
    },
    {
      username: "Amar",
      password: "Abarna406",
    },
    {
      username: "Akila",
      password: "Abarna",
    },
  ];
  const [userName, setUserName] = useState("");
  const [PassWord, setPassword] = useState("");
  const [error, setError] = useState(Boolean);
  const [error1, setError1] = useState(Boolean);
  const navigate = useNavigate();
  const handlingInput = (txt) => {
    if (txt.target.name === "name") {
      setUserName(txt.target.value);
      if (txt.target.value === "") {
        setError(false);
      } else {
        setError(false);
      }
    } else {
      setPassword(txt.target.value);
      if (txt.target.value === "") {
        setError1(false);
      } else {
        setError1(false);
      }
    }
  };
  const handlingSubmit = (btnparam) => {
    btnparam.preventDefault();
    if (userName === "" && PassWord === "") {
      setError(true);
      setError1(true);
    } else if (userName === "") {
      return setError(true);
    } else if (PassWord === "") {
      return setError1(true);
    }
    userDetails.forEach((data) => {
      if (userName === data.username && PassWord === data.password) {
        navigate("/Home");
      }
    });
  };
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="image">
              <img src={Logo} alt="Logo from Login"></img>
            </div>
          </div>
          <div className="col form">
            <form method="post">
              <h1>Login</h1>
              <div>
                <label className="txt">User Name</label>
                <input
                  className="txt"
                  type={"text"}
                  name="name"
                  onChange={handlingInput}
                ></input>
                {error ? (
                  <p className="error-msg">Please Enter Your Name</p>
                ) : null}
              </div>
              <div>
                <label className="txt">Password</label>
                <input
                  className="txt"
                  type={"password"}
                  name="password"
                  onChange={handlingInput}
                ></input>
                {error1 ? (
                  <p className="error-msg">Please Enter Your Password</p>
                ) : null}
              </div>
              <div>
                <button onClick={handlingSubmit} className="btn">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
