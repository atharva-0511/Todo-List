"use client"
import React, { use, useState } from 'react'

const page = () => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e)=>{
    e.preventDefault()
    setMainTask([...mainTask, { task, desc }]);
    setTask("")
    setDesc("")
    console.log(mainTask)
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)
  }

  let renderTask = <h2>No Task</h2>

  if(mainTask.length>0){
    renderTask = mainTask.map((t,i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-5'>
          <div className='flex justify-between mb-5 w-2/3'> 
            <h5 className='text-2xl font-semibold'>{t.task}</h5>
            <h6 className='text-lg font-medium'>{t.desc}</h6>
          </div>
          <button onClick={()=> deleteHandler(i)} className='bg-red-400 text-white px-4 py-2 rounded-2xl font-bold'>Delete</button>
        </li>
      );
    });
  };

  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>My Todo-List</h1>
    <form onSubmit={submitHandler}>
      <input type='text' className='text-2xl border-4 rounded-2xl m-5 p-5'
        placeholder='Enter Task'
        value = {task}
        onChange={(e)=>{
          setTask(e.target.value)
        }}
      />
      <input type='text' className='text-2xl border-4 rounded-2xl m-5 p-5'
        placeholder='Enter Description'
        value = {desc}
        onChange={(e)=>{
          setDesc(e.target.value)
        }}
      />
      <button className='bg-emerald-50 text-black border-2 rounded-2xl p-2'>Add Task</button>
    </form>

    <hr/>

    <div className='p-8 bg-slate-200'>
      <ul>{renderTask}</ul>
    </div>

    </>
  )
}

export default page