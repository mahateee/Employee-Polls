import React from "react";
import Question from "./Question";

export default function QuestionList({ title, children }) {
  return (
    <div class="w-full max-w-md m-4 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div class="flex items-center justify-between mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
          {title}
        </h5>
      </div>
      {children}
      {/* <Question /> */}
    </div>
  );
}
