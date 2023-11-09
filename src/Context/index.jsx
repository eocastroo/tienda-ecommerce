
import { createContext, useState, useEffect } from 'react'

 export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

    //Shopping Cart . Increment quantity
    const [count, setCount] = useState(0)
    //Product Detail  Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false) 

    // Checkout Side Menu . Open/cLOSE
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false) 
    
    //Product Detail Show product
     const [productToShow, setProductToShow ] = useState({})

     // Shopping Cart . Add products to cart
     const [cartProducts, setCartProduct] = useState([])

    // Shopping Cart. Order
    const [ order, setOrder] = useState([])

    // Get Products
    const [items, setItems] = useState(null)

    //Filter
    const [filteredItems, setFilteredItems] = useState(null)

    //Filter Por Categorys

    const [searchByCategory, setSearchByCategory] = useState(null)

    // Get products bi Title 

    const [searchByTitle, setSearchByTitle] = useState(null)
   

        //function para consumir la API
     useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
         .then(response =>  response.json())
         .then(data => setItems(data))
     },[])
     
     // function por title
     const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes
        (searchByTitle.toLowerCase()))
     }

          // function por category

    const filteredItemsByCategory = (items, searchByCategory) => {
            return items?.filter(item => item.category.name.toLowerCase().includes
            (searchByCategory.toLowerCase()))
         }

     // function de type de filter // Por category and title

     const filterBy = (searhType, items, searchByTitle, searchByCategory) => {
        if(searhType === 'BY_TITLE'){
           return filteredItemsByTitle(items, searchByTitle)
        }

        if (searhType === 'BY_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory)
         }

         if (searhType === 'BY_TITLE_AND_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes
            (searchByTitle.toLowerCase()))
         }

         if (!searhType){
            return items
         }
     } 

     useEffect(() =>{
        if (searchByTitle && searchByCategory ) setFilteredItems(filterBy ('BY_TITLE_AND_CATEGORY', items, searchByTitle,searchByCategory ))
        if (searchByTitle && !searchByCategory ) setFilteredItems(filterBy ('BY_TITLE', items, searchByTitle,searchByCategory ))
        if (!searchByTitle && searchByCategory ) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle,searchByCategory ))
        if (!searchByTitle && !searchByCategory ) setFilteredItems(filterBy(null, items, searchByTitle,searchByCategory ))


     }, [items, searchByTitle, searchByCategory])

    
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProduct,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory,


        }}>
          {children}
        </ShoppingCartContext.Provider>   
    )

}
