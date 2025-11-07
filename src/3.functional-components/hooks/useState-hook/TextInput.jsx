import React, { useState } from 'react'

const TextInput = () => {
   const [name, setName] = useState('');
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>hello,{name || 'stranger'}</p>
    </div>
  )
}

export default TextInput
