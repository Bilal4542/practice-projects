import Navbar from "./Components/Navbar"
import {Outlet} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from "./redux/store"

function App() {

  return (
    <Provider store={store}>
      <div className="max-w-screen-xl px-2 mx-auto">
    <Navbar/>
    <main className="mt-8 min-h-screen">
    <Outlet/>
    </main>
    <footer>Footer</footer>
    </div>
    </Provider>
  )
}

export default App
