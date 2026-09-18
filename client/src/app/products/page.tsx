"use client"
import { useGetProductsQuery } from '@/state/api'
import { PlusCircle, SearchIcon } from 'lucide-react'
import { useState } from 'react'
import Header from '../(components)/Header'
import Rating from '../(components)/Rating'

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

            <button className='flex items-center bg-blue hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded' onClick={() => setIsModalOpen(true)}>

                <PlusCircle className='w-5 h-5 mr-2 text-gray-200!' />


            </button>

        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg-grid-cols-3 lg:grid-cols-3 gap-10 justify-between'>


            {isLoading ? (<div>Loading...</div>) : (
                products?.map((product) => (
                    <div key={product.productId} className='border shadow rounded-md p-4 max-w-full w-ful mx:auto'>

                        <div className='flex flex-col items-center'>

                            img

                            <h3 className='text-lg font-semibold'>
                                {product.name}
                            </h3>
                            <p className='text-gray-8000'>${product.price.toFixed(2)}</p>
                            <div className='text-sm  mt-1'>

                                Stock:{product.stockQuantity}

                            </div>

                            {product.rating && (
                                <div className='flex items-center mt-2'>

                                    <Rating rating={product.rating} />

                                </div>
                            )}

                        </div>



                    </div>
                ))
            )}



        </div>

    </div>







}

export default Products