import { useState, useEffect } from 'react'


function UserComment() {
  const [resourceType, setResourceType] = useState("Click the button" )
  console.log("Refresh");
  useEffect(()=>{
    console.log("render");
  },[resourceType])

  return (
    <>
      <div>
        <button onClick={()=>setResourceType('Post')}>Posts</button>
        <button onClick={()=>setResourceType('Comment')}>Comments</button>
        <button onClick={()=>setResourceType('Users')}>Users</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  )
}

export default UserComment
