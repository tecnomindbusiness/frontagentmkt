import React from 'react';
import { Upload, Link } from 'lucide-react';

export default function UploadSection() {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">Add Training Data</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* PDF Upload */}
        <div className="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center hover:border-indigo-500 transition-colors">
          <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <h3 className="font-medium mb-2">Upload PDF</h3>
          <p className="text-sm text-gray-400 mb-4">Drag and drop or click to upload PDF files</p>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
            Select File
          </button>
        </div>

        {/* URL Input */}
        <div className="border-2 border-gray-700 rounded-lg p-6">
          <Link className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="font-medium mb-2">Add URL</h3>
          <p className="text-sm text-gray-400 mb-4">Enter a URL to scrape content</p>
          <div className="flex gap-2">
            <input
              type="url"
              placeholder="https://..."
              className="flex-1 bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
