import React, { useLayoutEffect, useRef } from 'react'

const UseLayoutEffect = () => {
    const boxRef=useRef(null);

    useLayoutEffect(()=>{
        // run before the UI is pointed
        const width=boxRef.current.offesetWidth;
        console.log("box widh:",width);
    },[]);

  return (
    <div
    ref={boxRef}
     style={{
        width:"200px",
        height:'100px',
        background:"skyblue",
        padding:"10px",
        fontSize:'20px'
     }}>
      hello,useLayoutEffect!!!
    </div>
  )
}

export default UseLayoutEffect
