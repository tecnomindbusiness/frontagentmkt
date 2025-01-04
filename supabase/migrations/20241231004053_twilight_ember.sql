/*
  # Update existing tables for multi-tenant support

  1. Changes
    - Add organization_id to all relevant tables
    - Update RLS policies to check organization membership

  2. Security
    - Add organization-based policies
*/

-- Add organization_id to training documents
ALTER TABLE training_documents
ADD COLUMN organization_id uuid REFERENCES organizations(id);

CREATE INDEX idx_training_documents_org ON training_documents(organization_id);

-- Add organization_id to agents
ALTER TABLE agents
ADD COLUMN organization_id uuid REFERENCES organizations(id);

CREATE INDEX idx_agents_org ON agents(organization_id);

-- Update RLS policies for training documents
CREATE POLICY "Users can access their organization's documents" ON training_documents
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM organization_members
      WHERE organization_id = training_documents.organization_id
      AND user_id = auth.uid()
    )
  );

-- Update RLS policies for agents
CREATE POLICY "Users can access their organization's agents" ON agents
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM organization_members
      WHERE organization_id = agents.organization_id
      AND user_id = auth.uid()
    )
  );
