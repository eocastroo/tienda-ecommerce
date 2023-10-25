import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'
    return(
        <nav className = 'flex justify-between items-center fixed z-10 top-0 w-full py-5 px8 text-sm font-light '>
         <ul className ='flex items-center gap-3'> 
            <li className='font-semibold text-lg'>
                <NavLink to='/'>
                   Shopi
                </NavLink>
            </li>
            <li>
                <NavLink 
                to='/'
                className={({ isActive })=>
                isActive ? activeStyle: undefined
            }>
                   All
                </NavLink>
            </li>
            <li>
                <NavLink 
                to= '/clothes'
                className={({ isActive })=>
                isActive ? activeStyle: undefined
            }>
                   Clothes
                </NavLink>
            </li>
            <li>
                <NavLink 
                to= '/electromics'
                className={({ isActive })=>
                isActive ? activeStyle: undefined
            }>
                   Electromics
                </NavLink>
            </li>
            <li>
                <NavLink 
                to= '/furnitures'
                className={({ isActive })=>
                isActive ? activeStyle: undefined
            }>
                   Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink 
                to= '/toys'
                className={({ isActive })=>
                isActive ? activeStyle: undefined
            }>
                   Toys
                </NavLink>
            </li>
            <li>
                <NavLink 
                to= '/other'
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
                {context.count}
                </div>
                
            </li>
         </ul>
        </nav>



    )
}

export default Navbar