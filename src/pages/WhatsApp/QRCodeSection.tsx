import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

export default function QRCodeSection() {
  const [qrCodeUrl, setQrCodeUrl] = useState('http://127.0.0.1:8000/qrcode/?data=teste');

  const refreshQRCode = () => {
    // Adiciona um parâmetro dinâmico para evitar cache
    const timestamp = Date.now();
    setQrCodeUrl(`http://127.0.0.1:8000/qrcode/?data=teste${timestamp}`);
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">WhatsApp QR Code</h2>
      
      <div className="flex flex-col items-center">
        <div className="bg-white p-4 rounded-lg mb-6">
          <img
            src={qrCodeUrl}
            alt="QR Code"
            className="w-64 h-64 object-contain"
          />
        </div>
        
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
      </div>
    </div>
  );
}
