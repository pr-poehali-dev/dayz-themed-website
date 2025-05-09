
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-[#151619] border-t border-[#2d2e33] pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* About Site */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-[#62c555] text-white font-bold text-xl px-3 py-1.5 rounded-sm mr-2">DayZ</div>
              <div className="text-white font-bold text-xl">AVR</div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Первый русскоязычный портал, посвященный игре DayZ. Здесь вы найдете последние новости, 
              гайды, информацию о серверах и сможете стать частью нашего сообщества выживших.
            </p>
            <div className="flex items-center space-x-3">
              <a href="#" className="text-gray-400 hover:text-[#62c555] transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#62c555] transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#62c555] transition-colors">
                <Icon name="Youtube" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#62c555] transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#62c555] transition-colors">
                <Icon name="Discord" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Навигация</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-[#62c555] transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-[#62c555] transition-colors">Новости</Link>
              </li>
              <li>
                <Link to="/servers" className="hover:text-[#62c555] transition-colors">Сервера</Link>
              </li>
              <li>
                <Link to="/forum" className="hover:text-[#62c555] transition-colors">Форум</Link>
              </li>
              <li>
                <Link to="/wiki" className="hover:text-[#62c555] transition-colors">Wiki</Link>
              </li>
              <li>
                <Link to="/guides" className="hover:text-[#62c555] transition-colors">Гайды</Link>
              </li>
              <li>
                <Link to="/donate" className="hover:text-[#62c555] transition-colors">Поддержать проект</Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-white font-bold mb-4">Категории</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/category/updates" className="hover:text-[#62c555] transition-colors">Обновления</Link>
              </li>
              <li>
                <Link to="/category/guides" className="hover:text-[#62c555] transition-colors">Гайды и советы</Link>
              </li>
              <li>
                <Link to="/category/mods" className="hover:text-[#62c555] transition-colors">Моды</Link>
              </li>
              <li>
                <Link to="/category/maps" className="hover:text-[#62c555] transition-colors">Карты</Link>
              </li>
              <li>
                <Link to="/category/servers" className="hover:text-[#62c555] transition-colors">Обзоры серверов</Link>
              </li>
              <li>
                <Link to="/category/community" className="hover:text-[#62c555] transition-colors">Сообщество</Link>
              </li>
              <li>
                <Link to="/category/esports" className="hover:text-[#62c555] transition-colors">Киберспорт</Link>
              </li>
            </ul>
          </div>
          
          {/* Stay Connected */}
          <div>
            <h3 className="text-white font-bold mb-4">Будьте в курсе</h3>
            <p className="text-gray-400 text-sm mb-4">
              Подпишитесь на нашу рассылку, чтобы первыми узнавать о новостях, обновлениях и эксклюзивных событиях.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="flex-1 bg-[#1d1e21] border border-[#2d2e33] text-white py-2 px-3 rounded-l-sm focus:outline-none focus:border-[#62c555]"
              />
              <button className="bg-[#62c555] text-white py-2 px-4 rounded-r-sm hover:bg-[#4fa446] transition-colors">
                <Icon name="Send" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#2d2e33] pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 DayZ AVR. Все права защищены. DayZ является зарегистрированной торговой маркой Bohemia Interactive.
          </p>
          <div className="flex space-x-4 text-gray-500 text-sm">
            <Link to="/terms" className="hover:text-[#62c555] transition-colors">Условия использования</Link>
            <Link to="/privacy" className="hover:text-[#62c555] transition-colors">Политика конфиденциальности</Link>
            <Link to="/contact" className="hover:text-[#62c555] transition-colors">Контакты</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
