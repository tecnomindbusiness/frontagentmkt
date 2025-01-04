import React from 'react';
import { Languages } from 'lucide-react';

const availableLanguages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Spanish' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'fr', name: 'French' },
];

export default function LanguageSettings() {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center gap-4 mb-6">
        <Languages className="text-indigo-400" />
        <h2 className="text-xl font-semibold">Languages</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {availableLanguages.map((lang) => (
          <label
            key={lang.code}
            className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors"
          >
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
            />
            <span>{lang.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
