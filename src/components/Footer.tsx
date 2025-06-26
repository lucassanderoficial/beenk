import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Mail size={20} />, href: 'mailto:contato@beenk.com.br', label: 'Email' }
  ];

  const footerLinks = {
    Serviços: [
      'Desenvolvimento de Software Personalizado',
      'Desenvolvimento de Apps Mobile',
      'Desenvolvimento Web',
      'Serviços em Nuvem',
      'IA & Machine Learning'
    ],
    Empresa: [
      'Sobre Nós',
      'Nossa Equipe',
      'Carreiras',
      'Blog',
      'Contato'
    ],
    Recursos: [
      'Estudos de Caso',
      'Documentação',
      'Suporte',
      'Política de Privacidade',
      'Termos de Serviço'
    ]
  };

  return (
    <footer className="bg-slate-900 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/beenk (1) (1) copy.png" 
                alt="Beenk Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transformando ideias em realidade digital com tecnologia de ponta 
              e soluções inovadoras. Seu parceiro confiável para desenvolvimento de software.
            </p>
            
            <div className="mb-6 space-y-2 text-gray-300 text-sm">
              <div>
                <strong>Brasil:</strong> Av. Marquês de São Vicente, 405 - Barra Funda/SP<br />
                CEP 01139-001 - Brasil
              </div>
              <div>
                <strong>Portugal:</strong> Taguspark, Edifício Núcleo Central 100<br />
                2740-122 Porto Salvo, Portugal
              </div>
              <div className="pt-2">
                <strong>E-mail:</strong> contato@beenk.com.br<br />
                <strong>WhatsApp:</strong> 0800 145 4200
              </div>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-purple-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Beenk. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/politica-de-privacidade" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Política de Privacidade
              </Link>
              <Link to="/termos-de-servico" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Termos de Serviço
              </Link>
              <Link to="/politica-de-cookies" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Política de Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;