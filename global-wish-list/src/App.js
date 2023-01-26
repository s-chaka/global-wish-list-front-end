import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";

const URL = process.env['REACT_APP_BACKEND_URL'];

const App = () =>{
  const [userData, setUserData] = useState([]);


  useEffect(() => {
    axios 
      .get(URL)
      .then((response)=> {
        const newUsers = response.data.map((user)=>{
          return{
            _id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            address: user.address,
            wish_list: user.wish_list,
            story: user.story
          };
        });
        setUserData(newUsers)
      })
      .catch((error)=> {
        console.log(error);
      });
  },[])
  return (
    <div className="App">
      <header className="App-header">
      <h1> Home </h1>
      </header>
    </div>
  );
}

export default App;
