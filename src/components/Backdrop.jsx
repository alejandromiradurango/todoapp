import React from 'react'
import { useStateContext } from '../contexts/ContextApp'

const Backdrop = () => {

  const {theme} = useStateContext();

  return (
    <div id="bgImg" className="absolute z-1 top-0 right-0 w-[100vw] h-[22em] ss:h-[17em] overflow-hidden shadow-xl">
        <img src={theme === 'light' ? 'https://p4.wallpaperbetter.com/wallpaper/606/80/969/light-background-color-wallpaper-preview.jpg' : 'https://cdn.wallpapersafari.com/96/45/bWANdI.jpg'} alt="Fondo" className="object-cover w-[100%] h-[100%] absolute opacity-50" />
    </div>
  )
}

export default Backdrop