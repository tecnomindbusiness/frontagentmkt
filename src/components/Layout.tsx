import { Home, Book, MessageCircle, Settings, User } from 'lucide-react';
import { Link, useLocation} from 'react-router-dom';
import OrganizationSwitcher from './OrganizationSwitcher';
import { ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';
// Configuração do Supabase

const navItems = [
  { icon: Home, label: 'Painel', path: '/' },
  { icon: Book, label: 'Trainamento', path: '/training' },
  { icon: MessageCircle, label: 'WhatsApp', path: '/whatsapp' },
  { icon: Settings, label: 'Configurações', path: '/agent' },
  { icon: User, label: 'Perfil', path: '/profile' },
];

interface LayoutProps {
  children: ReactNode;
}



const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  const navigate = useNavigate();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Erro ao fazer logout:', error.message);
    } else {
      navigate('/login'); // Redireciona para a página de login
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-800">
        <div className="p-4 border-b border-gray-800">
          <OrganizationSwitcher />
        </div>
        <nav className="p-4">
          {navItems.map(({ icon: Icon, label, path }) => (
            <Link
              key={path}
              to={path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-colors ${
                location.pathname === path
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-400 hover:bg-gray-800'
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full px-4 py-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
