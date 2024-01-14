import React, {useState,useEffect} from "react";
export default function UsingEffect() {
  const [resourceType, setResource] = useState('post')
  const [linh, setLinh] = useState(111);
  let updateLinh = () => setLinh(linh + 1);
  useEffect(()=> {
   console.log('Linh');
  },[resourceType])
  return (
    <>
    <div>
      <button onClick={()=> setResource('posts')}>posts</button>
      <button onClick={()=> setResource('user')}>user</button>
      <button onClick={()=> setResource('comment')}>comment</button>
      <button onClick={updateLinh}>add 1</button>
    </div>
    <h1>{resourceType}</h1>
    <h1>{linh}</h1>
    </>
  );
}

// empty useEffect se duoc goi lien tuc moi khi compoennt duoc re-render 
// [] useEffect se chi dc goi 1 lan duy nhat khi componet dc render lan dau tien 
// set 1 ptu [a] lam dependency(a la 1 state)  thi useEffect se duoc goi moi khi gia tri cua resourceType thay doi