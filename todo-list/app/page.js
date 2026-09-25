"use client"
import React, { use, useState } from 'react'

const page = () => {
  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e)=>{
    e.preventDefault()
    if (task.trim() === "") return;
    setMainTask([...mainTask, { id: Date.now(), task, desc }]);
    setTask("")
    setDesc("")
  }

  const deleteHandler = (id) => {
    setMainTask(mainTask.filter((t) => t.id !== id));
  };

  let renderTask = (
    <p className="text-[#8B92A0] text-lg py-10 text-center">
      Nothing here yet — add your first task above.
    </p>
  );

  if(mainTask.length>0){
    renderTask = mainTask.map((t,i) => {
      return (
        <li key={t.id} className='flex items-center justify-between gap-6 py-5 border-b border-[#2A2F38] last:border-none"'>
          <div className='flex flex-col gap-1'> 
            <h5 className='text-xl font-semibold text-[#E8E6E1]'>{t.task}</h5>
            {t.desc && <p className="text-sm text-[#8B92A0]">{t.desc}</p>}
          </div>
          <button onClick={()=> deleteHandler(t.id)} className='shrink-0 bg-transparent border border-[#C4695A] text-[#C4695A] px-4 py-2 rounded-lg font-medium hover:bg-[#C4695A] hover:text-[#14171C] transition-colors'>Delete</button>
        </li>
      );
    });
  };

  return (
    <div className="min-h-screen bg-[#14171C] text-[#E8E6E1]">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-10">My Todo List</h1>

        <form onSubmit={submitHandler} className="flex flex-col gap-4 mb-12">
          <input
            type="text"
            className="bg-[#1C2027] border border-[#2A2F38] rounded-lg px-4 py-3 text-[#E8E6E1] placeholder-[#8B92A0] focus:outline-none focus:border-[#D9A05B] transition-colors"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            type="text"
            className="bg-[#1C2027] border border-[#2A2F38] rounded-lg px-4 py-3 text-[#E8E6E1] placeholder-[#8B92A0] focus:outline-none focus:border-[#D9A05B] transition-colors"
            placeholder="Enter description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button
            type="submit"
            className="self-start bg-[#D9A05B] text-[#14171C] font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition"
          >
            Add Task
          </button>
        </form>

        <ul>{renderTask}</ul>
      </div>
    </div>
  )
};

export default page