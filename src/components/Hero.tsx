import React from 'react';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-[150px] mb-[150px]">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="text-purple-400 mr-2" size={32} />
          <span className="text-purple-400 font-semibold text-lg">Tecnologia de Ponta</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Transformando Ideias em
          <span className="block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Realidade Digital
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Somos a Beenk, uma empresa de desenvolvimento de software inovadora que cria soluções 
          utilizando as mais recentes tecnologias para impulsionar seu negócio.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center">
            Iniciar Seu Projeto
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          
          <button className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center">
            <Code2 className="mr-2" size={20} />
            Ver Nosso Trabalho
          </button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">15</div>
            <div className="text-gray-300">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">99+</div>
            <div className="text-gray-300">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">100Bi</div>
            <div className="text-gray-300">Linhas de Código</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;