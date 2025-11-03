// state is a n internal data store that belong to a specific component  and it can be changed over time
import React,{useState} from 'react'

const useState = () => {
    const [count,setCount]=useState(0);//initial value

  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={()=> setCount(count+1)}>increment</button>
    </div>
  )
}

export default useState

const [count,setCount]=useState(0)