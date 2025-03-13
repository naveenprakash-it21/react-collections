import React from 'react'
import Parent from "./Parent"

const Grandparent = ({user}) => {
    // console.log("Grandparent : ", user)
    // console.log(user.name,user.age)
  return (
    <div>
      <h2>Grandparent</h2>
        <Parent user={user}/>
    </div>
  )
}

export default Grandparent