import React from 'react'

const Categories = ({category, setCategoryName}) => {
  return (
    <div>
      <h2 className='text-xl font-semibold font-serif'>Products Category</h2>
      <ul>
        {category.map((v,i)=>(
          <li onClick={()=>setCategoryName(v.name)} key={i} className='font-serif text-lg bg-slate-200 p-2 my-2 font-medium cursor-pointer'>{v.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
