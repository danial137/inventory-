"use client"

import { useGetUsersQuery } from "@/state/api"
import Header from "../(components)/Header";
import { GridColDef, DataGrid } from "@mui/x-data-grid";


const column: GridColDef[] = [
    { field: "userId", headerName: "ID", width: 90 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },


]

const Users = () => {

    const { data: users, isError, isLoading } = useGetUsersQuery();

    if (isLoading) {
        return <div className="py-4">Loading... </div>
    }

    if (isError || !users) {

        return (
            <div className="text-center text-red-500 py-4">
                Failled to fetch prodcuts
            </div>
        )

    }

    return (
        <div className="flex flex-col">
            <Header name="User" />

            <div className="mt-5">
                <DataGrid
                    rows={users}
                    columns={column}
                    getRowId={(row) => row.userId}
                    checkboxSelection
                    className="bg-white shadow rounded-lg border border-gray-200 text-gray-500!"
                />
            </div>
        </div>
    );


}


export default Users