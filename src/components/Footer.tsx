
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-[#0c0c0c] text-gray-400 border-t border-[#2c2c2c]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 bg-[#43803f] rounded flex items-center justify-center">
                <span className="text-white font-bold">DZ</span>
              </div>
              <span className="text-xl font-bold text-[#43803f]">DayZ<span className="text-red-500">Cube</span></span>
            </Link>
            <p className="text-sm text-gray-500 mb-4">
              Кубический мир постапокалипсиса, где выживание – это только начало приключения.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-[#43803f] transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#43803f] transition-colors">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#43803f] transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#43803f] transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#43803f] transition-colors">
                <Icon name="Discord" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Игра</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-[#43803f] transition-colors">О игре</Link></li>
              <li><Link to="/servers" className="hover:text-[#43803f] transition-colors">Сервера</Link></li>
              <li><Link to="/maps" className="hover:text-[#43803f] transition-colors">Карты</Link></li>
              <li><Link to="/guides" className="hover:text-[#43803f] transition-colors">Гайды</Link></li>
              <li><Link to="/download" className="hover:text-[#43803f] transition-colors">Скачать</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Сообщество</h3>
            <ul className="space-y-2">
              <li><Link to="/forum" className="hover:text-[#43803f] transition-colors">Форум</Link></li>
              <li><Link to="/discord" className="hover:text-[#43803f] transition-colors">Discord</Link></li>
              <li><Link to="/wiki" className="hover:text-[#43803f] transition-colors">Wiki</Link></li>
              <li><Link to="/stream" className="hover:text-[#43803f] transition-colors">Стримы</Link></li>
              <li><Link to="/events" className="hover:text-[#43803f] transition-colors">События</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="hover:text-[#43803f] transition-colors">Центр поддержки</Link></li>
              <li><Link to="/faq" className="hover:text-[#43803f] transition-colors">FAQ</Link></li>
              <li><Link to="/report" className="hover:text-[#43803f] transition-colors">Сообщить о баге</Link></li>
              <li><Link to="/contact" className="hover:text-[#43803f] transition-colors">Контакты</Link></li>
              <li><Link to="/donate" className="hover:text-[#43803f] transition-colors">Поддержать проект</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#2c2c2c] mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-600">
            © 2025 DayZCube. Все права защищены.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-sm text-gray-600 hover:text-[#43803f]">Условия использования</Link>
            <Link to="/privacy" className="text-sm text-gray-600 hover:text-[#43803f]">Политика конфиденциальности</Link>
            <Link to="/cookies" className="text-sm text-gray-600 hover:text-[#43803f]">Политика cookie</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
