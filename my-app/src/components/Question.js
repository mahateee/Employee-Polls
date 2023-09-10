import React from "react";
import { connect } from "react-redux";
function Question({ question, author }) {
  return (
    <div class="flow-root">
      <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
              <img
                class="w-8 h-8 rounded-full"
                src="/docs/images/people/profile-picture-1.jpg"
                alt="Neil image"
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                author {author}
              </p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                "TIME"
              </p>
            </div>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-sm rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Show
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default connect()(Question);
