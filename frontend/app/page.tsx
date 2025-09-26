import { useState } from "react";
import moduleName from "module";

("use client ");

type Transaction = {
  id: string;
  text: string;
  amount: number;
  created_at: string;
};

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const getTransactio = async () => {
    try {
      const res = await api.get<Transaction[]>("transactions/");
      setTransactions(res.data);
    } catch (error) {}
  };
  return <button className="btn btn-ms">Test </button>;
}
