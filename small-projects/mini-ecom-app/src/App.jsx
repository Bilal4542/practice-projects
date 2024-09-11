import React from 'react'
import Categories from './components/Categories'

const App = () => {
  return (
    <div className='py-10'>
      <div className="max-w-[1320px] mx-auto">
        <h1 className='font-bold font-serif text-3xl mb-8 text-center'>Our Products</h1>
        <div className="grid grid-cols-[30%_auto] gap-5">
          <div className="">
            <Categories/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
