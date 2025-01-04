import { Phone, PhoneOff } from 'lucide-react';

export default function ConnectionStatus() {
  const isConnected = true;

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">Status de Conexão</h2>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-400' : 'bg-red-400'}`} />
            <span className="text-gray-300">
              {isConnected ? 'Connected' : 'Disconnected'}
            </span>
          </div>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          {isConnected ? (
            <Phone className="text-green-400 h-8 w-8" />
          ) : (
            <PhoneOff className="text-red-400 h-8 w-8" />
          )}
        </div>
      </div>
      
      <div className="mt-6">
        <button className={`px-4 py-2 rounded-lg ${
          isConnected 
            ? 'bg-red-600 hover:bg-red-700' 
            : 'bg-indigo-600 hover:bg-indigo-700'
        } transition-colors`}>
          {isConnected ? 'Disconnect' : 'Connect'}
        </button>
      </div>
    </div>
  );
}
