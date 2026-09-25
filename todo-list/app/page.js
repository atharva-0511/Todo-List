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

  let renderTask = <h2>No Task</h2>

  if(mainTask.length>0){
    renderTask = mainTask.map((t,i) => {
      return (
        <li key={i}>
          <div className='flex justify-between mb-5'>
            <h5 className='text-2xl font-semibold'>{t.task}</h5>
            <h6 className='text-xl font-semibold'>{t.desc}</h6>
          </div>
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