"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";

import { v4 } from "uuid";

import Header from "@/app/(components)/Header";

type ProductFormData = {
    name: string;
    price: number;
    stockQuantity: number;
    rating: number;
};

type CreateProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (formData: ProductFormData) => void;
};

const CreateProductModal = ({
    isOpen,
    onClose,
    onCreate,
}: CreateProductModalProps) => {
    const [formData, setFormData] = useState({
        productId: v4(),
        name: "",
        price: 0,
        stockQuantity: 0,
        rating: 0,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]:
                name === "price" ||
                    name === "stockQuantity" ||
                    name === "rating"
                    ? parseFloat(value)
                    : value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onCreate(formData);
        onClose();
    };

    if (!isOpen) return null;

    const labelCssStyles =
        "block text-sm font-medium text-gray-700 dark:text-gray-200";

    const inputCssStyles =
        "block w-full mb-2 p-2 border-2 border-gray-300 dark:border-gray-600 rounded-md " +
        "bg-white dark:bg-gray-700 " +
        "text-gray-900 dark:text-white " +
        "placeholder-gray-400 dark:placeholder-gray-400 " +
        "focus:outline-none focus:ring-2 focus:ring-blue-500";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-y-auto px-4">

            <div className="relative w-full max-w-md p-5 border border-gray-200 dark:border-gray-700 shadow-lg rounded-md bg-white dark:bg-gray-800">

                <Header name="Create New Product" />

                <form onSubmit={handleSubmit} className="mt-5">

                    {/* PRODUCT NAME */}
                    <label
                        htmlFor="productName"
                        className={labelCssStyles}
                    >
                        Product Name
                    </label>

                    <input
                        id="productName"
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        value={formData.name}
                        className={inputCssStyles}
                        required
                    />

                    {/* PRICE */}
                    <label
                        htmlFor="productPrice"
                        className={labelCssStyles}
                    >
                        Price
                    </label>

                    <input
                        id="productPrice"
                        type="number"
                        name="price"
                        placeholder="Price"
                        onChange={handleChange}
                        value={formData.price}
                        className={inputCssStyles}
                        min="0"
                        required
                    />

                    {/* STOCK QUANTITY */}
                    <label
                        htmlFor="stockQuantity"
                        className={labelCssStyles}
                    >
                        Stock Quantity
                    </label>

                    <input
                        id="stockQuantity"
                        type="number"
                        name="stockQuantity"
                        placeholder="Stock Quantity"
                        onChange={handleChange}
                        value={formData.stockQuantity}
                        className={inputCssStyles}
                        min="0"
                        required
                    />

                    {/* RATING */}
                    <label
                        htmlFor="rating"
                        className={labelCssStyles}
                    >
                        Rating
                    </label>

                    <input
                        id="rating"
                        type="number"
                        name="rating"
                        placeholder="Rating"
                        onChange={handleChange}
                        value={formData.rating}
                        className={inputCssStyles}
                        min="0"
                        max="5"
                        step="0.1"
                        required
                    />

                    {/* CREATE ACTIONS */}
                    <div className="flex justify-end mt-5">

                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
                        >
                            Create
                        </button>

                        <button
                            onClick={onClose}
                            type="button"
                            className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700 transition-colors"
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
};

export default CreateProductModal;