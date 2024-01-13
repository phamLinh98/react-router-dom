import React, {useState,useEffect} from "react";
export default function About() {
  const [resourceType, setResource] = useState('post')
  useEffect(()=> {
   console.log('Linh');
  },[])
  return (
    <>
    <div>
      <button onClick={()=> setResource('posts')}>post</button>
      <button onClick={()=> setResource('users')}>user</button>
      <button onClick={()=> setResource('comment')}>comment</button>
    </div>
    <h1>{resourceType}</h1>
    </>
  );
}
