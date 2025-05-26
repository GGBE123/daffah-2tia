import React, { useState, useEffect } from 'react';

const ProductCheck = () => {
  const [products, setProducts] = useState([]);
  const [kodeProduct, setKodeProduct] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');

  useEffect(() => {
    // Fetch products from the JSON file
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products data');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Error loading products:", err);
        setError('Failed to load products data. Please try again later.');
      }
    };

    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    setKodeProduct(e.target.value);
    setFormError('');
  };

  const handleCheckProduct = (e) => {
    e.preventDefault();

    // Validate input
    if (!kodeProduct) {
      setFormError('Kode produk tidak boleh kosong');
      return;
    }

    if (kodeProduct.length < 4) {
      setFormError('Kode produk minimal 4 karakter');
      return;
    }

    setLoading(true);
    setSearchResult(null);
    setError('');
    
    // Search for product by kode_produk
    setTimeout(() => {
      const foundProduct = products.find(
        (product) => product.kode_produk.toLowerCase() === kodeProduct.toLowerCase()
      );

      if (foundProduct) {
        setSearchResult(foundProduct);
      } else {
        setError('❌ Kode produk tidak ditemukan.');
      }
      
      setLoading(false);
    }, 800); // Added a small delay to show loading state
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Cek Ketersediaan Produk</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Masukkan kode produk untuk memeriksa ketersediaan stok produk yang Anda inginkan
          </p>
        </div>

        {/* Check Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handleCheckProduct}>
            <div className="mb-6">
              <label htmlFor="kodeProduct" className="block text-gray-700 font-medium mb-2">
                Kode Produk
              </label>
              <input
                type="text"
                id="kodeProduct"
                value={kodeProduct}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-md focus:ring focus:ring-orange-200 focus:outline-none ${
                  formError ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Masukkan kode produk (min. 4 karakter)"
              />
              {formError && (
                <p className="text-red-500 text-sm mt-1">{formError}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-4 py-3 text-white font-medium rounded-md ${
                loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-orange-600 hover:bg-orange-700'
              } transition-colors duration-300`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Memeriksa...
                </span>
              ) : (
                'Cek Ketersediaan'
              )}
            </button>
          </form>

          {/* Result Display */}
          {searchResult && (
            <div className="mt-8 p-6 border rounded-lg bg-gray-50">
              <div className="flex flex-col md:flex-row items-center">
                {searchResult.stok > 0 ? (
                  <div className="bg-green-100 rounded-full p-3 mr-4 mb-4 md:mb-0">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : (
                  <div className="bg-yellow-100 rounded-full p-3 mr-4 mb-4 md:mb-0">
                    <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 
                      4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                )}
                <div>
                  {searchResult.stok > 0 ? (
                    <>
                      <h3 className="text-lg font-semibold text-green-600 mb-1">
                        ✅ Produk {searchResult.nama_produk} tersedia dengan harga Rp{searchResult.harga.toLocaleString('id-ID')}.
                      </h3>
                      <p className="text-gray-700">
                        Stok tersedia: <span className="font-medium">{searchResult.stok}</span>
                      </p>
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg font-semibold text-yellow-600 mb-1">
                        ⚠️ Produk {searchResult.nama_produk} saat ini sedang habis.
                      </h3>
                      <p className="text-gray-700">
                        Silahkan cek kembali di lain waktu atau hubungi kami untuk informasi restock.
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Product Details */}
              <div className="mt-6 flex flex-col md:flex-row items-center">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <img
                    src={searchResult.gambar || `/src/assets/products/${searchResult.kode_produk}.jpg`}
                    alt={searchResult.nama_produk}
                    className="w-40 h-40 object-cover rounded-md mx-auto"
                  />
                </div>
                <div className="md:w-2/3 md:pl-6">
                  <h4 className="font-semibold text-lg mb-2">{searchResult.nama_produk}</h4>
                  <p className="text-gray-600 mb-4">{searchResult.deskripsi || 'Tidak ada deskripsi produk'}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-orange-600">
                      Rp{searchResult.harga.toLocaleString('id-ID')}
                    </span>
                    {searchResult.stok > 0 ? (
                      <button className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors">
                        Pesan Sekarang
                      </button>
                    ) : (
                      <div className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium">
                        Out of Stock
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="mt-8 p-6 border border-red-200 rounded-lg bg-red-50">
              <div className="flex items-center">
                <div className="bg-red-100 rounded-full p-3 mr-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 mb-1">{error}</h3>
                  <p className="text-gray-700">
                    Silahkan cek kembali kode produk yang Anda masukkan atau cari produk melalui menu kami.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductCheck;