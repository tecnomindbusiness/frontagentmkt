import React from 'react';
import ConnectionStatus from './ConnectionStatus';
import QRCodeSection from './QRCodeSection';

export default function WhatsAppPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">WhatsApp Connection</h1>
        <p className="text-gray-400 mt-2">Manage your WhatsApp integration</p>
      </div>

      <div className="grid gap-8">
        {/* <ConnectionStatus /> */}
        <QRCodeSection />
      </div>
    </div>
  );
}
