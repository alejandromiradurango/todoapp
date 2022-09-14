import React from 'react'
import {AiOutlineCheckCircle, AiFillCheckCircle} from 'react-icons/ai'
import {FaTrashAlt} from 'react-icons/fa'
import Swal from 'sweetalert2'
import { useStateContext } from '../contexts/ContextApp'

const Task = ({task, deleteTask, toggleTask}) => (
    <div className='w-[100%] my-2 rounded-xl flex hover:bg-softDark/[.18] bg-softDark/10 justify-between items-center font-primary p-4' key={task.id}>
        <h1 className={`${task.finish && 'line-through text-dark/70 dark:text-light/70'} text-dark dark:text-light`}>
            {task.description}
        </h1>
        <div className='flex justify-center gap-6 text-dark dark:text-light'>
            <button
                onClick={() => deleteTask(task.id)}
                className='hover:text-red-500 text-xl transition-all'
            >
                <FaTrashAlt />
            </button>
            <button
                onClick={() => toggleTask(task.id)}
                className={`${task.finish && 'text-green-500'} hover:text-green-500 text-xl transition-all`}
            >
                {task.finish ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
            </button>
        </div>
    </div>
)

const Tasks = () => {

  const {tasks, setTasks} = useStateContext();

  const deleteTask = id => {
    Swal.fire({
        title: 'Are you sure to eliminate this task?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        // confirmButtonColor: '#3085d6',
        // cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        
      }).then((result) => {
        if (result.isConfirmed) {
          const updatedTasks = tasks.filter(task => task.id !== id);
          localStorage.setItem('tasks', JSON.stringify(updatedTasks));
          setTasks(updatedTasks);
          setNoTasks(updatedTasks);
          Swal.fire(
            'Deleted!',
            'Your task has been deleted.',
            'success'
          )
        }
      })
  }

  const toggleTask = id => {
    const newTasks = tasks.map(task => task.id === id ? {...task, finish: !task.finish} : task);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setTasks(newTasks);
  }


  return (
    <div className="h-auto max-h-[500px] ss:max-h-[300px] hover:overflow-auto overflow-hidden bg-softLight dark:bg-dark rounded-lg px-2 mt-3">
        {tasks !== null ? tasks.map(task => (
            <Task task={task} deleteTask={deleteTask} toggleTask={toggleTask}/>
        )) : <h1 className="font-primary text-2xl text-center text-dark dark:text-light uppercase py-4 font-bold">No hay tareas</h1>}
        {tasks && tasks.length === 0 && <h1 className="font-primary text-2xl text-center text-dark dark:text-light uppercase py-4 font-bold">No hay tareas</h1>}
    </div>
  )
}

export default Tasks