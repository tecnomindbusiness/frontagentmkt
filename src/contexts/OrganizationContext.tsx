import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import type { Organization, OrganizationContext as OrgContextType } from '../types/organization';

const OrganizationContext = createContext<OrgContextType>({
  currentOrganization: null,
  setCurrentOrganization: () => {},
  userRole: null,
});

export function OrganizationProvider({ children }: { children: React.ReactNode }) {
  const [currentOrganization, setCurrentOrganization] = useState<Organization | null>(null);
  const [userRole, setUserRole] = useState<OrgContextType['userRole']>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUserOrganization = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        navigate('/login');
        return;
      }

      // Get user's first organization
      const { data: memberData } = await supabase
        .from('organization_members')
        .select('organizations (*))')
        .eq('user_id', user.id)
        .single();

      if (memberData?.organizations) {
        setCurrentOrganization(memberData.organizations);
        setUserRole(memberData.role);
      } else {
        // navigate('/create-organization');
      }
    };

    loadUserOrganization();
  }, [navigate]);

  return (
    <OrganizationContext.Provider value={{ 
      currentOrganization, 
      setCurrentOrganization,
      userRole 
    }}>
      {children}
    </OrganizationContext.Provider>
  );
}

export const useOrganization = () => useContext(OrganizationContext);
