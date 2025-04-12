'use client'
import React from "react";
import { useRouter } from 'next/navigation'
const page = () => {
    const router = useRouter();
  const submitDetails = (event: any) => {
   window.localStorage.clear();
   router.replace('/');
  };

  return (
    <div>
      Dashboard page
      <button onClick={submitDetails}>Logout </button>
    </div>
  );
};

export default page;
