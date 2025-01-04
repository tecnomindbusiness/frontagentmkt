import { Shield, Key } from 'lucide-react';

export default function ConfiguracoesDeSeguranca() {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center gap-4 mb-6">
        <Shield className="text-indigo-400" />
        <h2 className="text-xl font-semibold">Configurações de Segurança</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Senha Atual
          </label>
          <div className="flex gap-2">
            <Key size={20} className="text-gray-400" />
            <input
              type="password"
              className="flex-1 bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Digite a senha atual"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Nova Senha
          </label>
          <div className="flex gap-2">
            <Key size={20} className="text-gray-400" />
            <input
              type="password"
              className="flex-1 bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Digite a nova senha"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Confirmar Nova Senha
          </label>
          <div className="flex gap-2">
            <Key size={20} className="text-gray-400" />
            <input
              type="password"
              className="flex-1 bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Confirme a nova senha"
            />
          </div>
        </div>

        <button className="w-full px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors">
          Atualizar Senha
        </button>
      </div>
    </div>
  );
}
