import React from 'react';

const Report = () => {
    const reportData = [
    { id: 1, name: "John Doe", sales: 5000, status: "Completed" },
    { id: 2, name: "Jane Smith", sales: 3000, status: "Pending" },
    { id: 3, name: "Mike Johnson", sales: 7000, status: "Completed" },
  ];
    return (
       <div>
        <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
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
                      item.status === "Completed" ? "text-green-600" : "text-red-600"
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
    )
  };

export default Report;