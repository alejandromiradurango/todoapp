import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    theme: localStorage.getItem('theme'),
    tasks: JSON.parse(localStorage.getItem('tasks'))
}

export const ContextApp = ({ children }) => {

    const [theme, setTheme] = useState(initialState.theme);
    const [tasks, setTasks] = useState(initialState.tasks);

    return (
        <StateContext.Provider
            value={{
                theme,
                setTheme,
                tasks,
                setTasks
            }}
        >
            {children}
        </StateContext.Provider>
    )

}

export const useStateContext = () => useContext(StateContext);