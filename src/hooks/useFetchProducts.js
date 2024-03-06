import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../store/productsSlice"

const useFetchProducts = () => {
  const dispatch = useDispatch()
  const allProducts = useSelector((state) => state.products.productsList)
  useEffect(() => {
    if(allProducts.length === 0) {
      dispatch(getProducts())
    }
  }, [dispatch, allProducts])

  return allProducts;
}

export default useFetchProducts