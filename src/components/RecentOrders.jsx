import React from "react";
import CustomerFeedback from "./CustomerFeedback";

const RecentOrders = () => {
  const orders = [
    {
      customer: "Wade Warren",
      orderNo: "15478256",
      amount: "$124.00",
      status: "Delivered",
    },
    {
      customer: "Jane Cooper",
      orderNo: "48967586",
      amount: "$305.00",
      status: "Pending",
    },
    {
      customer: "Guy Hawkins",
      orderNo: "78985215",
      amount: "$45.88",
      status: "Cancelled",
    },
    {
      customer: "Kristin Watson",
      orderNo: "20965732",
      amount: "$56.00",
      status: "Delivered",
    },
    {
      customer: "Cody Fisher",
      orderNo: "95715620",
      amount: "$545.00",
      status: "Delivered",
    },
    {
      customer: "Savannah Nguyen",
      orderNo: "78514568",
      amount: "$128.20",
      status: "Delivered",
    },
  ];

  const statusColors = {
    Delivered: "bg-green-700 text-white",
    Pending: "bg-yellow-500 text-white",
    Cancelled: "bg-red-900 text-white",
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
      <div className="lg:col-span-2">
        <div className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
          <h1 className="font-bold text-lg ">Recent Orders</h1>
          <table className="min-w-full leading-normal">
            <thead>
              <tr className="border-b-2 border-gray-600">
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Order No.
                </th>
                <th className="px-5 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">
                  Amount
                </th>
                <th
                  className="px-5 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider"
                  style={{ width: "150px" }}
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className={`${index !== orders.length - 1 ? 'border-b border-gray-600' : ''}`}>
                  <td className="px-5 py-5 text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-10 h-10">
                        <img
                          className="w-full h-full rounded-full"
                          src={`https://i.pravatar.cc/150?img=${index}`}
                          alt={order.customer}
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-300 whitespace-no-wrap">
                          {order.customer}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 text-sm">
                    <p className="text-gray-300 whitespace-no-wrap">
                      {order.orderNo}
                    </p>
                  </td>
                  <td className="px-5 py-5 text-sm">
                    <p className="text-gray-300 whitespace-no-wrap">
                      {order.amount}
                    </p>
                  </td>
                  <td className="px-5 py-5 text-sm" style={{ width: "150px" }}>
                    <span
                      className={`relative inline-block px-3 py-1 rounded-xl font-semibold leading-tight ${
                        statusColors[order.status]
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 opacity-50 rounded-full"
                      ></span>
                      <span className="relative">{order.status}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-gray-700 p-4 rounded">
        <div className="grid sm:grid-cols-1 gap-3">
          <CustomerFeedback/>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
