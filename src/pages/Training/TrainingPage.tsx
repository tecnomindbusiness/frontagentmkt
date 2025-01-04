import DocumentList from './DocumentList';
import UploadSection from './UploadSection';

export default function TrainingPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Treinamento</h1>
        <p className="text-gray-400 mt-2">Envie documentos para treinar o seu agente de IA</p>
      </div>
      
      <div className="grid gap-8">
        <UploadSection />
        <DocumentList />
      </div>
    </div>
  );
}
