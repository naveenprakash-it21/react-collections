import { useNavigate } from "react-router-dom"

 const Contact = () => {
  const navigate=useNavigate();

  return (
    <div className="container">
      <h1>contact</h1>
      <button onClick={()=>navigate("info")}>Infomation</button>
      <button onClick={()=>navigate("form")}>Form</button>
    </div>
  )
}
export default Contact
 