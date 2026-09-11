import { useGetDashboardMetricsQuery } from "@/state/api";

import { ShoppingBag } from "lucide-react";

import React from "react";

import Rating from "../(components)/Rating";

const CardPopularProducts = () => {
    const { data: DashboardMetrics, isLoading } =
        useGetDashboardMetricsQuery();

    return (
        <div className="row-span-3 xl:row-span-6 bg-white dark:bg-gray-800 shadow-md rounded-2xl pb-16 text-gray-900 dark:text-white">
            {isLoading ? (
                <div className="m-5">
                    Loading...
                </div>
            ) : (
                <>
                    <h3 className="text-lg font-semibold px-7 pt-5 pb-2">
                        Popular products
                    </h3>

                    <hr className="border-gray-200 dark:border-gray-700" />

                    <div className="overflow-auto h-full">
                        {DashboardMetrics?.popularProducts.map((products) => (
                            <div
                                key={products.productId}
                                className="flex items-center justify-between gap-3 px-5 py-7 border-b border-gray-200 dark:border-gray-700"
                            >
                                <div className="flex items-center gap-3">
                                    <div>
                                        img
                                    </div>

                                    <div className="flex flex-col justify-between gap-1">
                                        <div className="font-bold text-gray-700 dark:text-gray-200">
                                            {products.name}
                                        </div>

                                        <div className="flex text-sm items-center">
                                            <span className="font-bold text-blue-500 text-xs">
                                                ${products.price}
                                            </span>

                                            <span className="mx-2 text-gray-400 dark:text-gray-500">
                                                |
                                            </span>

                                            <Rating
                                                rating={products.rating || 0}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="text-xs flex items-center text-gray-700 dark:text-gray-300">
                                    <button className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 mr-2">
                                        <ShoppingBag className="w-4 h-4" />
                                    </button>

                                    {Math.round(
                                        products.stockQuantity / 1000
                                    )}
                                    k Sold
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default CardPopularProducts;