import React from "react";
import Hero from "../Home/HomeComponents/Hero";

const Report = () => {
  const reportData = [
    { id: 1, name: "John Doe", sales: 5000, status: "Completed" },
    { id: 2, name: "Jane Smith", sales: 3000, status: "Pending" },
    { id: 3, name: "Mike Johnson", sales: 7000, status: "Completed" },
  ];
  return (
    <div>
      <Hero />

      <div className="p-6 bg-gray-100 ">
        <h1 className="text-2xl font-bold mb-4">Sales Report</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="py-2 px-4">ID</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Sales ($)</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {reportData.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-2 px-4">{item.id}</td>
                  <td className="py-2 px-4">{item.name}</td>
                  <td className="py-2 px-4">{item.sales}</td>
                  <td
                    className={`py-2 px-4 font-semibold ${
                      item.status === "Completed"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Report;
