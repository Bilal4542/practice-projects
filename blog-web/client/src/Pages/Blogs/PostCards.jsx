import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchBlogs } from '../../redux/features/blogs/blogsSlice';
import Card from './Card';

const PostCards = () => {
  const dispatch = useDispatch();
  const {blogs, isLoading, isError, error} = useSelector(state => state.blogs)
  // dispatch action to get blogs
  useEffect(()=>{
    dispatch(fetchBlogs())
  },[dispatch])
  console.log(blogs)

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;
  const startIndex = ((currentPage - 1) * blogsPerPage);
  const endIndex = currentPage * blogsPerPage;
  const paginatedBlogs = blogs.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }
  return (
    <div className=''>
      <div className="w-full">
          {
            !isError && !isLoading && paginatedBlogs?.length > 0 ? (<div>
              {
                paginatedBlogs.map((blog, index) => ( <Card blog={blog} key={index} /> ))
              }
              <div className='space-x-3'>
                <button className='px-2 text-white bg-red-500 rounded' onClick={()=>handlePageChange(currentPage-1)} disabled={currentPage===1}>Previous</button>
                <span>{currentPage}</span>
                <button className='px-2 text-white bg-indigo-500 rounded' onClick={()=>handlePageChange(currentPage+1)}>Next</button>
              </div>
            </div>) : (<div>No Blogs Found</div>)
          }

          {/* <div className="rounded w-full lg:flex mb-10">
            <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")' }} title="deit is very important">
            </div>
            <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
              <div>
                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                  Integer commodo, sapien ut vulputate viverra
                </div>
                <p className="text-gray-700 text-base">
                  Nam malesuada aliquet metus, ac commodo augue mollis sit amet. Nam bibendum risus sit amet metus semper consectetur. Proin consequat ullamcorper eleifend. Nam bibendum risus sit amet metus semper consectetur.
                </p>
              </div>
              <div className="flex mt-3">
                <img src="https://randomuser.me/api/portraits/women/54.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover" alt="Author" />
                <div>
                  <p className="font-semibold text-gray-700 text-sm capitalize"> Serenity Hughes </p>
                  <p className="text-gray-600 text-xs"> 14 Aug </p>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="rounded w-full lg:flex mb-10">
            <div className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80")' }} title="deit is very important">
            </div>
            <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
              <div>
                <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                  Suspendisse varius justo eu risus laoreet fermentum non aliquam dolor
                </div>
                <p className="text-gray-700 text-base">
                  Mauris porttitor, velit at tempus vulputate, odio turpis facilisis dui, vitae eleifend odio ipsum at odio. Phasellus luctus scelerisque felis eget suscipit.
                </p>
              </div>
              <div className="flex mt-3">
                <img src="https://randomuser.me/api/portraits/men/86.jpg"
                  className="h-10 w-10 rounded-full mr-2 object-cover" alt="Author" />
                <div>
                  <p className="font-semibold text-gray-700 text-sm capitalize"> eduard franz </p>
                  <p className="text-gray-600 text-xs"> 14 Aug </p>
                </div>
              </div>
            </div>
          </div> */}

        </div>
    </div>
  )
}

export default PostCards
