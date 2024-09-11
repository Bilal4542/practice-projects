import React, { useEffect, useState } from 'react'
import Categories from './components/Categories'
import ProductItem from './components/ProductItem'
import axios from 'axios'

const App = () => {
  const [category,setCategory] = useState([])
  const [products,setProducts] = useState([])
  const [categoryName,setCategoryName] = useState('')
  const getCategory = () => {
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>res.data)
    .then((finalRes)=>{
      setCategory(finalRes)
    })
  }

  const getProducts = () => {
    axios.get('https://dummyjson.com/products')
    .then((productRes)=>productRes.data)
    .then((finalProductRes)=>{
      setProducts(finalProductRes.products)
    })
  }
  useEffect(()=>{
    getCategory();
    getProducts();
  }, [])
  useEffect(()=>{
    if(categoryName!==''){
      axios.get(`https://dummyjson.com/products/category/${categoryName}`)
    .then((productRes)=>productRes.data)
    .then((finalProductRes)=>{
      setProducts(finalProductRes.products)
    })
    }
  }, [categoryName])
  return (
    <div className='py-10'>
      <div className="max-w-[1320px] mx-auto">
        <h1 className='font-bold font-serif text-3xl mb-8 text-center'>Our Products</h1>
        <div className="grid grid-cols-[30%_auto] gap-5">
          <div className="">
            <Categories category={category} setCategoryName={setCategoryName}/>
          </div>
          <div className="">
            <div className="grid grid-cols-3 gap-4">
              {products.map((pro,index) => (
                <ProductItem key={index} pro={pro}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
