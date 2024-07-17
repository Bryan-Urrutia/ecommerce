import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { CartContext } from '../../contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
import { useContext } from 'react';
import CartItem from './CartItem';
import { Button } from '../ui/button';
import { BsFillTrash2Fill } from 'react-icons/bs';

const SidebarCart = () => {
    const { cart, clearCart, itemAmount, total } = useContext(CartContext);

    return <Sheet>
        <SheetTrigger asChild>
            <div className='relative cursor-pointer'>
                <ShoppingCart />
                <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12-px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
                    {itemAmount}
                </div>
            </div>
        </SheetTrigger>
        <SheetContent>
            <div className='flex flex-col items-center h-full py-3'>
                <h3 className='h4 font-semibold w-full text-center'>Carrito de compras ({itemAmount})</h3>
                <div className='flex flex-1 flex-col justify-start items-start gap-5 w-full p-0 overflow-auto'>
                    {cart.map(item => {
                        return <CartItem key={item} item={item} />
                    })}
                    <div className='flex flex-col gap-y-5'></div>
                </div>
                <div className='w-full flex flex-col gap-y-3 py-4 mt-4 justify-end'>
                    <div className='flex justify-between items-center'>
                        <span>Total : $ {parseFloat(total).toFixed(2)}</span>
                        <div>
                            <Button variant="destructive" onClick={clearCart}>
                                <BsFillTrash2Fill />
                            </Button>
                        </div>
                    </div>
                    <Button className="bg-gray-500 text-white rounded-none hover:bg-gray-500">Ver carrito</Button>
                    <Button className="bg-black text-white rounded-none hover:bg-black dark:bg-gray-800">Ir a pagar</Button>
                </div>
            </div>
        </SheetContent>
    </Sheet>
}

export default SidebarCart