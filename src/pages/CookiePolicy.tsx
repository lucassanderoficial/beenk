import React from 'react';
import { ArrowLeft, Cookie, Settings, BarChart, Target, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-6 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Voltar ao Início
          </Link>
          
          <div className="flex items-center mb-4">
            <Cookie className="text-purple-400 mr-3" size={32} />
            <h1 className="text-4xl font-bold text-white">Política de Cookies</h1>
          </div>
          
          <p className="text-gray-300 text-lg">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">O que são Cookies?</h2>
            <p className="text-gray-300 leading-relaxed">
              Cookies são pequenos arquivos de texto que são armazenados em seu dispositivo quando você 
              visita um site. Eles são amplamente utilizados para fazer os sites funcionarem de forma 
              mais eficiente, bem como para fornecer informações aos proprietários do site.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Como Usamos Cookies</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                O site beenk.com.br utiliza cookies para melhorar sua experiência de navegação e 
                fornecer funcionalidades personalizadas. Usamos cookies para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Manter suas preferências e configurações</li>
                <li>Analisar como você usa nosso site</li>
                <li>Melhorar o desempenho e funcionalidade do site</li>
                <li>Personalizar conteúdo e anúncios</li>
                <li>Fornecer recursos de mídia social</li>
              </ul>
            </section>

            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Tipos de Cookies que Utilizamos</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-white mb-2 flex items-center">
                    <Settings className="text-purple-400 mr-2" size={18} />
                    Cookies Essenciais
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Estes cookies são necessários para o funcionamento básico do site. Eles permitem 
                    que você navegue pelo site e use recursos essenciais como áreas seguras.
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    <strong>Duração:</strong> Sessão | <strong>Finalidade:</strong> Funcionalidade básica
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-white mb-2 flex items-center">
                    <BarChart className="text-blue-400 mr-2" size={18} />
                    Cookies de Análise
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Estes cookies nos ajudam a entender como os visitantes interagem com nosso site, 
                    coletando informações de forma anônima sobre páginas visitadas e tempo de permanência.
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    <strong>Duração:</strong> 2 anos | <strong>Finalidade:</strong> Google Analytics
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-white mb-2 flex items-center">
                    <Target className="text-green-400 mr-2" size={18} />
                    Cookies de Funcionalidade
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Estes cookies permitem que o site lembre de escolhas que você faz e forneça 
                    recursos aprimorados e mais personalizados.
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    <strong>Duração:</strong> 1 ano | <strong>Finalidade:</strong> Preferências do usuário
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-white mb-2 flex items-center">
                    <Shield className="text-orange-400 mr-2" size={18} />
                    Cookies de Marketing
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Estes cookies são usados para rastrear visitantes em sites para exibir anúncios 
                    relevantes e envolventes para o usuário individual.
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    <strong>Duração:</strong> 90 dias | <strong>Finalidade:</strong> Publicidade direcionada
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Cookies de Terceiros</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Nosso site pode conter cookies de terceiros. Estes são definidos por domínios diferentes 
                do nosso e incluem:
              </p>
              
              <div className="space-y-4">
                <div className="bg-slate-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Google Analytics</h4>
                  <p className="text-gray-300 text-sm">
                    Usado para analisar o tráfego do site e comportamento dos usuários.
                  </p>
                </div>
                
                <div className="bg-slate-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Google Fonts</h4>
                  <p className="text-gray-300 text-sm">
                    Usado para carregar fontes personalizadas para melhor apresentação do site.
                  </p>
                </div>
                
                <div className="bg-slate-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Redes Sociais</h4>
                  <p className="text-gray-300 text-sm">
                    Cookies de plataformas como LinkedIn, Twitter para funcionalidades de compartilhamento.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Gerenciamento de Cookies</h3>
              <div className="text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  Você pode controlar e/ou excluir cookies conforme desejar. Você pode excluir todos 
                  os cookies que já estão em seu computador e pode configurar a maioria dos navegadores 
                  para impedir que sejam colocados.
                </p>
                
                <div className="bg-slate-800/30 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-3">Como desabilitar cookies por navegador:</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Chrome:</strong> Configurações → Privacidade e segurança → Cookies</li>
                    <li><strong>Firefox:</strong> Opções → Privacidade e Segurança → Cookies</li>
                    <li><strong>Safari:</strong> Preferências → Privacidade → Cookies</li>
                    <li><strong>Edge:</strong> Configurações → Cookies e permissões do site</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4">
                  <p className="text-yellow-200 text-sm">
                    <strong>Aviso:</strong> Se você desabilitar cookies, algumas funcionalidades do nosso 
                    site podem não funcionar corretamente.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Consentimento</h3>
              <p className="text-gray-300 leading-relaxed">
                Ao continuar a usar nosso site, você consente com o uso de cookies conforme descrito 
                nesta política. Você pode retirar seu consentimento a qualquer momento alterando as 
                configurações do seu navegador ou entrando em contato conosco.
              </p>
            </section>

            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Atualizações desta Política</h3>
              <p className="text-gray-300 leading-relaxed">
                Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em 
                nossos serviços ou requisitos legais. Recomendamos que você revise esta página 
                regularmente para se manter informado sobre nosso uso de cookies.
              </p>
            </section>

            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Contato</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Se você tiver dúvidas sobre nossa Política de Cookies, entre em contato:
              </p>
              <div className="text-gray-300">
                <p><strong>E-mail:</strong> contato@beenk.com.br</p>
                <p><strong>WhatsApp:</strong> 0800 145 4200</p>
                <p><strong>Site:</strong> beenk.com.br</p>
                <p><strong>Endereço Brasil:</strong> Av. Marquês de São Vicente, 405 - Barra Funda/SP - CEP 01139-001</p>
                <p><strong>Endereço Portugal:</strong> Taguspark, Edifício Núcleo Central 100, 2740-122 Porto Salvo</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;