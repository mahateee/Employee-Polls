import React, { useState, useEffect } from "react";
import Header from "./Header";
export default function Container({ children }) {
  return (
    <div>
      <Header />
      <section class="bg-gray-50 dark:bg-gray-900 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div class="flex flex-col items-center justify-center  px-6 py-8 mx-auto md:h-screen lg:py-0">
          {children}
        </div>
      </section>
    </div>
  );
}
