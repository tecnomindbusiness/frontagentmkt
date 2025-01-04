import { Bell } from 'lucide-react';

export default function ConfiguracoesDeNotificacoes() {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center gap-4 mb-6">
        <Bell className="text-indigo-400" />
        <h2 className="text-xl font-semibold">Configurações de Notificações</h2>
      </div>

      <div className="space-y-4">
        <label className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
          <div>
            <p className="font-medium">Novas Mensagens</p>
            <p className="text-sm text-gray-400">Receber notificações quando seu agente receber novas mensagens</p>
          </div>
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
          />
        </label>

        <label className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
          <div>
            <p className="font-medium">Relatórios de Desempenho</p>
            <p className="text-sm text-gray-400">Resumo semanal do desempenho do seu agente</p>
          </div>
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-indigo-600 rounded focus:ring-indigo-500"
          />
        </label>

        <label className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
          <div>
            <p className="font-medium">Atualizações do Sistema</p>
            <p className="text-sm text-gray-400">Atualizações importantes sobre a plataforma</p>
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
