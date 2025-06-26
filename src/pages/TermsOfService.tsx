import React from 'react';
import { ArrowLeft, FileText, Scale, AlertTriangle, Users, Gavel } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
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
            <FileText className="text-purple-400 mr-3" size={32} />
            <h1 className="text-4xl font-bold text-white">Termos de Serviço</h1>
          </div>
          
          <p className="text-gray-300 text-lg">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
              <Scale className="text-purple-400 mr-2" size={24} />
              Aceitação dos Termos
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Ao acessar e usar o site beenk.com.br e nossos serviços, você concorda em cumprir e estar 
              vinculado a estes Termos de Serviço. Se você não concordar com qualquer parte destes termos, 
              não deve usar nossos serviços.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Definições</h3>
              <div className="text-gray-300 space-y-3">
                <p><strong>"Beenk"</strong> refere-se à nossa empresa de desenvolvimento de software.</p>
                <p><strong>"Serviços"</strong> refere-se a todos os serviços oferecidos pela Beenk, incluindo desenvolvimento de software, consultoria e suporte.</p>
                <p><strong>"Cliente"</strong> refere-se a qualquer pessoa ou entidade que utiliza nossos serviços.</p>
                <p><strong>"Site"</strong> refere-se ao website beenk.com.br e todas as suas páginas.</p>
              </div>
            </section>

            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Descrição dos Serviços</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                A Beenk oferece serviços de desenvolvimento de software, incluindo mas não limitado a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Desenvolvimento de software personalizado</li>
                <li>Desenvolvimento de aplicações móveis</li>
                <li>Desenvolvimento web</li>
                <li>Soluções em nuvem</li>
                <li>Serviços de IA e Machine Learning</li>
                <li>Consultoria em tecnologia</li>
                <li>Suporte e manutenção</li>
              </ul>
            </section>

            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Users className="text-purple-400 mr-2" size={20} />
                Responsabilidades do Cliente
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Fornecer informações precisas e completas</li>
                <li>Cooperar durante o processo de desenvolvimento</li>
                <li>Efetuar pagamentos conforme acordado</li>
                <li>Respeitar os direitos de propriedade intelectual</li>
                <li>Usar os serviços de forma legal e ética</li>
                <li>Manter a confidencialidade de informações sensíveis</li>
              </ul>
            </section>

            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Propriedade Intelectual</h3>
              <div className="text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  Todos os direitos de propriedade intelectual relacionados aos serviços prestados pela Beenk 
                  serão definidos em contrato específico para cada projeto.
                </p>
                <p className="leading-relaxed">
                  O código desenvolvido especificamente para o cliente será de propriedade do cliente, 
                  salvo disposição contrária em contrato. Frameworks, bibliotecas e componentes reutilizáveis 
                  desenvolvidos pela Beenk permanecem como propriedade da empresa.
                </p>
              </div>
            </section>

            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Pagamentos e Faturamento</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Os preços serão definidos em proposta comercial específica</li>
                <li>Pagamentos devem ser efetuados conforme cronograma acordado</li>
                <li>Atrasos no pagamento podem resultar em suspensão dos serviços</li>
                <li>Taxas adicionais podem ser aplicadas para alterações de escopo</li>
                <li>Reembolsos serão avaliados caso a caso</li>
              </ul>
            </section>

            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <AlertTriangle className="text-purple-400 mr-2" size={20} />
                Limitação de Responsabilidade
              </h3>
              <div className="text-gray-300 space-y-4">
                <p className="leading-relaxed">
                  A Beenk não será responsável por danos indiretos, incidentais, especiais ou consequenciais 
                  decorrentes do uso de nossos serviços.
                </p>
                <p className="leading-relaxed">
                  Nossa responsabilidade total não excederá o valor pago pelo cliente pelos serviços 
                  específicos que deram origem à reclamação.
                </p>
              </div>
            </section>

            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Confidencialidade</h3>
              <p className="text-gray-300 leading-relaxed">
                Ambas as partes concordam em manter confidenciais todas as informações proprietárias 
                e sensíveis compartilhadas durante a prestação dos serviços. Esta obrigação permanece 
                válida mesmo após o término do relacionamento comercial.
              </p>
            </section>

            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Rescisão</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Qualquer parte pode rescindir o contrato com aviso prévio de 30 dias</li>
                <li>Rescisão imediata pode ocorrer em caso de violação material dos termos</li>
                <li>Pagamentos por serviços já prestados permanecem devidos</li>
                <li>Obrigações de confidencialidade sobrevivem à rescisão</li>
              </ul>
            </section>

            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Gavel className="text-purple-400 mr-2" size={20} />
                Lei Aplicável
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Estes Termos de Serviço são regidos pelas leis brasileiras. Qualquer disputa será 
                resolvida nos tribunais competentes de São Paulo, SP.
              </p>
            </section>

            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Contato</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Para questões relacionadas a estes Termos de Serviço, entre em contato:
              </p>
              <div className="text-gray-300">
                <p><strong>E-mail:</strong> contato@beenk.com.br</p>
                <p><strong>WhatsApp:</strong> 0800 145 4200</p>
                <p><strong>Endereço Brasil:</strong> Av. Marquês de São Vicente, 405 - Barra Funda/SP - CEP 01139-001</p>
                <p><strong>Endereço Portugal:</strong> Taguspark, Edifício Núcleo Central 100, 2740-122 Porto Salvo</p>
              </div>
            </section>

            <section className="bg-slate-900/30 border border-purple-500/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Alterações nos Termos</h3>
              <p className="text-gray-300 leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações 
                entrarão em vigor imediatamente após a publicação no site. O uso continuado dos 
                serviços constitui aceitação dos termos modificados.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;