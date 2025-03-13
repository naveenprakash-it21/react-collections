import {Link, useLoaderData } from 'react-router-dom'
import "../App.css";
const Users = () => {
    const users =useLoaderData();
  return (
    <div className="container">
      <div className="users">
      {users.map((user)=>{
        return (
        <Link to ={user.id.toString()} key={user.id}>
          <div className="user">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        </Link>  
        
        );
      })}
    </div>
  </div>
  )
}
export default Users

