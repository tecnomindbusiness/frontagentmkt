import React from 'react';
import { Sparkles } from 'lucide-react';

export default function PersonalitySettings() {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center gap-4 mb-6">
        <Sparkles className="text-indigo-400" />
        <h2 className="text-xl font-semibold">Personality</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Agent Name
          </label>
          <input
            type="text"
            className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter agent name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Personality Description
          </label>
          <textarea
            className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32"
            placeholder="Describe your agent's personality..."
          />
        </div>
      </div>
    </div>
  );
}
