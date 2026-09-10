import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export interface Product {
  productId: string;
  name: string;
  price: number;
  rating?: number;
  stockQuantity: number;
}

export interface SalesSummary {
  salesSummaryId: string;
  totalValue: number;
  changePercentage?: number;
  date: string;
}

export interface PurchaseSummary {
  purchaseSummaryId: string;
  totalPurchased: number;
  changePercentage?: number;
  data: string;
}

export interface ExpenseSummary {
  expenseSummaryId: string;
  totalExpense: number;
  data: string;
}

export interface ExpenseByCategorySummary{

  expenseByCategorySummeryId: string;
  category: string;
  amount: string;
  data:string

}

export interface DashboardMetric {
  popularProducts: Product[];
  salesSummary: SalesSummary[];
  purchaseSummary: PurchaseSummary[];
  expenseSummary: ExpenseSummary[];
  expenseByCategorySummary: ExpenseByCategorySummary[];
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: ["DashboardMetrics"],
  endpoints: (build) => ({
    getdashboardMetrics: build.query<DashboardMetric, void>({
      query: () => "/dashboard",
      providesTags: ["DashboardMetrics"],
    }),
  }),
});

export const {} = api;
