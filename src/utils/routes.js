let array = [{price: 1}, {price: 2}]
array = array.filter(obj => obj.price === 1)
console.log(array);

const ROUTES = {
    MAINPAGE: '/',
    CATEGORIES: '/categories',
    CATEGORY: '/categories/:title/:id',
    ALLPRODUCTS: '/products',
    PRODUCT: '/products/:id',
    ALLSALES: '/sales',
    CART: '/cart'
}

export default ROUTES