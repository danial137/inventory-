"use client"

import { useGetExpensesByCategoryQuery } from "@/state/api";
import { useMemo, useState } from "react"
import Header from "../(components)/Header";

const Expenses = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("ali");
    const [starDate, setStarData] = useState("");
    const [endData, setEndDate] = useState("")
    const { data: expensesData, isLoading, isError } = useGetExpensesByCategoryQuery();

    const expenses = useMemo(() => expensesData ?? [], [expensesData])

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
            <div className="mb-5">
                <Header name="Expenses" />

                <p className="text-sm text-gray-500">

                    A visual represntation for expenses

                </p>
            </div>

        </div>
    )
}

export default Expenses