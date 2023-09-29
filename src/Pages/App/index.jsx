import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/navbar'
import './App.css'

const AppRouters = () => {
  let router = useRoutes([
    {path: '/', element:<Home />},
    {path: '/my-account', element:<MyAccount />},
    {path: '/my-order', element:<MyOrder />},
    {path: '/my-orders', element:<MyOrders />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/*', element:<NotFound />},
  ])

  return router
}


function App() {

  return (
    <BrowserRouter>
     <AppRouters />
     <Navbar />
    </BrowserRouter>
    
  )
}

export default App
