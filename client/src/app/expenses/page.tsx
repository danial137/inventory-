"use client"

import { useState } from "react"

const Expenses = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("ali");
    const [starDate, setStarData] = useState("");
    const [endData, setEndDate] = useState("")

    return (
        <div>Expenses</div>
    )
}

export default Expenses