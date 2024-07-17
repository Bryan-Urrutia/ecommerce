import { CartContext } from '../../contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'
import { IoMdAdd, IoMdClose, IoMdRemove, ioMdClose } from 'react-icons/io';

const CartItem = ({ item }) => {
    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
    const { id, title, image, price, amount } = item;
    return (
        <div className='flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500'>
            <div className='w-full min-h-[150px] flex items-center gap-x-4'>
                <Link href={`/product/${id}`} className='max-w-[80px] mx-auto flex justify-center items-center'>
                    <Image src={image} width={160} height={160} className='group-hover:scale-110 transition duration-300' alt='' priority />
                </Link>
                <div className='w-full flex flex-col'>
                    <div className='flex justify-between mb-2'>
                        {/* title */}
                        <Link href={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>{title}</Link>
                        {/* removeicon */}
                        <div className='text-xl cursor-pointer' onClick={() => { removeFromCart(id); }}>
                            <IoMdClose className='text-primary hover:text-red-500 transition' />
                        </div>
                    </div>
                    <div className='bg-ping-200 flex gap-x-2 h-[36px] text-sm'>
                        <div className='flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium'>
                            <div className='flex-1 h-full flex justify-center items-center cursor-pointer' onClick={() => { decreaseAmount(id); }}>
                                <IoMdRemove />
                            </div>
                            <div className='h-full flex justify-center items-center px-2'>{amount}</div>
                            <div className='flex-1 h-full flex justify-center items-center cursor-pointer' onClick={() => { increaseAmount(id); }}>
                                <IoMdAdd />
                            </div>
                        </div>
                        <div className='flex-1 flex items-center justify-around'>$ {price}</div>
                        <div className='flex-1 flex justify-end items-center text-primary font-medium'>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem