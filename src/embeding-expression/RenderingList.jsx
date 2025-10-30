import React from 'react'

const RenderingList = () => {
    const fruits=['apple','banana','mango']
  return (
    <div>
      <ul>
        {fruits.map((fruits,index)=>(
<li key={index}>{fruits}</li>
        ))}
      </ul>
    </div>
  )
}

export default RenderingList
