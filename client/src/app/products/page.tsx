"use client"
import { useGetProductsQuery } from '@/state/api'
import { SearchIcon } from 'lucide-react'
import { useState } from 'react'
import Header from '../(components)/Header'

const Products = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false)

    const { data: products, isLoading, isError } = useGetProductsQuery(searchTerm)

    if (isLoading) {
        return <div className='py-4'>Loading...</div>
    }

    if (isError || !products) {
        return (
            <div className='text-center text-red-500 py-4'>
                Failed to fetch products
            </div>
        )
    }

    return <div className='mx-auto pb-5 w-full'>
        {/* search bar */}
        <div className='mb-6'>
            <div className='flex itesm-center border-2 border-gray-200 rounded lg:border-none'>
                <SearchIcon className='w-5 h-5 text-gray-500 m-2' />
                <input className='w-full lg:w-fit py-2 px-4 rounded bg-white' placeholder='Search Products...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
        </div>

        {/* HEADER BAR */}

        <div className='flex justify-between items-center mb-6'>

            <Header name='Products' />

            <button className='flex items-center bg-blue hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded'>


            </button>

        </div>

    </div>







}

export default Products