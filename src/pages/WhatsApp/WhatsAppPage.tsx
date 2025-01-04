import QRCodeSection from './QRCodeSection';

export default function WhatsAppPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Conexão do WhatsApp</h1>
        <p className="text-gray-400 mt-2">Gerencie a integração do seu WhatsApp</p>
      </div>

      <div className="grid gap-8">
        {/* <ConnectionStatus /> */}
        <QRCodeSection />
      </div>
    </div>
  );
}
