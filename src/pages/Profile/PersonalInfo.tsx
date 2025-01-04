import { User, Mail, Globe } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
export default function PersonalInfo() {
  const {user} = useAuth()
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">Personal Information</h2>

      <div className="space-y-6">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
            <User size={32} className="text-gray-400" />
          </div>
          <button className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
            Change Avatar
          </button>
        </div>

        <div className="grid gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name
            </label>
            <div className="flex gap-2">
              <User size={20} className="text-gray-400" />
              <input
                type="text"
                className="flex-1 bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <div className="flex gap-2">
              <Mail size={20} className="text-gray-400" />
              <input
                type="email"
                className="flex-1 bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="your@email.com"
                value={user?.email}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Website
            </label>
            <div className="flex gap-2">
              <Globe size={20} className="text-gray-400" />
              <input
                type="url"
                className="flex-1 bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="https://yourwebsite.com"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
