"use client"
import React, { use, useState } from 'react'

const page = () => {
  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(task)
    console.log(desc)
    settask("")
    setdesc("")
  }

  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>My Todo-List</h1>
    <form onSubmit={submitHandler}>
      <input type='text' className='text-2xl border-4 rounded-2xl m-5 p-5'
        placeholder='Enter Task'
        value = {task}
        onChange={(e)=>{
          settask(e.target.value)
        }}
      />
      <input type='text' className='text-2xl border-4 rounded-2xl m-5 p-5'
        placeholder='Enter Description'
        value = {desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }}
      />
      <button className='bg-emerald-50 text-black border-2 rounded-2xl p-2'>Add Task</button>
    </form>
    </>
  )
}

export default page