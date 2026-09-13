"use client"

import { useGetProductsQuery } from "@/state/api"
import Header from "../(components)/Header";
import { GridColDef, DataGrid } from "@mui/x-data-grid";


const column: GridColDef[] = [
    { field: "productId", headerName: "ID", width: 90 },
    { field: "name", headerName: "Product Name", width: 200 },
    { field: "price", headerName: "Price", width: 110, type: "number", valueGetter: (value, row) => `$${row.price}` },
    { field: "rating", headerName: "Rating", width: 110, type: "number", valueGetter: (value, row) => row.rating ? row.rating : "N/A" },
    { field: "stockQuantity", headerName: "Stock Quantity", width: 150, type: "number" }

]

const Inventory = () => {

    const { data: products, isError, isLoading } = useGetProductsQuery();

    if (isLoading) {
        return <div className="py-4">Loading... </div>
    }

    if (isError || !products) {

        return (
            <div className="text-center text-red-500 py-4">
                Failled to fetch prodcuts
            </div>
        )

    }

    return <div className="flex flex-col ">

        <Header name="Inventory" />
        <DataGrid rows={products} columns={column} getRowId={(row) => row.productId} checkboxSelection />

    </div>


}


export default Inventory