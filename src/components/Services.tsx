import React from 'react';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Zap,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={32} />,
      title: 'Desenvolvimento de Software Personalizado',
      description: 'Soluções de software sob medida construídas com tecnologias de ponta para atender suas necessidades específicas.',
      features: ['Desenvolvimento full-stack', 'Integração de APIs', 'Arquitetura escalável']
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Desenvolvimento de Apps Mobile',
      description: 'Aplicações móveis nativas e multiplataforma que oferecem experiências excepcionais ao usuário.',
      features: ['iOS & Android', 'React Native', 'Desenvolvimento Flutter']
    },
    {
      icon: <Globe size={32} />,
      title: 'Desenvolvimento Web',
      description: 'Aplicações web modernas e responsivas usando os mais recentes frameworks e tecnologias.',
      features: ['React/Next.js', 'Progressive Web Apps', 'Soluções e-commerce']
    },
    {
      icon: <Database size={32} />,
      title: 'Soluções de Banco de Dados',
      description: 'Design robusto de banco de dados e otimização para aplicações de alta performance.',
      features: ['Design de banco de dados', 'Otimização de performance', 'Migração de dados']
    },
    {
      icon: <Cloud size={32} />,
      title: 'Serviços em Nuvem',
      description: 'Soluções nativas em nuvem e serviços de migração para infraestrutura escalável e confiável.',
      features: ['AWS/Azure/GCP', 'Automação DevOps', 'Microsserviços']
    },
    {
      icon: <Zap size={32} />,
      title: 'IA & Machine Learning',
      description: 'Soluções inteligentes alimentadas por inteligência artificial e aprendizado de máquina.',
      features: ['Análise preditiva', 'Processamento de linguagem natural', 'Visão computacional']
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos <span className="text-purple-400">Serviços</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oferecemos serviços abrangentes de desenvolvimento de software usando as mais recentes tecnologias 
            para ajudar seu negócio a se manter à frente da concorrência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-400 text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                Saiba Mais
                <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;