"use client";

import React, { useEffect, useMemo } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import Navbar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";

import StoreProvider, { useAppSelector } from "./redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const isSidebarCollapsed = useAppSelector(
        (state) => state.global.isSidebarCollapsed
    );

    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

    useEffect(() => {
        document.body.classList.toggle("dark", isDarkMode);
        document.documentElement.classList.toggle("dark", isDarkMode);
    }, [isDarkMode]);

    const muiTheme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: isDarkMode ? "dark" : "light",
                },
            }),
        [isDarkMode]
    );

    return (
        <ThemeProvider theme={muiTheme}>
            <div className="flex w-full min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
                <Sidebar />

                <main
                    className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 dark:bg-gray-900 ${isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
                        }`}
                >
                    <Navbar />

                    {children}
                </main>
            </div>
        </ThemeProvider>
    );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <StoreProvider>
            <DashboardLayout>{children}</DashboardLayout>
        </StoreProvider>
    );
};

export default DashboardWrapper;