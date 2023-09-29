import { NavLink } from "react-router-dom"

const Navbar = () => {
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
            <li className ='text-black/50'>
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
            <li>
                🎪
            </li>
         </ul>
        </nav>



    )
}

export default Navbar