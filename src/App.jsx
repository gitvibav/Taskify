import Task from './components/Task';
import { useState, useEffect } from 'react';

const App = () => {

  const [inputValue, setInputValue] = useState('');
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      try {
        const parsed = JSON.parse(savedTasks);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (inputValue.trim()){
      const newTask = {
        completed: false,
        id: Date.now(),
        text: inputValue  
      }
      setInputValue('')
      setTasks([...tasks, newTask])
    }
  }

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h2 className="font-bold text-center text-amber-400 text-3xl mb-6">Taskify</h2>
       <div className="flex justify-center gap-4">
        <input 
        placeholder='Add a task'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className='border border-gray-300 w-[500px] rounded-md p-2 text-white'
        />
        <button onClick={addTask} className='text-white px-4 py-2 border border-black rounded-lg bg-amber-500'>Add Task</button>
       </div>
       <Task tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App