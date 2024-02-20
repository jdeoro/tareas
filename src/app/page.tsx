'use client';


import { useGlobalstate } from "@/store/global/storeState";
import { Topmenu } from "./components/ui";
import { Login } from "./api/auth/Login";

export default function Home() {
  const isLogin = useGlobalstate( state => state.isLogin)
  return (
    <main className="flex  justify-between">
       {
        isLogin ?  <Topmenu /> :  <Login />
       }

    </main>
  );
}
