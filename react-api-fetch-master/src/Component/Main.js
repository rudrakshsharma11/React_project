import React, { useEffect, useState } from 'react'
import UserData from './UserData';
import axios from 'axios';
const API ="https://jsonplaceholder.typicode.com/users"
const Main = () => {
    

    const [users, setUsers] = useState([]);
    const [value,setValue] = useState("");

    const fetchUsers = async (url) => {

        try{
            const res = await fetch(url);
            const data =await res.json();
            if(data.length > 0){
                setUsers(data);
            }
            // console.log(data);

        }catch (e){
            console.error(e)
        }
    }


    useEffect(() =>{
        fetchUsers(API);
        // console.log(hii);
    },)

    // const handleReset = () =>{
    //     fetchUsers(API);
    // }
    // const handleSearch= async (e) =>{
    //     e.preventDefault();
    //     return await axios.get(`https://jsonplaceholder.typicode.com/users?q=${value}`).then
    //     ((response) => {
    //         setUsers(response.users);
    //         setValue("");
    //     })
    //     .catch((err) => console.log(err));
    // };
  return <>

        
        <input type="text" placeholder="Search Id..." value={value} 
        onChange={(e)=> setValue(e.target.value)}/>
        <button type="submit"  >Submit</button>
        <button type="submit"  >Reset</button>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                </tr>

            </thead>
            <tbody>
                <UserData users = {users}/>
            </tbody>
        </table>
  </>
  
    
  
};

export default Main;
