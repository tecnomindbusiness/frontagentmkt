import React from 'react';
import { Settings } from 'lucide-react';

export default function BehaviorSettings() {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center gap-4 mb-6">
        <Settings className="text-indigo-400" />
        <h2 className="text-xl font-semibold">Behavior Settings</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-300">Response Time</span>
            <span className="text-sm text-gray-400">2 seconds</span>
          </label>
          <input
            type="range"
            min="1"
            max="5"
            defaultValue="2"
            className="w-full"
          />
        </div>

        <div>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
            />
            <span className="text-sm text-gray-300">Enable automatic greetings</span>
          </label>
        </div>

        <div>
          <label className="flex items-center gap-3">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
            />
            <span className="text-sm text-gray-300">Use emojis in responses</span>
          </label>
        </div>
      </div>
    </div>
  );
}
