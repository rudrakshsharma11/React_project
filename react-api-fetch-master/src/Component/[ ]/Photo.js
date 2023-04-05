import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ".//Photo.css";

function Photo() {
  let { id } = useParams();
  // console.log("params are",params)
  const API = `https://jsonplaceholder.typicode.com/photos`;

  const [Pdata, SetPdata] = useState([]);

  const fetchPhoto = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length >= 0) {
        SetPdata(data);
        console.log(data);
      }
    } catch {
      console.error();
    }
  };

  useEffect(() => {
    fetchPhoto(API);
    // console.log("hii");
  }, []);
  return (
    <>
      <div className="ph-body">
        <div >
          <Link to={`/profile`}>
            <button className="pre-btn">Profile</button>
          </Link>
          <Link to={`/album`}>
            <button className="pos-btn">Album</button>
          </Link>
        </div>
        <h1 className="ph-heading">Users_Photos</h1>
        <div className="ph-container">
          {Pdata?.map((item, index) => (
            <div key={index}>
              {item?.albumId.toString() == id.toString() ? (
                <div className="ph-card">
                  <p>Album_Id:- {item?.albumId}</p>
                  <img src={item?.thumbnailUrl}></img>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Photo;
