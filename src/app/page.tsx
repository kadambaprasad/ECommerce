'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router=useRouter();
  useEffect(()=>{
   let isUserLogin= window.localStorage.getItem("user");
   if(isUserLogin){
    router.push('/dashboard')
   }else{
    router.push('/login')    
   }

  },[])

  return null;
}
