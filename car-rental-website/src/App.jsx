import { useEffect, useState } from 'react'
import React  from 'react'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  // Dark Mood feature
  const [theme, setTheme] = React.useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  )
  const element = document.documentElement;
  useEffect(() => {
    if(theme === 'dark'){
      element.classList.add('dark');
      localStorage.setItem('theme','dark');
    }else{
      element.classList.remove('dark');
      localStorage.setItem('theme','light')
    }
  },[theme])
  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
