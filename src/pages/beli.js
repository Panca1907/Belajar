import { useState } from 'react';

export default function BuyTrash() {
  const [price, setPrice] = useState(0);

  const handleCalculatePrice = (e) => {
    e.preventDefault();
    // hitung harga total berdasarkan harga per kg dan berat sampah yang diinputkan
    const plasticPrice = 2000 * parseFloat(e.target.plastic.value);
    const batteryPrice = 5000 * parseFloat(e.target.battery.value);
    const electronicPrice = 10000 * parseFloat(e.target.electronic.value);
    const tirePrice = 500 * parseFloat(e.target.tire.value);
    const paperPrice = 500 * parseFloat(e.target.paper.value);
    setPrice(
      plasticPrice + batteryPrice + electronicPrice + tirePrice + paperPrice
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="mt-6 mb-10 text-3xl font-extrabold text-gray-900">
          Harga Sampah Terbaru
        </h1>
        <form
          onSubmit={handleCalculatePrice}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          <div className="col-span-1">
            <label
              htmlFor="plastic"
              className="block text-sm font-medium text-gray-700"
            >
              Botol Plastik
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="plastic"
                id="plastic"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Berat dalam kg"
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>

          <div className="col-span-1">
            <label
              htmlFor="battery"
              className="block text-sm font-medium text-gray-700"
            >
              Baterai Bekas
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="battery"
                id="battery"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Berat dalam kg"
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>

          <div className="col-span-1">
            <label
              htmlFor="electronic"
              className="block text-sm font-medium text-gray-700"
            >
              Barang Elektronik Rusak
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="electronic"
                id="electronic"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Berat dalam kg"
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>

          <div className="col-span-1">
            <label
              htmlFor="tire"
              className
              block
              text-sm
              font-medium
              text-gray-700
            >
              Ban Bekas
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="tire"
                id="tire"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Berat dalam kg"
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>

          <div className="col-span-1">
            <label
              htmlFor="paper"
              className="block text-sm font-medium text-gray-700"
            >
              Kertas Bekas
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="paper"
                id="paper"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Berat dalam kg"
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>

          <div className="col-span-2">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Hitung Harga
            </button>
          </div>
        </form>

        {price > 0 && (
          <div className="mt-10 text-xl font-bold text-gray-900">
            Harga total: Rp {price.toLocaleString('id-ID')}
          </div>
        )}
      </main>
    </div>
  );
}
