export interface Organization {
  id: string;
  name: string;
  slug: string;
  logoUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrganizationMember {
  id: string;
  organizationId: string;
  userId: string;
  role: 'owner' | 'admin' | 'member';
  createdAt: Date;
}

export interface OrganizationContext {
  currentOrganization: Organization | null;
  setCurrentOrganization: (org: Organization | null) => void;
  userRole: OrganizationMember['role'] | null;
}
