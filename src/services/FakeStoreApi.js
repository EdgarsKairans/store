import { useHttp } from "../hooks/http.hooks";

const  useFakeStoreApi = () => { 
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'https://fakestoreapi.com/';


    const getAllProducts = async () => {
        const res = await request (`${_apiBase}products`);
        console.log("Server!!!!");
        return res;
    }

    const getSingleProduct = async (id) => {
        const res = await request(`${_apiBase}products/${id}`);
        return res;
    }

    const getProductsFromCategory = async (categoryName) => {
        const res = await request(`${_apiBase}products/category/${categoryName}`);
        console.log("Server!!!!");
        return res;
    }


    return {loading, error, clearError, getAllProducts, getProductsFromCategory, getSingleProduct}

}
export default useFakeStoreApi;