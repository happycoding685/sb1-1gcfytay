import React from 'react';
import { ImagePlus } from 'lucide-react';

export function CreatePage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Create New Post</h1>
      <div className="bg-white p-8 rounded-lg shadow-sm">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
          <ImagePlus className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <p className="text-gray-500 mb-4">Drag photos and videos here</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Select from computer
          </button>
        </div>
      </div>
    </main>
  );
}