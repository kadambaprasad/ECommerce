"use client";

import { useRouter } from "next/navigation";
const page = () => {
  const router = useRouter();
  const submitLoginDetails = (event: any) => {
    window.localStorage.setItem("user", "8787987");
    // window.location.href='/';
    router.replace("/");
  };
  return (
    <div className="flex items-center justify-center md:h-screen bg-gray-100">
      <div>Login screen</div>
      <button onClick={submitLoginDetails}>Login pjlkj</button>
    </div>
  );
};

export default page;
