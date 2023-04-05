import React, { useEffect, useState } from "react";
// import { useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  let id = "";

  if (localStorage.getItem("user_id") == "undefined") {
    id = "0";
  } else {
    id = localStorage.getItem("user_id");
  }
  console.log(id);

  const API = `https://jsonplaceholder.typicode.com/users/${id}`;
  const [value, setValue] = useState([]);

  const fetchAPIData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data) {
        setValue([data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAPIData(API);
  }, []);

  return (
    <>
    {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/
    font-awesome/4.7.0/css/font-awesome.min.css"></link> */}
    <Link to={`/`}>
    <button className="bck-btn"> Back <i class="fa fa-hand-o-left"></i></button> 
    </Link>
      
      <h1 className="p-heading">Dashbord / User-Profile</h1>

      {value?.map((item, index) => (
        <div className="p-details">
          <h3>Name:- {item?.name}</h3>

          <h4> Email:- {item?.email}</h4>

          <h5> Phone No:-{item?.phone}</h5>

          <h5> Website:-{item?.website}</h5>

          <p>
            {" "}
            <strong>Address :-</strong> {item?.address.street},{item?.address.suite},
            {item?.address.city},{item?.address.zipcode}
          </p>
          <br></br>
        </div>
      ))}
      <div>
        <Link to={`/album`}>
          <button className="p-btn"> Album</button>
        </Link>

        <Link to={`/post`}>
          <button className="p-btn">Post</button>
        </Link>
      </div>
    </>
  );
};

export default Profile;
