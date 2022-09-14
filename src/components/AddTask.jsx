import React from 'react'
import { useForm } from 'react-hook-form'
import shortid from 'shortid';
import { useStateContext } from '../contexts/ContextApp';
import {AiOutlinePlus} from 'react-icons/ai'

const AddTask = () => {

  const {register, handleSubmit, watch, formState: {errors}, reset} = useForm();
  const {setTasks} = useStateContext();

  const createTask = data => {
    const description = data.description
    const task = {
        id: shortid.generate(),
        description,
        finish: false
    }
    let localTasks = JSON.parse(localStorage.getItem('tasks'));
    if (localTasks !== null) {
       localTasks.push(task);
       localStorage.setItem('tasks', JSON.stringify(localTasks));
       setTasks(localTasks);
    } else {
       const arrayTask = [task];
       setTasks(arrayTask);
       localStorage.setItem('tasks', JSON.stringify(arrayTask));
    }
    reset();
  }

  return (
    <>
        <form 
            onSubmit={handleSubmit(createTask)}
            className="flex font-primary gap-6 bg-dark/10 dark:bg-light/10 p-4 rounded-lg"
        >
            <input 
                type="text" 
                name="addTask" 
                id="addTask" 
                className="w-[85%] rounded-lg px-4 shadow text-dark dark:text-light bg-light dark:bg-dark/50 focus:outline-none"
                placeholder='Add Task...'
                {...register("description", {
                    required: {
                        value: true,
                        message: "Por favor ingresa la descripción de la tarea."
                    }
                })}
            />
            {errors.description && <div className='absolute transition-all animate-fadeIn -top-1 ss:top-5 left-0 text-center bg-dark rounded-lg text-white w-[100%] text-lg p-5'>{errors.description.message}</div>}
            <button 
                type="submit" 
                className="flex justify-center p-3 ss:p-4 w-[15%] shadow rounded-lg text-dark dark:text-light cursor-pointer bg-softLight hover:bg-[#f0e067] dark:bg-softDark dark:hover:bg-[#5f1f9b] transition-all" 
            >
                <span class="ss:block hidden">Agregar</span>
                <span class="ss:hidden block text-xl"><AiOutlinePlus /></span>
            </button>
        </form>
    </>
  )
}

export default AddTask