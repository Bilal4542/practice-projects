import React from 'react'
import Banner from './Banner'
import PostCards from '../Blogs/PostCards'
import Category from './Category'

const Home = () => {
  return (
    <div className='mt-10'>
      <Banner/>
      <div className='block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10'>
      <PostCards/>
      <Category/>
      </div>
    </div>
  )
}

export default Home
