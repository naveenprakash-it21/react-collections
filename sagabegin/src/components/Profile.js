// import { useState } from "react";
// import { useAuth } from "../authentication/AuthContext"; // Import Auth Context
// import { FaUserCircle } from "react-icons/fa"; // User Icon
// import "./Profile.css"; // Import CSS

// const Profile = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const { user, logout } = useAuth(); // Get user info from context

//   return (
//     <div className="profile-container">
//       {/* User Icon Button */}
//       <button className="profile-btn" onClick={() => setShowDropdown(!showDropdown)}>
//         <FaUserCircle size={30} />
//       </button>

//       {/* Dropdown Menu */}
//       {showDropdown && user && (
//         <div className="profile-dropdown">
//           <p className="email-text">{user.email}</p>
//           <button onClick={logout} className="logout-btn">Logout</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;
