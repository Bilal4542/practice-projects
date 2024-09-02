import { useEffect, useState } from 'react'
import React  from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import AOS from 'aos'
import 'aos/dist/aos.css'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import CarList from './Components/CarList/CarList'
import Testimonials from './Components/Testimonials/Testimonials'
import AppStoreBanner from './Components/AppStoreBanner/AppStoreBanner'


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

  // AOS Initialization *****Animation***
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100
    });
    AOS.refresh();
  }, [])
  return (
    <div className='bg-white dark:bg-black dark:text-white'>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero theme={theme}/>
      <About/>
      <Services/>
      <CarList/>
      <Testimonials/>
      <AppStoreBanner/>
    </div>
  )
}

export default App
