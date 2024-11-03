import Navbar from "./Components/Navbar"
import {Outlet} from 'react-router-dom'


function App() {

  return (
    <div className="max-w-screen-xl px-2 mx-auto">
    <Navbar/>
    <main className="mt-8 min-h-screen">
    <Outlet/>
    </main>
    <footer>Footer</footer>
    </div>
  )
}

export default App
