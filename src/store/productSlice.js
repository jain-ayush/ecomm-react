import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import productService from "../services/productService"

export const searchProducts = createAsyncThunk(
    'product/searchProducts',
    async (query, {signal, rejectWithValue}) => {
        try {
            const res = await productService.searchProducts(query)
            return res.data
        }
        catch (err) {
            return rejectWithValue(err?.message || 'Search failed')
        }
    }
)

const initialState = {
    status: 'failed',
    message: '',
    data: null,
    searchResults: [],
    searchLoading: false,
    searchError: null
}

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        getProductList:(state, action) => {            
            state.status = action.payload.status;
            state.message = action.payload.message;
            state.data = action.payload.data?.products || [];
        } ,
        getProductDetails:(state, action) => {

        },
        // searchProduct:(state, action) => {
            
        // }
    },
    extraReducers: (builder) => {
        builder
        .addCase(searchProducts.pending, (state) => {
            state.searchLoading = true;
            state.searchError = null;
        })
        .addCase(searchProducts.fulfilled, (state, action) => {
            state.searchLoading = false;
            state.searchResults = action.payload.data?.products || [];
        })
        .addCase(searchProducts.rejected, (state, action) => {
            state.searchLoading = false;
            state.searchError = action.payload || action.error?.message ||'Search failed';
        })
    }
})

export const { getProductList } = productSlice.actions
export default productSlice.reducer