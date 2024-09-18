import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../config/firebase-config';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Todo = () => {

  let navigate = useNavigate()
  
useEffect(()=>{

  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log(uid);

      
      // ...
    } else {
      navigate('/login')
      // ...
    }
    
  });

},[])





  function logout() {
    signOut(auth).then(() => {
      alert('Signout hogaya')
      navigate('/login')
    }).catch((error) => {
      console.log(error);
      
    });
      
    }

      let inputvalue = useRef()
      
      let [todo,settodo]= useState([])
      
      let addtodo = (event)=>{
      
          
      event.preventDefault()
      todo.push(inputvalue.current.value)
      settodo([...todo])
      console.log(todo);
      
      inputvalue.current.value = ''
      }
      
      
      let edit = (index)=>{
        let newinput = prompt('enter new todo')
        todo.splice(index,1,newinput)
        settodo([...todo])
      
      }
      let delet = (index)=>{
        todo.splice(index,1)
        settodo([...todo])
        console.log(index);
        
      
      }
        
         
      
       

  return (
    <>
    <div>Todo</div>


<div>
<div className='w-full text-center h-full justify-center  flex'>
            <div>
      
          <div className=' mt-5 text-4xl'>Todo App</div>
      <div className='bg-blue-400 p-7 m-10 rounded-2xl  content-center'>
      
          <div>
      
          <form onSubmit={addtodo} >
          <input type="text" className='border rounded-lg p-2 h-10 ' placeholder='enter todo' required ref={inputvalue} />
          <button type='submit' className='px-5  py-2 border hover:scale-110 bg-black text-cyan-50 hover:bg-slate-500 rounded-full ml-5 mt-5 text-sm' >Add Todo</button>
          </form>
          </div>
              </div>
          {/* <div className=' h-20 w-80 bg-slate-500 justify-center items-center mt-10  flex'> */}
            <ol>
              {todo.map((item,index)=>{
                return <div className='p-3 rounded-lg border border-zinc-500  bg-gray-300 justify-center items-center m-3  ' key={index}>
                  <li className='text-2xl font-semibold capitalize'>{item}
                    
                  </li>
                  
                  <button className='border mr-3 mt-4 hover:scale-110 hover:border-white hover:bg-red-700 hover:text-white rounded-full border-black text-sm bg-red-500 px-3 py-1' onClick={()=>delet(index)}>Delet</button>
                  <button className='border mr-3 mt-4 hover:scale-110 hover:border-white hover:bg-green-700 hover:text-white rounded-full border-black text-sm bg-green-500 px-3 py-1' onClick={()=>edit(index)}>Edit</button>
                </div>
              })}
            </ol>
            </div>
              </div>
<div className='items-center w-full text-center'>
              <button className='btn  btn-primary' onClick={logout}>LogOut</button>

</div>

</div>


    </>
  )
}

export default Todo