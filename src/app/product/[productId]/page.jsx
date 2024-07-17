'use client'
import Product from '@/components/Store/Product'
import React, { useContext } from 'react'
import { CartContext } from '@/contexts/CartContext'
import { ProductContext } from '@/contexts/ProductContext'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const page = () => {
  const { productId } = useParams();

  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => {
    return item.id === parseInt(productId);
  });

  if (!product) {
    return <section className='h-screen flex justify-center items-center'>Loading...</section>
  }

  const { title, price, description, image } = product;

  console.log(product);
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row items-center'>
          <div className='flex flex-1 justify-center items-center mb:8 lg:mb-0'>
            <img src={image} className='max-w-[200px] lg:max-w-sm'></img>
          </div>
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto'>{title}</h1>
            <div className="text-xl text-red-500 font-medium mb-6">$ {price}</div>
            <p className='mb-8 subtitle'>{description}</p>
            <Button onClick={() => { addToCart(product, productId) }} className="bg-black text-white text-[17px] rounded-none dark:bg-primary dark:hover:bg-cyan-500 dark:hover:text-black">Añadir al carrito</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page