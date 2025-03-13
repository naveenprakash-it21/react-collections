import React from 'react'
import Child from './Child'

const Parent = ({user}) => {
  return (
    <div>
        <h3>Parent</h3>
        <Child user={user}/>

    </div>
  )
}

export default Parent