import {motion} from 'motion/react'

function App() {

  return (
    <>
     <motion.div
     animate={{x:[0,800,800,0,0], y:[0,0,300,300,0], rotate:[0,360,0,-360,0]}} 
     transition={{duration:3, delay:1}} 
     className="bg-amber-300 w-3xs h-64 border-2"></motion.div>
    </>
  )
}

export default App
