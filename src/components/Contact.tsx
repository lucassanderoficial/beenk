import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'E-mail',
      details: 'contato@beenk.com.br',
      link: 'mailto:contato@beenk.com.br'
    },
    {
      icon: <Phone size={24} />,
      title: 'WhatsApp',
      details: '0800 145 4200',
      link: 'https://wa.me/5508001454200'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Localização',
      details: 'São Paulo, SP - Brasil',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Entre em <span className="text-purple-400">Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para transformar suas ideias em realidade? Vamos discutir seu projeto 
            e explorar como podemos ajudar seu negócio a crescer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Envie-nos uma mensagem</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
                <h4 className="text-xl font-semibold text-white mb-2">Mensagem Enviada!</h4>
                <p className="text-gray-300">Retornaremos em até 24 horas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-gray-300 mb-2 font-medium">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Sua empresa"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-800/50 border border-purple-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                    placeholder="Conte-nos sobre seu projeto..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Enviar Mensagem
                  <Send className="ml-2" size={18} />
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Informações de Contato</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Estamos aqui para ajudar você a dar vida à sua visão. Entre em contato conosco através 
                de qualquer um dos canais abaixo, e vamos começar a construir algo incrível juntos.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-slate-900/30 border border-purple-500/20 rounded-lg hover:border-purple-500/40 transition-all duration-300 group"
                >
                  <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-gray-300">{info.details}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 rounded-xl p-6 border border-purple-500/20">
              <h4 className="text-white font-semibold mb-3">Por que Escolher a Beenk?</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Equipe especialista com mais de 15 anos de experiência
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Soluções de tecnologia de ponta
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  Suporte e manutenção 24/7
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  99+ clientes satisfeitos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;