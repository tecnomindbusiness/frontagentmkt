import React from 'react';
import { Bell } from 'lucide-react';

export default function NotificationSettings() {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center gap-4 mb-6">
        <Bell className="text-indigo-400" />
        <h2 className="text-xl font-semibold">Notification Settings</h2>
      </div>

      <div className="space-y-4">
        <label className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
          <div>
            <p className="font-medium">New Messages</p>
            <p className="text-sm text-gray-400">Get notified when your agent receives new messages</p>
          </div>
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
          />
        </label>

        <label className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
          <div>
            <p className="font-medium">Performance Reports</p>
            <p className="text-sm text-gray-400">Weekly summary of your agent's performance</p>
          </div>
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
          />
        </label>

        <label className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
          <div>
            <p className="font-medium">System Updates</p>
            <p className="text-sm text-gray-400">Important updates about the platform</p>
          </div>
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
          />
        </label>
      </div>
    </div>
  );
}
