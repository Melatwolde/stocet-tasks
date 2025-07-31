// Mock data simulating Supabase API response
import { Stock } from "@/app/domain/stock";

export const mockStocks: Stock[] = [
  {
    symbol: "ETHI",
    name: "Ethiopian Insurance Corporation",
    price: 120.50,
    change: 3.25,
  },
  {
    symbol: "ABAY",
    name: "Abay Bank",
    price: 85.30,
    change: -2.10,
  },
  {
    symbol: "AWASH",
    name: "Awash Bank",
    price: 97.80,
    change: 1.75,
  },
  {
    symbol: "HIBRET",
    name: "Hibret Bank",
    price: 110.00,
    change: -0.85,
  },
  {
    symbol: "DASHEN",
    name: "Dashen Bank",
    price: 105.60,
    change: 2.90,
  },
];
