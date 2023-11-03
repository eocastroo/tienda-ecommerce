
const OrdersCard = props => {

    const {totalPrice, totalProducts} = props

    return(

        <div className="flex justify-between items-center mb-3 border border-black">
            <p>
                <span> 02.11.23</span>
                <span> {totalPrice}</span>
                <span> {totalProducts}</span>
            </p>
        </div>
    )
}

export default OrdersCard