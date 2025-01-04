import React from 'react';
import { Shield, Key } from 'lucide-react';

export default function SecuritySettings() {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center gap-4 mb-6">
        <Shield className="text-indigo-400" />
        <h2 className="text-xl font-semibold">Security Settings</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Current Password
          </label>
          <div className="flex gap-2">
            <Key size={20} className="text-gray-400" />
            <input
              type="password"
              className="flex-1 bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter current password"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            New Password
          </label>
          <div className="flex gap-2">
            <Key size={20} className="text-gray-400" />
            <input
              type="password"
              className="flex-1 bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter new password"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Confirm New Password
          </label>
          <div className="flex gap-2">
            <Key size={20} className="text-gray-400" />
            <input
              type="password"
              className="flex-1 bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Confirm new password"
            />
          </div>
        </div>

        <button className="w-full px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
          Update Password
        </button>
      </div>
    </div>
  );
}
