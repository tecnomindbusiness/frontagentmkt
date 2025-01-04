import React from 'react';
import PersonalitySettings from './PersonalitySettings';
import LanguageSettings from './LanguageSettings';
import BehaviorSettings from './BehaviorSettings';

export default function AgentSettingsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Agent Settings</h1>
        <p className="text-gray-400 mt-2">Configure your AI agent's behavior</p>
      </div>

      <div className="grid gap-8">
        <PersonalitySettings />
        <LanguageSettings />
        <BehaviorSettings />
      </div>
    </div>
  );
}
