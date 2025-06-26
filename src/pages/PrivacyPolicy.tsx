import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Database, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
            <Shield className="text-purple-400 mr-3" size={32} />
            <h1 className="text-4xl font-bold text-white">Política de Privacidade</h1>
          </div>
          
          <p className="text-gray-300 text-lg">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <Eye className="text-purple-400 mr-2" size={24} />
              Introdução
            </h2>
            <p className="text-gray-300 leading-relaxed">
              A Beenk ("nós", "nosso" ou "empresa") está comprometida em proteger e respeitar sua privacidade. 
              Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações 
              quando você visita nosso site beenk.com.br ou utiliza nossos serviços.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Database className="text-purple-400 mr-2" size={20} />
                Informações que Coletamos
              </h3>
              <div className="text-gray-300 space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Informações Pessoais</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Nome completo</li>
                    <li>Endereço de e-mail</li>
                    <li>Número de telefone</li>
                    <li>Nome da empresa</li>
                    <li>Cargo ou função</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-2">Informações Técnicas</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    <li>Endereço IP</li>
                    <li>Tipo de navegador e versão</li>
                    <li>Sistema operacional</li>
                    <li>Páginas visitadas e tempo de permanência</li>
                    <li>Dados de cookies e tecnologias similares</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Como Usamos suas Informações</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Responder às suas consultas e solicitações</li>
                <li>Enviar comunicações relacionadas aos nossos serviços</li>
                <li>Personalizar sua experiência em nosso site</li>
                <li>Analisar o uso do site para melhorias</li>
                <li>Cumprir obrigações legais e regulamentares</li>
              </ul>
            </section>

            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Lock className="text-purple-400 mr-2" size={20} />
                Proteção de Dados
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger 
                suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Criptografia SSL/TLS para transmissão de dados</li>
                <li>Controles de acesso rigorosos</li>
                <li>Monitoramento regular de segurança</li>
                <li>Treinamento de funcionários sobre proteção de dados</li>
              </ul>
            </section>

            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Seus Direitos</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Confirmação da existência de tratamento de dados</li>
                <li>Acesso aos seus dados pessoais</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                <li>Anonimização, bloqueio ou eliminação de dados</li>
                <li>Portabilidade dos dados</li>
                <li>Eliminação dos dados tratados com consentimento</li>
                <li>Revogação do consentimento</li>
              </ul>
            </section>

            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Cookies</h3>
              <p className="text-gray-300 leading-relaxed">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site. 
                Para mais informações sobre como usamos cookies, consulte nossa 
                <Link to="/politica-de-cookies" className="text-purple-400 hover:text-purple-300 ml-1">
                  Política de Cookies
                </Link>.
              </p>
            </section>

            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Mail className="text-purple-400 mr-2" size={20} />
                Contato
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus direitos, 
                entre em contato conosco:
              </p>
              <div className="text-gray-300">
                <p><strong>E-mail:</strong> contato@beenk.com.br</p>
                <p><strong>WhatsApp:</strong> 0800 145 4200</p>
                <p><strong>Endereço Brasil:</strong> Av. Marquês de São Vicente, 405 - Barra Funda/SP - CEP 01139-001</p>
                <p><strong>Endereço Portugal:</strong> Taguspark, Edifício Núcleo Central 100, 2740-122 Porto Salvo</p>
              </div>
            </section>

            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Alterações nesta Política</h3>
              <p className="text-gray-300 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre 
                mudanças significativas publicando a nova política em nosso site com uma nova data 
                de "última atualização".
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;