import React, { useEffect, useState } from 'react';
import { MessageCircle, Users, Clock, Zap } from 'lucide-react';
import StatsCard from '../components/Dashboard/StatsCard';

export default function Dashboard() {
  const [stats, setStat] = useState<{ [key: string]: number }>({});
  const [pahtImage, setPathImage] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8081/instance/fetchInstances', {
          method: 'GET',
          headers: {
            'apikey': `429383C4C977575CAAFCCE10F7D57E23`,
            'Content-Type': 'application/json',
          },
        });

        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
          throw new Error(`Network response was not ok. Status: ${response.status}`);
        }

        const data = await response.json();
       
        if(data[0].connectionStatus == 'open'){
          setStat(data[0]._count);
          setPathImage(data[0].profilePicUrl);
          console.log('Response data:', data);
        };
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(stats);

  // Determinar os ícones para cada título
  const iconMap: { [key: string]: React.ElementType } = {
    Message: MessageCircle,
    Contact: Users,
    Chat: Zap,
  };

  return (
    <div className="relative">
      {/* Imagem de Perfil no Canto Superior Direito */}
      <img
        src={pahtImage} // Substitua pelo caminho da imagem no seu diretório
        alt="Profile"
        className="w-12 h-12 rounded-full border-2 border-gray-300 absolute top-4 right-4"
      />

      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-400 mt-2">Monitor your AI agent's performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {
          // Iterando sobre o objeto stats e passando o ícone correto
          Object.entries(stats).map(([key, value]) => {
            const Icon = iconMap[key];
            return (
              <StatsCard
                key={key}
                title={key}
                value={value}
                icon={Icon}
                trend={{ value: 5, isPositive: true }} // Exemplo de trend, pode ser alterado conforme necessário
              />
            );
          })
        }
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Chart */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Message Activity</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart will be implemented here
          </div>
        </div>

        {/* Recent Interactions */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Interactions</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-gray-700">
                <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
                  <Users size={20} className="text-gray-400" />
                </div>
                <div>
                  <p className="font-medium">User #{i}</p>
                  <p className="text-sm text-gray-400">Last message 2m ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
