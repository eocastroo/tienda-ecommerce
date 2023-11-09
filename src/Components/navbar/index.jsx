import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'
    return(
        <nav className = 'flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
         <ul className =' flex items-center gap-4'> 
            <li className='font-semibold text-lg'>
                <NavLink 
                to='/'onClick={() => context.setSearchByCategory()}
                >
                   Shopi
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/'
                onClick={() => context.setSearchByCategory()}
                className={({ isActive })=>
                isActive ? activeStyle: undefined
            }>
                   All
                </NavLink>
            </li>
            <li>
                <NavLink 
                to= '/clothes'
                onClick={() => context.setSearchByCategory('clothes')}
                className={({ isActive })=>
                isActive ? activeStyle: undefined
            }>
                   Clothes
                </NavLink>
            </li>
            <li>
                <NavLink 
                to= '/electronics'
                onClick={() => context.setSearchByCategory('electronics')}
                className={({ isActive })=>
                isActive ? activeStyle: undefined
            }>
                   Electronics
                </NavLink>
            </li>
            <li>
                <NavLink 
                to= '/furnitures'
                onClick={() => context.setSearchByCategory('furnitures')}
                className={({ isActive })=>
                isActive ? activeStyle: undefined
            }>
                   Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink 
                to= '/toys'
                onClick={() => context.setSearchByCategory('toys')}
                className={({ isActive })=>
                isActive ? activeStyle: undefined
            }>
                   Toys
                </NavLink>
            </li>
            <li>
                <NavLink 
                to= '/other'
                onClick={() => context.setSearchByCategory('other')}
                className={({ isActive })=>
                isActive ? activeStyle: undefined
            }>
                Other
                </NavLink>
            </li>
         </ul>
         <ul className = 'flex items-center gap-3'>
            <li className ='text-black/70'>
                   marvin1186@hotmail.com
            </li>
            <li>
                <NavLink 
                to= '/my-orders'
                className={({ isActive })=>
                isActive ? activeStyle: undefined
            }>
                   My Orders 
                </NavLink>
            </li>
            <li>
                <NavLink 
                to= '/my-account'
                className={({ isActive })=>
                isActive ? activeStyle: undefined
            }>
                   My Account 
                </NavLink>
            </li>
            <li>
                <NavLink 
                to= '/sign-in'
                className={({ isActive })=>
                isActive ? activeStyle: undefined
            }>
                   Sign in
                </NavLink>
            </li>
            <li className='flex items-center'>
                <ShoppingCartIcon className='h-6 w-6 text-black' ></ShoppingCartIcon>
                <div>
                {context.cartProducts.length}
                </div>
                
            </li>
         </ul>
        </nav>



    )
}

export default Navbar