import React from "react";

export default function GuestLayout({ children }) {
  return (
    <div className="bg-white flex flex-col items-center justify-center w-full mb-20">
      {/* New Header */}
      <div className="w-full h-[30px] bg-red-900" />

      <div className="bg-white overflow-hidden w-full max-w-screen-lg relative px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex flex-col items-center gap-5 mt-10 lg:mt-0">
          <img
            className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px] object-cover"
            alt="Ellipse"
            src="/build/logo/useplogo.png"
          />
          <div className="text-center font-medium text-black text-2xl lg:text-[40px]">
            Welcome to Text Blast
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 p-6 mt-10 w-full max-w-md lg:w-[450px] rounded-[5px] border border-solid border-black bg-white">
          {children}
        </div>
        <div className="absolute w-full h-[30px] top-0 left-0 bg-maroon" />
      </div>
    </div>
  );
}
