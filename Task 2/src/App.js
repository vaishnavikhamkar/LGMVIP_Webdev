import "./App.css";
import React,{useState} from 'react';
import User from "./components/user/user";
const App=()=>{
   
  const [users, setUsers] = useState([]);

  const loadUsers = async()=>{
    console.log("before");
    const response = await fetch(" https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    console.log(jsonResponse)
    setUsers(jsonResponse.data);
  };
    
  console.log(users);

  return (
    <div className="App">
      <h1>Hello All</h1>
      <button onClick={loadUsers}>Get Data</button>
      <h2>Users:</h2>
      <div className="users-container">
        {users.length > 0 && users.map((user, index)=> (<User key={index} userData={user} />))}
      </div>
    </div>
  );
};

export default App;