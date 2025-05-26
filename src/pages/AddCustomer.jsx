export default function AddCustomer() {
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Tambah Customer Baru</h2>
            
            <form className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                    <div>
                        <label className="block text-gray-700 mb-1">Customer ID</label>
                        <input 
                            type="text" 
                            className="w-full border border-gray-300 rounded px-3 py-2" 
                            placeholder="CUST-001" 
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Nama Lengkap</label>
                        <input 
                            type="text" 
                            className="w-full border border-gray-300 rounded px-3 py-2" 
                            placeholder="Nama Customer" 
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Email</label>
                        <input 
                            type="email" 
                            className="w-full border border-gray-300 rounded px-3 py-2" 
                            placeholder="email@example.com" 
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Telepon</label>
                        <input 
                            type="tel" 
                            className="w-full border border-gray-300 rounded px-3 py-2" 
                            placeholder="08xxxxxxxx" 
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-gray-700 mb-1">Status Loyalty</label>
                        <select className="w-full border border-gray-300 rounded px-3 py-2">
                            <option value="Gold">Gold</option>
                            <option value="Silver">Silver</option>
                            <option value="Bronze">Bronze</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-end">
                    <button 
                        type="button" 
                        className="px-4 py-2 bg-hijau text-white rounded hover:bg-green-700 transition"
                    >
                        Simpan Customer
                    </button>
                </div>
            </form>
        </div>
    );
}