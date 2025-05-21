export default function AddOrder() {
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Tambah Order Baru</h2>
            
            <form className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    
                    <div>
                        <label className="block text-gray-700 mb-1">Order ID</label>
                        <input 
                            type="text" 
                            className="w-full border border-gray-300 rounded px-3 py-2" 
                            placeholder="ORD-XXXX" 
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Nama Customer</label>
                        <input 
                            type="text" 
                            className="w-full border border-gray-300 rounded px-3 py-2" 
                            placeholder="Nama Customer" 
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Status</label>
                        <select className="w-full border border-gray-300 rounded px-3 py-2">
                            <option value="Pending">Pending</option>
                            <option value="Processing">Processing</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Total Harga</label>
                        <input 
                            type="number" 
                            className="w-full border border-gray-300 rounded px-3 py-2" 
                            placeholder="Rp ..." 
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-gray-700 mb-1">Tanggal Order</label>
                        <input 
                            type="date" 
                            className="w-full border border-gray-300 rounded px-3 py-2" 
                        />
                    </div>

                </div>

                <div className="flex justify-end">
                    <button 
                        type="button" 
                        className="px-4 py-2 bg-hijau text-white rounded hover:bg-green-700 transition"
                    >
                        Simpan Order
                    </button>
                </div>
            </form>
        </div>
    );
}