import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Album.css";

const Post = () => {
  let id = "";

  if (localStorage.getItem("user_id") == "undefined") {
    id = "";
  } else {
    id = localStorage.getItem("user_id");
  }

  const API = `https://jsonplaceholder.typicode.com/posts`;
  const [Pdatas, setPDatas] = useState([]);

  const fetchPost = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length >= 0) {
        setPDatas(data);
        // console.log('data aaya');
      }
    } catch {}
  };

  useEffect(() => {
    fetchPost(API);
    // console.log("hii");
  }, []);
  //   let navigate = useNavigate();

  //   const AlbumPost=(id)=>{
  //    navigate(`/1/post`)
  //   }
  return (
    <>
      <div className="a-body">
        <Link to={`/profile`}>
          <button className="pre-btn">Profile</button>
        </Link>
        <Link to={`/album`}>
          <button className="pos-btn">Album</button>
        </Link>
      </div>
      <h1 className="a-heading">User_Post</h1>
      <div className="container">
        {Pdatas?.map((item, index) => (
          <div key={index}>
            {item?.userId.toString() == id.toString() ? (
              <div className="card">
                <h4>User_Id:-{item?.userId}</h4>
                <p> Post_Title:- {item?.title}</p>
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

export default Post;
