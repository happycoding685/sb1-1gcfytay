import React from 'react';

export function SearchPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Search</h1>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <input
          type="search"
          placeholder="Search users..."
          className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </main>
  );
}