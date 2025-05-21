import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/public/data/products.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.slice(0, 4)); // Ambil 4 produk teratas
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <p className="text-red-600">Error: {error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-md"
        >
          Coba Lagi
        </button>
      </div>
    );
  }

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Produk Populer</h2>
            <p className="text-gray-500 mt-2 max-w-md">
              List produk paling populer kami.
            </p>
          </div>
          <Link
            to="/menu"
            className="px-5 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50 transition"
          >
            View All
          </Link>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Produk Utama (Goulash) dengan layout baru */}
          {products[0] && (
            <div className="md:col-span-3 flex bg-white rounded-lg shadow overflow-hidden">
              <img 
                src={products[0].gambar} 
                alt={products[0].nama_produk} 
                className="w-full md:w-1/3 h-60 md:h-auto object-cover"
              />
              <div className="p-6 flex flex-col justify-between w-full md:w-2/3">
                <div>
                  <h4 className="text-orange-600 text-sm font-medium">Produk Favorit</h4>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{products[0].nama_produk}</h3>
                  <p className="text-gray-600 text-sm mb-4">{products[0].deskripsi}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-bold text-lg">Rp{products[0].harga.toLocaleString('id-ID')}</span>
                  <span className="text-yellow-500 text-lg">★ 4.5</span>
                </div>
              </div>
            </div>
          )}

          {/* 3 Produk Kecil (kanan) */}
          {products.slice(1).map((item) => (
            <div 
              key={item.kode_produk}
              className="flex bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
            >
              <img 
                src={item.gambar} 
                alt={item.nama_produk} 
                className="w-1/3 h-40 object-cover"
              />
              <div className="p-4 flex flex-col justify-between w-2/3">
                <div>
                  <h4 className="text-orange-600 text-sm font-medium">Produk Favorit</h4>
                  <h3 className="text-lg font-semibold text-gray-800">{item.nama_produk}</h3>
                  <p className="text-gray-600 text-sm">{item.deskripsi}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-700 font-bold">Rp{item.harga.toLocaleString('id-ID')}</span>
                  <span className="text-yellow-500">★ 4.5</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
