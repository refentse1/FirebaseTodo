import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { collection, addDoc,getDocs,updateDoc, doc,deleteDoc } from "firebase/firestore"
import { db } from "../firebaseConfig";
import { settings } from "firebase/analytics";

function App() {
  const [count, setCount] = useState(0);
  const [task, setTask] = useState();
  const [isDone, setIsDone] = useState();
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    const handleFetch =async ()=>{
      const queryResult = await getDocs(collection(db,'todo'));
      queryResult.forEach((doc)=>{
        // console.log(doc.data());
        setTasks(prevTask=>[...prevTask,{
          id:doc.id,
          data:doc.data()
        }])
      })
    }
    window.addEventListener('load',(handleFetch));
    return()=>{
      window.removeEventListener('load',handleFetch);
    }
  },[tasks])

  const handleAdd =async ()=>{
    try{
      const docRef = await addDoc(collection(db,'todo'),{
        task,isDone
      });
      console.log("Document written with reference ID: ",docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const handleUpdate = async(id)=>{

    try{
      console.log("Try running");
      await updateDoc(doc(db,'todo',id),{
        task
      });
    }catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const hanldeDelete = async(id)=>{
    try{
      console.log("Try is running");
      await deleteDoc(doc(db,'todo',id));
    }catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <>
      <div>
        <label htmlFor="">Task</label>
        <input type="text" onChange={(e)=>setTask(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="">Done?</label>
        <select onChange={(e)=>setIsDone(e.target.value)} name="" id="">
          <option value="True">True</option>
          <option value="True">False</option>
        </select>
      </div>
      <button 
      onClick={()=>handleAdd()}>Add Task</button>
      <div>
        <h3>Task List</h3>
        <div>
          {tasks.map((item) => (
            <div key={item.id}>
                <div>
                  <p>{item.data.task} <span><input type="text" onChange={(e)=>setTask(e.target.value)} placeholder="Change task"/></span> <span><button onClick={()=>handleUpdate(item.id)}>Update</button></span><span><button onClick={()=>hanldeDelete(item.id)}>Delete</button></span> </p>
                  
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
