import ConfiguracoesDePersonalidade from './PersonalitySettings';
import ConfiguracoesDeIdioma from './LanguageSettings';
import ConfiguracoesDeComportamento from './BehaviorSettings';

export default function PaginaDeConfiguracoesDoAgente() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Configurações do Agente</h1>
        <p className="text-gray-400 mt-2">Configure o comportamento do seu agente de IA</p>
      </div>

      <div className="grid gap-8">
        <ConfiguracoesDePersonalidade />
        <ConfiguracoesDeIdioma />
        <ConfiguracoesDeComportamento />
      </div>
    </div>
  );
}
