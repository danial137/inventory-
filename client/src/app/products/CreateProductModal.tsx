"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
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

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]:
                name === "price" || name === "stockQuantity" || name === "rating"
                    ? parseFloat(value)
                    : value
        })

    }

    if (!isOpen) return null

    const labelCssStyle = "block text-sm font-medium text-gray-700";
    const inputCssStyle = "block w-full mb-2 p-2 border-gray-500 border-2 rounded-md"

    return (
        <div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20'>

            <div className='relative top-20 mx-auto border w-96 shadow-lg rounded-md bg-white'>

                <Header name="Create New Product" />


                <form onSubmit={handleSubmit}>
                    <label htmlFor="productname" className={labelCssStyle}>
                        Product Name
                    </label>
                    <input type='text' name='name' onChange={handleChange} value={formData.name} className={inputCssStyle} required />
                </form>


            </div>

        </div>
    )

}

export default CreateProductModal