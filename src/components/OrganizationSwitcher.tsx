import React, { useState } from 'react';
import { Building, ChevronDown } from 'lucide-react';
import { useOrganization } from '../contexts/OrganizationContext';
import type { Organization } from '../types/organization';

export default function OrganizationSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentOrganization, setCurrentOrganization } = useOrganization();
  const [organizations, setOrganizations] = useState<Organization[]>([]);

  const handleSwitch = async (org: Organization) => {
    setCurrentOrganization(org);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
      >
        <Building size={20} />
        <span>{currentOrganization?.name}</span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-lg">
          {organizations.map(org => (
            <button
              key={org.id}
              onClick={() => handleSwitch(org)}
              className="w-full px-4 py-2 text-left hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              {org.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
