import { useLoaderData } from 'react-router-dom'
import "../App.css";
const Users = () => {
    const users =useLoaderData();
  return (
    <div className="container">
      <div className="users">
      {users.map((user)=>{
        return (
        <div key={user.id} className="user">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </div>
        );
      })}
    </div>
  </div>
  )
}
export default Users

