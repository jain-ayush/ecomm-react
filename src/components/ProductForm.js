import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import Button from './Button';
import productService from '../services/productService';
import { categoryList } from '../store/categorySlice';
import { useDispatch, useSelector } from 'react-redux';
const ProductForm = () => {

    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    let categories = useSelector((state) => state.categoryList.data)
    // console.log('categoriescategoriescategories',categories); //log 4 times manoj

    useEffect(() => {
        productService.getCategories()
            .then((category) => dispatch(categoryList(category.data)))

    }, [])

    const submit = (data) => {
        data.images = "https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY"
        console.log(data);

        productService.addProduct(data)
            .then((product) => console.log('product added', product)
            )
    }
    return (
        <div>
            <form className="w-full max-w-lg mx-8 my-8 m-auto" onSubmit={handleSubmit(submit)}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Product Id
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Product Id"
                            {...register("product_id", {
                                required: true
                            })}
                        />
                        <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Product Title
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Product Title"
                            {...register("title", {
                                required: true
                            })}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                            Product Price
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Product Price"
                            {...register("price", {
                                required: true
                            })}
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Product Description
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Product Quantity"
                            {...register("quantity", {
                                required: true
                            })}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">

                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                            State
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
                                {...register("category", {
                                    required: true
                                })}
                            >
                                <option>Select Category</option>
                                {categories?.map((category) => (
                                    <option key={category.id} value={category.name}>{category.name}</option>
                                ))}


                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                            Product Description
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Product Description"
                            {...register("description", {
                                required: true
                            })}
                        />
                    </div>
                </div>
                <Button
                    type='submit'
                    className="flex bg-indigo-600 py-1.5 rounded-md justify-center w-full"
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default ProductForm
