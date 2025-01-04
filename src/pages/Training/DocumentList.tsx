import { File, Link2, CheckCircle, XCircle, Clock } from 'lucide-react';
import type { TrainingDocument } from '../../types';

const documents: TrainingDocument[] = [
  {
    id: '1',
    name: 'Guia de Treinamento.pdf',
    type: 'pdf',
    status: 'completed',
    uploadedAt: new Date('2024-03-10'),
  },
  {
    id: '2',
    name: 'https://example.com/content',
    type: 'link',
    status: 'processing',
    uploadedAt: new Date('2024-03-11'),
  },
];

const StatusIcon = ({ status }: { status: TrainingDocument['status'] }) => {
  switch (status) {
    case 'completed':
      return <CheckCircle className="text-green-400" />;
    case 'failed':
      return <XCircle className="text-red-400" />;
    case 'processing':
      return <Clock className="text-yellow-400" />;
  }
};

export default function DocumentList() {
  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">Documentos de Treinamento</h2>
      
      <div className="space-y-4">
        {documents.map((doc) => (
          <div key={doc.id} className="flex items-center gap-4 p-4 bg-gray-700 rounded-lg">
            {doc.type === 'pdf' ? (
              <File className="text-gray-400" />
            ) : (
              <Link2 className="text-gray-400" />
            )}
            <div className="flex-1">
              <p className="font-medium">{doc.name}</p>
              <p className="text-sm text-gray-400">
                {doc.uploadedAt.toLocaleDateString()}
              </p>
            </div>
            <StatusIcon status={doc.status} />
          </div>
        ))}
      </div>
    </div>
  );
}
