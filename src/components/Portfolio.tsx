import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Plataforma E-Commerce',
      description: 'Uma solução de e-commerce moderna e escalável com análises avançadas e recomendações alimentadas por IA.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      category: 'Aplicação Web',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'App de Banking Mobile',
      description: 'Aplicação bancária móvel segura com autenticação biométrica e transações em tempo real.',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Stripe'],
      category: 'App Mobile',
      image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Dashboard de Analytics com IA',
      description: 'Dashboard inteligente fornecendo insights em tempo real e análises preditivas para dados empresariais.',
      technologies: ['Vue.js', 'Python', 'TensorFlow', 'Docker'],
      category: 'AI/ML',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Sistema de Gestão de Saúde',
      description: 'Plataforma abrangente de saúde para gestão de pacientes e serviços de telemedicina.',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'WebRTC'],
      category: 'Empresarial',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Plataforma de Monitoramento IoT',
      description: 'Sistema de monitoramento e controle em tempo real para dispositivos IoT com capacidades avançadas de alerta.',
      technologies: ['Next.js', 'MQTT', 'InfluxDB', 'Grafana'],
      category: 'IoT',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Carteira Blockchain',
      description: 'Carteira de criptomoedas segura com suporte multi-chain e integração DeFi.',
      technologies: ['React', 'Web3.js', 'Solidity', 'IPFS'],
      category: 'Blockchain',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nosso <span className="text-purple-400">Portfólio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore nossos projetos mais recentes e veja como ajudamos empresas 
            a transformar suas ideias em soluções digitais de sucesso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <button className="text-purple-400 hover:text-purple-300 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                    Ver Detalhes
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                  
                  <div className="flex space-x-2">
                    <button className="text-gray-400 hover:text-purple-400 transition-colors">
                      <ExternalLink size={18} />
                    </button>
                    <button className="text-gray-400 hover:text-purple-400 transition-colors">
                      <Github size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Ver Todos os Projetos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;