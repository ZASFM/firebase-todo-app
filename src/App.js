import React,{useState,useEffect} from 'react';
import {AiOutlinePlus} from 'react-icons/ai'
import Todo from './Todo';
import {
  collection,
  query,
  onSnapshot,
  updateDoc,
  doc,
  addDoc,
  deleteDoc} from 'firebase/firestore';
import { db } from './firebase';

const style={
  bg:`h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CBE50]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`,
}

const App=()=>{
   const [todos,setTodos]=useState([]);
   const [input,setInput]=useState('');
   //console.log(input);
   //Read data: 
   useEffect(()=>{
    const q=query(collection(db,'todos'));
    const unsubscribe=onSnapshot(q,(snapShot)=>{
      let todoArr=[];
      snapShot.forEach((doc)=>{
        todoArr.push({...doc.data(), id:doc.id,})
      });
      setTodos(todoArr);
    })
    return ()=>unsubscribe();
   },[])

   //Update data:
   const toggleComplete=async(todo)=>{
      try{
          await updateDoc(doc(db,'todos',todo.id),{
            completed:!todo.completed,
          })
      }
      catch(error){
         console.log(error.message);
      }
      finally{
        console.log('Update process ended');
      }
   }

   //Create todo:
   const createTodo=async(e)=>{
      e.preventDefault();
      if(input===''){
        alert('Insert a value first');
        return;
      }
      try{
         await addDoc(collection(db,'todos'),{
          text:input,
          completed:false,
         })
         setInput('');
      }
      catch(error){
        console.log(error.message);
      }
      finally{
        console.log('Create data process ended');
      }
   }

   //Delete a todo:
   const deleteTodo=async(todo)=>{
      try{
         await deleteDoc(doc(db,'todos',todo.id))
      }
      catch(error){
        console.log(error.message);
      }
      finally{
        console.log('Delete process ended');
      }
   }
   return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>Todo app</h3>
        <form className={style.form} onSubmit={createTodo}>
          <input type="text" placeholder='Add a todo' className={style.input} value={input} onChange={(e)=>setInput(e.target.value)}/>
          <button className={style.button} type="submit"><AiOutlinePlus size={30}/></button>
        </form>
        <ul>
          {todos.map((todo,index)=>{
            return (
              <Todo 
                 key={index}
                 todo={todo}
                 toggleComplete={toggleComplete}
                 deleteTodo={deleteTodo}
              />
            )
          })}
        </ul>
        <p className={style.count}>{todos.length>0 && `You have ${todos.length} todos`}</p>
      </div>
    </div>
   )
}

export default App
