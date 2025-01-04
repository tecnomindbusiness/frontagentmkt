import { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

export default function QRCodeSection() {
  const [qrCodeUrl, setQrCodeUrl] = useState<string | null>(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); 
  const [isConnected, setIsConnected] = useState(false); 

  useEffect(() => {
    fetchQRCode(); 
  }, []);

  const fetchQRCode = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://34.95.195.215:8081/instance/connect/frontzap', {
        method: 'GET',
        headers: {
          'apikey': `429383C4C977575CAAFCCE10F7D57E23`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response data:', data); // Loga a resposta completa para depuração

      // Verifica o estado de "instance" e se está "open"
      if (data && data.instance && data.instance.state === 'open') {
        setIsConnected(true); // Define como conectado
        setQrCodeUrl(null); // Esconde o QR Code
      } else if (data && data.base64) {
        const base64Data = data.base64;
        if (base64Data && base64Data.startsWith('data:image/png;base64,')) {
          setQrCodeUrl(base64Data); // Se a base64 for válida, define a URL da imagem
        } else {
          console.error('Base64 is malformed or missing prefix');
          setError('QR Code base64 is malformed');
        }
      } else {
        console.error('QR Code base64 not found or malformed response:', data);
        setError('QR Code base64 not found');
      }
    } catch (error: any) {
      console.error('Error fetching QR Code:', error);
      if (error instanceof Error) {
        if (error instanceof Error) {
          if (error instanceof Error) {
            setError(`Error: ${error.message}`);
          } else {
            setError('An unknown error occurred');
          }
        } else {
          setError('An unknown error occurred');
        }
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const refreshQRCode = () => {
    fetchQRCode(); // Rechama a função de consulta para obter um novo QR Code
  };

  const disconnect = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://34.95.195.215:8081/instance/logout/frontzap', {
        method: 'DELETE',
        headers: {
          'apikey': `429383C4C977575CAAFCCE10F7D57E23`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Disconnect response data:', data);

      if (data && data.instance && data.instance.state === 'closed') {
        setIsConnected(false); // Marca como desconectado
        setQrCodeUrl(null); // Limpa o QR Code
        // Alternativa para recarregar a página
        window.location.href = window.location.href; // Redefine o URL para forçar o recarregamento
      } else {
        setError('Failed to disconnect');
      }
    } catch (error: any) {
      console.error('Error disconnecting:', error);
      setError(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">WhatsApp QR Code</h2>
      
      <div className="flex flex-col items-center">
        <div className="bg-white p-4 rounded-lg mb-6">
          {loading ? (
            <p className="text-gray-400">Loading QR Code...</p>
          ) : isConnected ? (
            <p className="text-green-500">Connected successfully!</p>
          ) : qrCodeUrl ? (
            <img
              src={qrCodeUrl}
              alt="QR Code"
              className="w-64 h-64 object-contain"
            />
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <p className="text-red-500">Failed to load QR Code</p>
          )}
        </div>
        
        {!isConnected && !loading && (
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              Scan this QR code with WhatsApp to connect your agent
            </p>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
              onClick={refreshQRCode}
            >
              <RefreshCw size={20} />
              Refresh QR Code
            </button>
          </div>
        )}

        {isConnected && !loading && (
          <div className="text-center mt-4">
            <button
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-colors"
              onClick={disconnect}
            >
              Disconnect
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
