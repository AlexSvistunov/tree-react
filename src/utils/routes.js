
const ROUTES = {
    MAINPAGE: '/',
    CATEGORIES: '/categories',
    CATEGORY: '/categories/:title/:id',
    ALLPRODUCTS: '/products',
    PRODUCT: '/products/:id',
    ALLSALES: '/sales',
    CART: '/cart'
}

const arrayOfObjects = [
    {amount: 1, id: 1},
    {amount: 1, id: 2},
    {amount: 2, id: 3},
    {amount: 3, id: 4},
    {amount: 1, id: 5},
]


console.log(arrayOfObjects)

const onlyAmount = [...arrayOfObjects.map(el => el['amount'])]
console.log(onlyAmount)

export default ROUTES

