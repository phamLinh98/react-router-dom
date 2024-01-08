import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function About() {
  const navigate = useNavigate();
  return (
    <div>
    <h1>Hello World</h1>
    <Link to='/detail'>Test</Link>
    <button onClick={()=> navigate('/detail')} >Chuyen trang</button>
  </div>
  )
}
