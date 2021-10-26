import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => 
  fetch('http://localhost:3000/users')
  .then((res)=> res.json())
  .then((json) => setUsers(json)),
  []
  );

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <ul> 
          {users.map((user) => ( 
            <li key={user.name}>{user.name}</li>
          ))}
        </ul>
      
      {/* </header> */}
    </div>
  );
}

export default App;
