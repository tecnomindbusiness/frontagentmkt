# Configurando o Supabase e Conectando ao Projeto

## 1. Criar uma conta no Supabase

1. Acesse [supabase.com](https://supabase.com).
2. Clique em **"Start your project"**.
3. Faça login com GitHub ou crie uma conta.

## 2. Criar um novo projeto

1. Clique em **"New Project"**.
2. Escolha um nome para o projeto.
3. Escolha uma senha forte para o banco de dados.
4. Selecione a região mais próxima.
5. Clique em **"Create new project"**.

## 3. Obter as credenciais

1. No dashboard do projeto, clique em **"Project Settings"** (ícone de engrenagem).
2. Na seção **"API"**, você encontrará:
   - **Project URL**: Use como `VITE_SUPABASE_URL`.
   - **Project API keys**: Use a chave **"anon public"** como `VITE_SUPABASE_ANON_KEY`.

## 4. Configurar o arquivo `.env`

1. Na raiz do projeto, crie/edite o arquivo `.env` com os seguintes valores:

```env
VITE_SUPABASE_URL=sua_url_do_projeto
VITE_SUPABASE_ANON_KEY=sua_chave_publica_anonima
```

## 5. Executar as migrações

1. No Supabase Dashboard, vá para **"SQL Editor"**.
2. Cole e execute cada arquivo de migração na ordem:
   - `20241231004045_nameless_leaf.sql`
   - `20241231004053_twilight_ember.sql`
   - `20241231011143_pink_truth.sql`

## 6. Configurar autenticação

1. No Supabase Dashboard, vá para **"Authentication"** > **"Providers"**.
2. Habilite **"Email"**.
3. Desabilite **"Confirm email"**.
4. Configure o redirecionamento para sua URL local:

```
http://localhost:5173/**
```

## 7. Testar a conexão

1. Execute o projeto:

```bash
npm run dev
```

2. Acesse [http://localhost:5173/login](http://localhost:5173/login).
3. Crie uma conta ou faça login.
4. Verifique se está sendo redirecionado para o dashboard.

## 8. Verificar as tabelas

1. No Supabase Dashboard, vá para **"Table Editor"**.
2. Confirme se todas as tabelas foram criadas:
   - `organizations`
   - `organization_members`
   - `user_profiles`
   - `whatsapp_instances`
   - `ai_agent_configs`

## Observação

O sistema está configurado para multi-tenancy, e os dados serão automaticamente filtrados por organização através das políticas **RLS** configuradas.

---

Precisa de ajuda com algum desses passos?

181293Palp


Project URL: 

https://qlhadavmofwcknkrjfkb.supabase.co

Project API Keys

- anonpublic:

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsaGFkYXZtb2Z3Y2tua3JqZmtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU2MDg5OTcsImV4cCI6MjA1MTE4NDk5N30.NBg6RV3WDwXxN2Y27iegZVOPnD9mJ4EYcec7_EWcT-k



- service_rolesecret :
