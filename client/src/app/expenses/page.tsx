"use client"

import { useGetExpensesByCategoryQuery } from "@/state/api";
import { useMemo, useState } from "react"
import Header from "../(components)/Header";
import { ClassNames } from "@emotion/react";

const Expenses = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("ali");
    const [starDate, setStarData] = useState("");
    const [endData, setEndDate] = useState("")
    const { data: expensesData, isLoading, isError } = useGetExpensesByCategoryQuery();

    const expenses = useMemo(() => expensesData ?? [], [expensesData])

    const classNames = {
        label: "block text-sm font-medium"
    }

    if (isLoading) {
        return <div className="py-4">Loading... </div>
    }

    if (isError || !expensesData) {

        return (
            <div className="text-center text-red-500 py-4">
                Failled to fetch expensesData
            </div>
        )

    }
    return (
        <div>

            {/* header */}

            <div className="mb-5">
                <Header name="Expenses" />

                <p className="text-sm text-gray-500">

                    A visual represntation for expenses

                </p>
            </div>

            {/* filters */}

            <div className="flex flex-col md:flex-row justify-between gap-4">

                <div className="w-full md:w-1/3  shadow rounded-lg p-6">


                    <h3 className="text-lg font-semibold mb-4">
                        Filter bt category and Date
                    </h3>
                    <div className="space-y-4">

                        <div>
                            <label htmlFor="" className={classNames.label}>

                            </label>

                            <select id="category">

                            </select>
                        </div>

                    </div>
                </div>

            </div>



        </div>
    )
}

export default Expenses