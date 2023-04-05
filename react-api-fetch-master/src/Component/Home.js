import React, { useState } from "react";
import { useEffect } from "react";
// import "./App.css";
import "./Home.css";

function Home() {
  let id = ""
    
    if(localStorage.getItem("user_id") == "undefined"){
        id=""
    }
    else{
        id=localStorage.getItem("user_id");
    }
  const API = `https://jsonplaceholder.typicode.com/photos/${id}`;
  const API_ALBUM = `https://jsonplaceholder.typicode.com/albums/${id}`;
  //   console.log("api", API);
  const [value, setValue] = useState([]);
  const [albumvalue, setAlbumValue] = useState([]);

  const fetchUsers = async (url, urlAlbum) => {
    console.log("url", urlAlbum);
    try {
      const res = await fetch(url);
      const data = await res.json();
      const album_res = await fetch(urlAlbum);
      const album_data = await album_res.json();
      if (data) {
        setValue([data]);
      }
      if (album_data) {
        setAlbumValue([album_data]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API, API_ALBUM);
    // console.log("hii");
  }, []);
  console.log("value is", albumvalue);
  return (
    <div>
      
      {value?.map((item, index) => (
        <div  >
          <h4>Photo:-</h4>
          <img src={item?.url}  className="album" />
        </div>
      ))}
      {albumvalue?.map((albumitem, index) => (
        <div  className="container-h">
          <div  className="details">
            <table >
              <thead >
                <tr  >
              
                  <th className="data">UserId</th>
                  <th className="data">ID</th>
                  <th className="data">Album Title</th>
                </tr>
              </thead>
            </table>
          </div>
            
              
          <table> 
            <tr className="details">

              <th className="data">{albumitem?.userId}</th>
              <th className="data"> {albumitem?.id}</th>
              <th className="data"> {albumitem?.title}</th>


            </tr>
          

          </table>
         
        </div>
      ))}
    </div>
  );
}

export default Home;