import React from 'react'

const Items = () => {
    const fruitsItems =['Apple','Banana','Orange']
  return (
    <div>
      <ul>
        {fruitsItems.map((itm,index)=> (
            <li key={index}>{itm}</li>
        ))}
      </ul>
    </div>
  )
}

export default Items
