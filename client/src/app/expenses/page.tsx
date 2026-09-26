"use client"

import { ExpenseByCategorySummary, useGetExpensesByCategoryQuery } from "@/state/api";
import { useMemo, useState } from "react"
import Header from "../(components)/Header";

import { Pie, PieChart, ResponsiveContainer } from "recharts";

type AggregatedDataItem = {

    name: string;
    color?: string;
    amount: number;

}

type AggregatedData = {
    [category: string]: AggregatedDataItem
}

const Expenses = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("ali");
    const [startDate, setStartData] = useState("");
    const [endData, setEndDate] = useState("")
    const { data: expensesData, isLoading, isError } = useGetExpensesByCategoryQuery();

    const expenses = useMemo(() => expensesData ?? [], [expensesData])


    const parseData = (dateString: string) => {
        const date = new Date(dateString);

        return date.toISOString().split("T")[0]
    }
    const aggregatedData: AggregatedDataItem[] = useMemo(() => {


        const filtred: AggregateData = expenses.filter((data: ExpenseByCategorySummary) => {

            const matchesCategory = selectedCategory === "All" || data.category === selectedCategory;
            const dataDate = parseData(data.date);
            const matchesData = 

        }
        )
    })

    const classNames = {
        label: "block text-sm font-medium dark:text-white",
        selectInput: "mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:ring-indigo-500 text-white bg-gray-500 sm:text-sm rounded-md"
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
                                Category
                            </label>

                            <select id="category" name="category" className={classNames.selectInput} defaultValue="All" onChange={(e) => setSelectedCategory(e.target.value)}>

                                <option value="">All</option>
                                <option value="">Office</option>
                                <option value="">Prefessional</option>
                                <option value="">Salaries</option>
                            </select>
                        </div>
                        {/* start date */}
                        <div>
                            <label htmlFor="start-date" className={classNames.label}>
                                Start Date
                            </label>

                            <input id="start-date" name="start-date" type="date" className={classNames.selectInput} defaultValue="All" onChange={(e) => setStartData(e.target.value)} />



                        </div>
                        {/* end date */}
                        <div>
                            <label htmlFor="end-date" className={classNames.label}>
                                End Date
                            </label>

                            <input id="end-date" name="end-date" type="date" className={classNames.selectInput} defaultValue="All" onChange={(e) => setEndDate(e.target.value)} />



                        </div>

                    </div>
                </div>

                {/* chart */}

                <div className="grow bg-white shadow rounded-lg p-4 md:p-6">
                    <ResponsiveContainer width="100%" height={400}>
                        <PieChart>

                            <Pie
                                data={aggregatedData}
                                cx="50 %"
                                cy="50%"
                                outerRadius={150}
                                fill="#8884d8"
                                dataKey="amount"
                                onMouseEnter={(_, index) => setActiveIndex(index)}

                            />

                        </PieChart>
                    </ResponsiveContainer>
                </div>

            </div>



        </div>
    )
}

export default Expenses