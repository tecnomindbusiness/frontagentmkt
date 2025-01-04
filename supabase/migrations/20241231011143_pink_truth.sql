/*
  # Initial Schema Setup

  1. New Tables
    - `user_profiles`
      - Extended user information
      - Linked to auth.users
    - `whatsapp_instances`
      - WhatsApp connection details per user
    - `ai_agent_configs`
      - AI agent settings per user

  2. Security
    - Enable RLS on all tables
    - Add policies for user-specific access
*/

-- User Profiles
CREATE TABLE user_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name text,
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- WhatsApp Instances
CREATE TABLE whatsapp_instances (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid REFERENCES organizations(id) ON DELETE CASCADE,
  instance_name text NOT NULL,
  api_url text NOT NULL,
  api_key text NOT NULL,
  status text DEFAULT 'disconnected' CHECK (status IN ('connected', 'disconnected', 'pending')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- AI Agent Configurations
CREATE TABLE ai_agent_configs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id uuid REFERENCES organizations(id) ON DELETE CASCADE,
  agent_name text NOT NULL,
  personality text,
  languages text[] DEFAULT ARRAY['en'],
  response_time_ms integer DEFAULT 2000,
  use_emojis boolean DEFAULT false,
  auto_greetings boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE whatsapp_instances ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_agent_configs ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view their own profile"
  ON user_profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON user_profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Users can access their organization's WhatsApp instances"
  ON whatsapp_instances FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM organization_members
      WHERE organization_id = whatsapp_instances.organization_id
      AND user_id = auth.uid()
    )
  );

CREATE POLICY "Users can access their organization's AI agent configs"
  ON ai_agent_configs FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM organization_members
      WHERE organization_id = ai_agent_configs.organization_id
      AND user_id = auth.uid()
    )
  );
