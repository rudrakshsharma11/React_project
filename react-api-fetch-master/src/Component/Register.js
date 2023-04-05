import React, { useEffect, useState } from "react";
// import { useRoutes } from "react-router-dom";
// import Home from "./Home";
import { useNavigate } from "react-router-dom";

import "./Register.css";

const Register = () => {
  const API = "https://jsonplaceholder.typicode.com/users";
  const [value, setValue] = useState("");
  let navigate = useNavigate();
  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setValue(data);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
    // console.log(hii);
  }, []);
  console.log("datas are", value);
  const [userRegistration, setUserRegistration] = useState({
    email: "",
    username: "",
    // password: "",
  });
  console.log("email");

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = value.find(function (data) {
      if (
        data.username.toString() == userRegistration?.username &&
        data.email.toString() == userRegistration?.email
      ) {
        return data.id;
      } else {
        alert("Please give the Correct Details");
      }

      // console.log("hi");
    });
    localStorage.setItem("user_id", username?.id);
    navigate("/profile");
  };
  return (
    <>
      <div className="r-body">
        <div className="heading">
          <h1>BLOG POST</h1>
        </div>
        <form action="" className="form">
          <div>
            <label htmlFor="userna" className="text-field">
              Email
            </label>
            <input
              type="text"
              className="input-field"
              autoComplete="off"
              value={userRegistration.email}
              onChange={handleInput}
              name="email"
              id="username"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-field">
              Password/Username
            </label>

            <input
              type="password"
              className="input-field"
              autoComplete="off"
              value={userRegistration.username}
              onChange={handleInput}
              name="username"
              id="email"
            />
          </div>

          {/* <div>
          <label htmlFor="password" className="text-field">
            Password
          </label>
          <input
            type="password"
            className="input-field"
            autoComplete="off"
            value={userRegistration.password}
            onChange={handleInput}
            name="password"
            id="password"
          />
        </div> */}
          <button type="submit" onClick={handleSubmit} className="reg-btn">
            Register
          </button>
        </form>

        <div>
          {records.map((curElem) => {
            return (
              <div className="showDataStyle">
                <p>{curElem.username}</p>
                <p>{curElem.email}</p>

                <p>{curElem.password}</p>
              </div>
            );
          })}
        </div>
        {/* <Home /> */}
      </div>
    </>
  );
};

export default Register;
