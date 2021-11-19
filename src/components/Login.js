import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout, showProfile } from '../featrues/user'

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "Preo", age: 200, email: "peguibng@hotma.com" }))
        }}>Login</button>
      <button
       onClick={() => {
         dispatch(logout())
       }}>logout</button>
    </div>
  )
}

export default Login
 
