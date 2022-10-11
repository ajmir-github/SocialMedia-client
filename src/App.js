import { useEffect, useRef, useState } from "react";
import { UserCollection } from "./services";

function App() {
  const [users, setUsers] = useState([]);
  const usernameRef = useRef(null);
  const fullNameRef = useRef(null);
  const passwordRef = useRef(null);
  const onSubmit = e =>{
    e.preventDefault();
    const user = {
      username:usernameRef.current.value,
      fullName:fullNameRef.current.value,
      password:passwordRef.current.value
    };
    UserCollection.create(user)
      .then(res=>{
        console.log(res.data)
        getTheUsers()
      })
      .catch(error=>console.error(error))
  }
  const deleteUser = (id)=>{
    UserCollection.delete(id)
      .then(res=>{
        console.log(res)
        getTheUsers()
      })
      .catch(error=>console.error(error))
  }
  const getTheUsers = ()=>{
    UserCollection.getAll()
      .then(res=>setUsers(res.data))
      .catch(error=>console.error(error))
  }
  useEffect(()=>{
    getTheUsers()
  }, [])
  return (
    <div>
      <h4>Create a user:</h4>
      <form onSubmit={onSubmit}>
        <input type="text" ref={usernameRef} placeholder="Username"/>
        <input type="text" ref={fullNameRef} placeholder="Full Name"/>
        <input type="password" ref={passwordRef} placeholder="Password"/>
        <button type="submit">Create</button>
      </form>
      

      <h4>Users</h4>
      <ol>
        {users.map(user=> <li key={user._id}>
          <h4>{user.fullName}</h4>
          <button onClick={()=> deleteUser(user._id)}>Delete</button>
        </li>)}
      </ol>
    </div>
  );
}

export default App;
