import { useState } from "react";
import customers from "../data/customersdata.json";
import { Link } from "react-router-dom";

export default function Customers() {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-hijau">Data Customer</h1>

            <Link
                to="/customers/add"
                className="mb-4 inline-block px-4 py-2 bg-hijau text-white rounded hover:bg-green-700 transition"
            >
                Tambah Customer
            </Link>

            {showForm && (
                <form className="mb-6 bg-white p-4 rounded-lg shadow-md border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700">Customer ID</label>
                            <input className="w-full border border-gray-300 rounded px-3 py-2" placeholder="CUST-001" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Nama</label>
                            <input className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Nama Lengkap" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email</label>
                            <input className="w-full border border-gray-300 rounded px-3 py-2" placeholder="email@example.com" />
                        </div>
                        <div>
                            <label className="block text-gray-700">Telepon</label>
                            <input className="w-full border border-gray-300 rounded px-3 py-2" placeholder="08xxxx" />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-gray-700">Loyalty</label>
                            <input className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Gold / Silver / Bronze" />
                        </div>
                    </div>
                </form>
            )}

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead className="bg-green-100 text-hijau">
                        <tr>
                            <th className="text-left py-3 px-4">ID</th>
                            <th className="text-left py-3 px-4">Nama</th>
                            <th className="text-left py-3 px-4">Email</th>
                            <th className="text-left py-3 px-4">Telepon</th>
                            <th className="text-left py-3 px-4">Loyalty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((cust, index) => (
                            <tr key={index} className="hover:bg-green-50">
                                <td className="py-2 px-4">{cust["Customer ID"]}</td>
                                <td className="py-2 px-4">{cust["Customer Name"]}</td>
                                <td className="py-2 px-4">{cust["Email"]}</td>
                                <td className="py-2 px-4">{cust["Phone"]}</td>
                                <td className={`py-2 px-4 font-semibold ${
                                    cust["Loyalty"] === "Gold" ? "text-yellow-600" :
                                    cust["Loyalty"] === "Silver" ? "text-gray-500" :
                                    "text-orange-500"
                                }`}>
                                    {cust["Loyalty"]}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
