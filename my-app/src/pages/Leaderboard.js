import React from "react";
import Header from "../components/Header";
import image1 from "../docs/images/image-removebg-preview (1).png";
export default function Leaderboard() {
  return (
    <>
      <Header />
      <section class="bg-gray-50  h-screen dark:bg-gray-900 py-3 sm:py-5">
        <div class="flex flex-col justify-center px-4 mx-auto max-w-2xl">
          <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Users
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Answerd
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Created
                  </th>
                </tr>
              </thead>
              <tbody>
                <Item />
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export function Item() {
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        class="px-6 py-4 flex space-x-4 items-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img
          class=" w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src={image1}
          alt="Bordered avatar"
        />
        <p class="">name</p>
      </th>
      <td class="px-6 py-4">4</td>
      <td class="px-6 py-4">5</td>
    </tr>
  );
}
