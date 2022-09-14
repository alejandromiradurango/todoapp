import React, { useEffect } from 'react'
import {Backdrop, Header, AddTask, Tasks} from './components/index'
import { themeCheck } from './utils'

const App = () => {

  useEffect(() => {
    themeCheck();
  }, [])
  

  return (
    <div>
      <Backdrop />
      <div className='flex justify-center items-center h-screen w-screen p-4'>
        <div id="container" className='rounded-lg relative z-[2] transition-all max-w-[800px] max-h-[90vh] w-[100%] h-[100%]'>
          <Header />
          <div className='bg-dimLight dark:bg-dimDark rounded-lg p-4'>
            <AddTask />
            <Tasks />
          </div>
        </div>

      </div>
    </div>
  )
}

export default App