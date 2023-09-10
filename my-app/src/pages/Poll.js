import React from "react";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";

export default function Poll() {
  return (
    <section class="bg-white dark:bg-gray-900">
      <Header />
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Poll by 'username'
          </h2>
          <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            would you rether
          </p>
        </div>
        <div class="grid grid-cols-2 gap-1 justify-items-center">
          <QuestionCard />
          <QuestionCard />
        </div>
      </div>
    </section>
  );
}
