import { useState } from "react";
import orders from "../data/ordersdata.json";
import { Link } from "react-router-dom";

export default function Orders() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-hijau">Data Orders</h1>

            <Link
                to="/orders/add"
                className="mb-4 inline-block px-4 py-2 bg-hijau text-white rounded hover:bg-green-700 transition"
            >
                Tambah Order
            </Link>

            {showForm && (
                <form className="mb-6 bg-white p-4 rounded-lg shadow-md border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700">Order ID</label>
                            <input className="w-full border border-gray-300 rounded px-3 py-2" placeholder="ORD-XXXX" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Nama Customer</label>
                            <input className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Nama Customer" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Status</label>
                            <input className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Pending / Shipped / Completed" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Total Harga</label>
                            <input className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Rp ..." />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-gray-700">Tanggal Order</label>
                            <input type="date" className="w-full border border-gray-300 rounded px-3 py-2" />
                        </div>
                    </div>
                </form>
            )}

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead className="bg-green-100 text-hijau">
                        <tr>
                            <th className="text-left py-3 px-4">Order ID</th>
                            <th className="text-left py-3 px-4">Customer</th>
                            <th className="text-left py-3 px-4">Status</th>
                            <th className="text-left py-3 px-4">Total</th>
                            <th className="text-left py-3 px-4">Tanggal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index} className="hover:bg-green-50">
                                <td className="py-2 px-4">{order.orderId}</td>
                                <td className="py-2 px-4">{order.customerName}</td>
                                <td className={`py-2 px-4 ${
                                    order.status === "Completed" ? "text-green-600 font-semibold" :
                                    order.status === "Pending" ? "text-yellow-600 font-semibold" :
                                    "text-blue-600 font-semibold"
                                }`}>
                                    {order.status}
                                </td>
                                <td className="py-2 px-4">Rp {order.totalPrice.toLocaleString()}</td>
                                <td className="py-2 px-4">{order.orderDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
