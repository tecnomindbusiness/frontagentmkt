export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface AgentStats {
  totalMessages: number;
  responseRate: number;
  activeChats: number;
  averageResponseTime: number;
}

export interface TrainingDocument {
  id: string;
  name: string;
  type: 'pdf' | 'link';
  status: 'processing' | 'completed' | 'failed';
  uploadedAt: Date;
}

export interface Agent {
  id: string;
  name: string;
  personality: string;
  languages: string[];
  isActive: boolean;
  whatsappStatus: 'connected' | 'disconnected' | 'pending';
}
