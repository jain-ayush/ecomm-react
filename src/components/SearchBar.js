import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchProducts } from "../store/productSlice";

function SearchBar() {
    const [query, setQuery] = useState("")
    const dispatch = useDispatch()
    const debounceRef = useRef(null)

    useEffect(() => {
       const q = query.trim();
    //    if(q.length < 2) dispatch(clearSearchResults()) 
       clearTimeout(debounceRef.current)
       debounceRef.current = setTimeout(() => {
        console.log('searching for', q);
        dispatch(searchProducts(q))
       }, 2000)
    //    return () => clearTimeout(debounceRef.current)
    }, [query])
    
    return (
        <div className=" relative flex items-center  bg-white lg:w-1/2 w-full rounded-3xl">
            <input 
                className="w-full p-3.5 px-4 border-0 bg-transparent outline-none rounded text-navy-700"
                type="text" 
                placeholder="Search everything ..." 
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search Products ..."    
            />
            <button type="submit" className=" absolute  end-3  p-2.5 text-sm font-medium text-white  rounded-3xl  focus:outline-none focus:ring-blue-900 dark:bg-blue-900 dark:hover:bg-blue-900 dark:focus:ring-blue-900">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
    )
}

export default SearchBar
