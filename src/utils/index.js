/**
 * This function calculates total  price fo a new order.
 * @param {Array} products 
 * @returns {numer} // total price
 */

export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)
    return sum
}