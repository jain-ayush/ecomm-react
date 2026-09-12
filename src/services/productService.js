import axios from "axios"
import config from "../config/config"

const productService = {

    getProducts: async (req, res) => {
        let token = localStorage.getItem("token")
        const products = await axios.get(`${config.apiBaseUrl}/product/products`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        return products
    },

    getById: async(id) => {
        let token = localStorage.getItem("token")
        const product = axios.get(`${config.apiBaseUrl}/product/products/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        
        return product
    },

    getCategories: async() => {
        let token = localStorage.getItem("token")
        const categories = axios.get(`${config.apiBaseUrl}/product/category`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        return categories
    },

    addProduct: async(data) => {
        let token = localStorage.getItem("token")
        const categories = axios.post(`${config.apiBaseUrl}/products`, 
            data,
            {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
        return categories
    },

    searchProducts: async (query) => {
        let token = localStorage.getItem("token")
        const products = await axios.get(`${config.apiBaseUrl}/product/search-products`, {
            params: {
                search: query
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })        
        return products
    }
}
export default productService