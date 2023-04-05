import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Album.css";

const Album = () => {
  let id = "";

  if (localStorage.getItem("user_id") == "undefined") {
    id = "";
  } else {
    id = localStorage.getItem("user_id");
  }

  const API = `https://jsonplaceholder.typicode.com/albums`;

  const [datas, setDatas] = useState([]);
  const [searchTitle, setSearchTitle] = useState([]);

  const fetchAlbum = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length >= 0) {
        setDatas(data);
        setSearchTitle(data);
        // console.log('data aaya');
      }
    } catch {}
  };

  useEffect(() => {
    fetchAlbum(API);
    console.log("hii");
  }, []);

  const Filter = (e) => {
    setSearchTitle(
      datas.filter((f) => f.title.toLowerCase().includes(e.target.value))
    );
  };
  //   let navigate = useNavigate();

  //   const AlbumPost=(id)=>{
  //    navigate(`/1/post`)
  //   }
  return (
    <>
      <input type="text" onChange={Filter} placeholder="Search Title"></input>
      <div className="a-body">
        <Link to={`/profile`}>
          <button className="pre-btn">Profile</button>
        </Link>
        <Link to={`/post`}>
          <button className="pos-btn">Post</button>
        </Link>
      </div>

      <h1 className="a-heading">User_Album</h1>
      <div>
        <h3>Search Title</h3>
        {/* <input type="text" placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}></input>
        {datas.filter((value) => {
          if(searchTitle === ""){
            return value
          }else if(value.title.toLowerCase().includes(searchTitle.toLowerCase())
          ){
            return value;
          }
        })} */}
      </div>
      <div className="container">
        {searchTitle?.map((item, index) => (
          <div key={index}>
            {item?.userId.toString() == id.toString() ? (
              <div className="card">
                <h4>Id:-{item?.userId}</h4>
                <p> Album_Title:- {item?.title}</p>

                <Link to={`/${item.id}/photo`}>
                  <button className="a-btn"> View Photo</button>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Album;
