import { Languages } from 'lucide-react';

const idiomasDisponiveis = [
  { code: 'en', name: 'Inglês' },
  { code: 'es', name: 'Espanhol' },
  { code: 'pt', name: 'Português' },
  { code: 'fr', name: 'Francês' },
];

export default function ConfiguracoesDeIdioma() {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center gap-4 mb-6">
        <Languages className="text-indigo-400" />
        <h2 className="text-xl font-semibold">Idiomas</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {idiomasDisponiveis.map((idioma) => (
          <label
            key={idioma.code}
            className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-colors"
          >
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
            />
            <span>{idioma.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
