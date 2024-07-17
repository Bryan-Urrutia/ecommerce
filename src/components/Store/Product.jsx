import React, { useContext } from 'react'
import Link from 'next/link'

import { BsPlus, BsEyeFill } from 'react-icons/bs'
import Image from 'next/image';
import { Button } from '../ui/button';
import { CartContext } from '../../contexts/CartContext';

const Product = ({ product }) => {
    const { id, image, category, title, price } = product;
    const { addToCart } = useContext(CartContext);
    return (
        <div>
            <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group trainsition'>
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='w-[200px] mx-auto flex justify-center items-center'>
                        <Image src={image} width={160} height={160} className='group-hover:scale-110 transition duration-300' alt='' priority />
                    </div>
                    <div className='absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 '>
                        <Button className='rounded-none p-0 w-12 h-12' onClick={() => { addToCart(product) }}>
                            <BsPlus className='text-3xl' />
                        </Button>
                        <Link href={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
                            <BsEyeFill />
                        </Link>
                    </div>
                </div>

            </div>
            <div>
                <div className='text-sm capitalize text-muted-foreground'>{category}</div>
                <Link href={`/product/${id}`} product={product}>
                    <h4 className='h4 mb-1'>{title}</h4>
                </Link>
                <p className='subtitle font-semibold'>$ {price}</p>
            </div>
        </div>
    )
}

export default Product