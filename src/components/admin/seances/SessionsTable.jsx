import React, { useContext, useState } from "react";

export default function SeancesTable() {
  return (
    <div className="relative ml-64 overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
          <th scope="col" className="px-6 py-3">
          film          </th>
            <th scope="col" className="px-6 py-3">
            salle           </th>
            <th scope="col" className="px-6 py-3">
            dateTime            </th>
            <th scope="col" className="px-6 py-3">
            price            </th>
            
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                Edit
              </a>
            </td>
            <td className="px-6 py-4">
              <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
                Delete
              </a>
            </td>
          </tr>
        
        </tbody>
      </table>
    </div>
  );
}
