// pages/CreateOrganizationPage.tsx
import { useNavigate } from 'react-router-dom';
const CreateOrganizationPage = () => {
    const navigate = useNavigate();
    
    const handleCreateOrganization = () => {
      // Sua lógica para criar organização
      // Após criar, redirecione para o dashboard
      navigate('/');
    };
  
    return (
      <div>
        <h1>Criar Organização</h1>
        {/* Seu formulário de criação de organização */}
        <button onClick={handleCreateOrganization}>Criar</button>
      </div>
    );
  };
  
  export default CreateOrganizationPage;