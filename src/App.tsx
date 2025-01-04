import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { OrganizationProvider } from './contexts/OrganizationContext';
import PrivateRoute from './components/PrivateRoute';
import Layout from './components/Layout';
import LoginPage from './pages/auth/LoginPage';
import Dashboard from './pages/Dashboard';
import TrainingPage from './pages/Training/TrainingPage';
import WhatsAppPage from './pages/WhatsApp/WhatsAppPage';
import AgentSettingsPage from './pages/AgentSettings/AgentSettingsPage';
import ProfilePage from './pages/Profile/ProfilePage';
import CadastroPage from './pages/auth/CadastroPage';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/resgistro" element={<CadastroPage />} />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <OrganizationProvider>
                  <Layout>
                    <Routes>
                      <Route index element={<Dashboard />} />
                      <Route path="training" element={<TrainingPage />} />
                      <Route path="whatsapp" element={<WhatsAppPage />} />
                      <Route path="agent" element={<AgentSettingsPage />} />
                      <Route path="profile" element={<ProfilePage />} />
                    </Routes>
                  </Layout>
                </OrganizationProvider>
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
