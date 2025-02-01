import React, { useState } from 'react'

const Login = () => {
  const [input, setInput] = useState({
      username : '',
      passwword : '',
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.email !== "" && input.passwword !== ""){
      auth.loginAction(input);
      return
    }
    alert("Please provide an valid input")
  }

  const handleInput = (e) => {
    const {name,value} = e.target;
    setInput((prev) => ({
      ...prev,
      [name] : value,
    }))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Email</label>
          <input type="email" id='user-email' name='email' placeholder='example@gmail.com' onChange={handleInput} />
        </div>
        <div className="form-control">
          <label htmlFor="">Password</label>
          <input type="password" name="password" id="user-pswd" onChange={handleInput}/>
        </div>
        <button className='btn-submit'>Submit</button>
      </form>
    </>
  )
}

export default Login
