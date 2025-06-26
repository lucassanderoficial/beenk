import React from 'react';
import { Target, Users, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target size={24} />,
      title: 'Inovação',
      description: 'Permanecemos na vanguarda da tecnologia, explorando constantemente novas soluções e metodologias.'
    },
    {
      icon: <Users size={24} />,
      title: 'Colaboração',
      description: 'Trabalhamos em estreita colaboração com nossos clientes como parceiros, garantindo comunicação transparente.'
    },
    {
      icon: <Award size={24} />,
      title: 'Excelência',
      description: 'Entregamos soluções de alta qualidade que superam expectativas e impulsionam o sucesso dos negócios.'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Criatividade',
      description: 'Abordamos cada desafio com pensamento criativo e resolução inovadora de problemas.'
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sobre a <span className="text-purple-400">Beenk</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Fundada com a visão de transformar o cenário digital, a Beenk é uma empresa de 
              desenvolvimento de software de ponta que se especializa em criar soluções inovadoras 
              para empresas de todos os tamanhos.
            </p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Nossa equipe de desenvolvedores especialistas, designers e estrategistas trabalham juntos para entregar 
              soluções de software excepcionais que impulsionam o crescimento, melhoram a eficiência e criam 
              vantagens competitivas para nossos clientes. Acreditamos no poder da tecnologia 
              para transformar negócios e criar impacto significativo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-purple-400 mt-1">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">15</div>
                  <div className="text-gray-300 text-sm">Anos de Experiência</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">100Bi</div>
                  <div className="text-gray-300 text-sm">Linhas de Código</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">99+</div>
                  <div className="text-gray-300 text-sm">Clientes Satisfeitos</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">24/7</div>
                  <div className="text-gray-300 text-sm">Suporte</div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-white font-semibold mb-2">Nossa Missão</h3>
                <p className="text-gray-300 text-sm">
                  Capacitar empresas através de soluções tecnológicas inovadoras 
                  que impulsionam o crescimento e criam valor duradouro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;