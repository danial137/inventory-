"use client"
import React, { FormEvent, useState } from 'react'
import { v4 } from 'uuid'
import Header from '../(components)/Header';


type ProductFormData = {
    name: string;
    price: number;
    stockQuantity: number;
    rating: number
}

type CreateProductModalProps = {

    isOpen: boolean;
    onClose: () => void;
    onCreate: (FormData: ProductFormData) => void

}

const CreateProductModal = ({ isOpen, onClose, onCreate }: CreateProductModalProps) => {
    const [formData, setFormData] = useState({
        productId: v4(),
        name: "",
        price: 0,
        stockQuantity: 0,
        rating: 0
    });


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        onCreate(formData)
        onClose()

    }

    if (!isOpen) return null
    return (
        <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20'>

            <div className='relative top-20 mx-auto border w-96 shadow-lg rounded-md bg-white'>

                <Header name="Create New Product" />


                <form onSubmit={handleSubmit}>
                    <label htmlFor="productname" className='block text-sm font-medium text-gray-700'>
                        Product Name
                    </label>
                </form>


            </div>

        </div>
    )

}

export default CreateProductModal