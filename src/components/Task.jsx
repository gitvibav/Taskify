import React from 'react'

const Task = ({tasks, setTasks}) => {
  return (
   <div className="m-4 flex justify-center">
        <ul className='w-[500px] text-white'>
            {tasks.map((task, index) => (
            <div key={task.id} className="flex gap-2">
                <li
                    key={index}
                    className="flex gap-2 items-center justify-between border border-violet-300 rounded-md p-2 w-full mb-2 text-white"
                >
                    <span>{index + 1}. {task.text}</span>
                </li>
                <button onClick={() => setTasks(tasks.filter((t) => t.id !== task.id))} className="m-4 p-2 border border-black bg-amber-500 rounded-lg">
                        ✔
                </button>
            </div>
        ))}
        </ul>
   </div>
  )
}

export default Task