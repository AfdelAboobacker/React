import React from 'react'

const Conditional = () => {
    const isLoggedIn=true;
  return (
    <div>
      <p>{isLoggedIn ? "Welcome Back!" : "Please sign in"}</p>
    </div>
  )
}

export default Conditional
