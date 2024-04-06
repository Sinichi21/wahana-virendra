// src/app/test/page.js
"use client";
import { useState } from "react";

export default function BookingForm() {
  const [departurePort, setDeparturePort] = useState("");
  const [destinationPort, setDestinationPort] = useState("");

  const handleDepartureChange = (e) => {
    setDeparturePort(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestinationPort(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim data pemesanan
    console.log("Data pemesanan:", { departurePort, destinationPort });
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Formulir Pemesanan</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="departure" className="block font-semibold">
            Pelabuhan Keberangkatan
          </label>
          <select id="departure" value={departurePort} onChange={handleDepartureChange} className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option value="">Pilih Pelabuhan Keberangkatan</option>
            <option value="Pelabuhan A">Pelabuhan A</option>
            <option value="Pelabuhan B">Pelabuhan B</option>
            <option value="Pelabuhan C">Pelabuhan C</option>
          </select>
        </div>
        <div>
          <label htmlFor="destination" className="block font-semibold">
            Pelabuhan Tujuan
          </label>
          <select id="destination" value={destinationPort} onChange={handleDestinationChange} className="w-full mt-1 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option value="">Pilih Pelabuhan Tujuan</option>
            <option value="Pelabuhan X">Pelabuhan X</option>
            <option value="Pelabuhan Y">Pelabuhan Y</option>
            <option value="Pelabuhan Z">Pelabuhan Z</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Pesan Sekarang
        </button>
      </form>
    </div>
  );
}
