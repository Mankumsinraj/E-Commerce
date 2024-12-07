import React, { useState } from 'react'
import {CiSearch,CiShoppingCart} from 'react-icons/ci'
import watch from '../assets/images/pexels-castorlystock-3829441.jpg';
import glasses from '../assets/images/glasses.jpg';
import laptop from '../assets/images/laptop.jpg';
import keyboard from '../assets/images/keyboard.jpg';
import monitor from '../assets/images/moniter.jpg';
import mouse from '../assets/images/mouse.jpg';
import headphones from '../assets/images/headphone.jpg';
import adapter from '../assets/images/adapter.jpg';
import iphone from '../assets/images/iphone.jpg';
import MemoryCard from '../assets/images/MemoryCard.jpg';
import  bracelets from '../assets/images/bracelets.jpg';


let Products = [
  { 
    img: glasses,
    title: 'Glasses',
    description: ' rupess',
    price: 40,
    tags: ['accessory', 'fashion', 'glasses']
  },
  { 
    img: laptop,
    title: 'Laptop',
    description: ' rupess',
    price: 60000,
    tags: ['electronics', 'computing', 'laptop']
  },
  {
    img: keyboard,
    title: 'Keyboard',
    description: ' rupess',
    price: 40,
    tags: ['electronics', 'accessory', 'computing', 'keyboard']
  },
  {
    img: watch,
    title: 'Watch',
    description: ' rupess',
    price: 490,
    tags: ['fashion', 'accessory', 'watches']
  },
  {
    img: monitor,
    title: 'Monitor',
    description: ' rupess',
    price: 100000,
    tags: ['electronics', 'computing', 'display', 'monitor']
  },
  {
    img: mouse,
    title: 'Mouse',
    description: ' rupess',
    price: 799,
    tags: ['electronics', 'computing', 'accessory', 'mouse']
  },
  {
    img: headphones,
    title: 'Headphone',
    description: ' rupess',
    price: 1299,
    tags: ['electronics', 'audio', 'accessory', 'headphone']
  },
  {
    img: adapter,
    title: 'Adapter',
    description: ' rupess',
    price: 1399,
    tags: ['electronics', 'accessory', 'adapter']
  },
  {
    img: MemoryCard,
    title: 'MemoryCard',
    description: ' rupess',
    price: 599,
    tags: ['electronics', 'storage', 'accessory', 'memorycard']
  },
  {
    img: bracelets,
    title: 'Bracelets',
    description: ' rupess',
    price: 1000,
    tags: ['accessory', 'fashion','bracelets']
  },
  {
    img: iphone,
    title: 'Iphone',
    description: ' rupess',
    price: 1030000,
    tags: ['electronics', 'smartphone', 'luxury', 'iphone']
  }
];


const categories = [
  'watches',
  'laptop',
  'keyboard',
  'mouse',
  'monitor',
  'headphone',
  'iphone',
  'memorycard',
  'adapter',
  'bracelets',
  
];




const Main = () => {

  const [filterProducts,setfilterProducts] = useState(Products);
  const SearchHandler = (e) =>{
    const filterArray = Products.filter((Product) => Product.title.toLocaleLowerCase().includes(e.target.value))
    if(filterArray.length !== 0){
      setfilterProducts(filterArray);
    }
  }

  const handleCategoryClick = (category) => {
    const filterArray = Products.filter((Product) => Product.tags.includes(category.toLocaleLowerCase()))
    if(filterArray.length !== 0){
      setfilterProducts(filterArray);
    }
  };
  

  return (
    <div className="w-full relative">
    
    <div className="sticky top-0 z-10 bg-white shadow-md">
      
      <div className="header flex flex-wrap justify-between items-center p-4 md:p-6">
        <h1 className="text-2xl mx-12 md:text-3xl font-bold text-center md:text-left">Shop</h1>
        <div className="search flex items-center w-full md:w-auto px-3 py-2 bg-gray-100 rounded max-w-md mx-auto mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search product"
            className="bg-transparent outline-none w-full"
            onChange={SearchHandler}
          />
          <button onClick={() => SearchHandler()} className="ml-2">
            <CiSearch size={20} />
          </button>
        </div>
      </div>
  
      
      <div className="categories flex flex-wrap justify-center gap-x-4 md:gap-x-8 px-4 py-4 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-black text-white px-4 py-2 md:px-5 rounded-full shadow-lg cursor-pointer"
            onClick={() => handleCategoryClick(category)}
          >
            <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
          </div>
        ))}
      </div>
    </div>
  
  
    <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 p-4">
      {filterProducts &&
        filterProducts.map((product, idx) => (
          <div
            key={idx}
            className="product h-[300px] w-full max-w-xs bg-white shadow-lg p-4 border mx-auto"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-[60%] object-cover mb-4"
            />
            <div className="bg-gray-100 p-4 rounded-md">
              <h1 className="text-lg font-semibold">{product.title}</h1>
              <p className="text-sm text-gray-700">{product.description}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xl font-bold">{product.price}</p>
                <CiShoppingCart size={24} />
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
  
   
  )
}

export default Main