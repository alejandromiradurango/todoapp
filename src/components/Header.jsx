import React from 'react'
import { useStateContext } from '../contexts/ContextApp'
import {BsSun, BsMoonFill} from 'react-icons/bs'
import { themeSwitch } from '../utils';


const Header = () => {

  const {theme, setTheme} = useStateContext();

  return (
    <div className="flex justify-between items-center w-[100%] py-6">
        <h1 className="text-dark dark:text-light uppercase text-5xl font-bold font-primary">To Do</h1>
        <button 
        type="button" 
        class="text-dark dark:text-light text-3xl" 
        onClick={() => {
            themeSwitch();
            setTheme(localStorage.getItem('theme'))
        }}
        >
            {theme === "light" ? <BsMoonFill /> : <BsSun />}
        </button>
    </div>
  )
}

export default Header