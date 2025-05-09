
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-[#1d1e21] border-b border-[#2d2e33]">
      {/* Top bar with auth/social links */}
      <div className="bg-[#151619] py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-[#62c555] text-sm flex items-center gap-1">
              <Icon name="LogIn" className="h-3.5 w-3.5" />
              <span>Войти</span>
            </a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-[#62c555] text-sm flex items-center gap-1">
              <Icon name="UserPlus" className="h-3.5 w-3.5" />
              <span>Регистрация</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="text-gray-400 hover:text-[#62c555]">
              <Icon name="Facebook" className="h-4 w-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#62c555]">
              <Icon name="Youtube" className="h-4 w-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#62c555]">
              <Icon name="Instagram" className="h-4 w-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#62c555]">
              <Icon name="Twitter" className="h-4 w-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#62c555]">
              <Icon name="MessageCircle" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Main header with logo and navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="bg-[#62c555] text-white font-bold text-xl px-3 py-1.5 rounded-sm mr-2">DayZ</div>
            <div className="text-white font-bold text-xl">AVR</div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-[#62c555] font-medium transition-colors">Главная</Link>
            <Link to="/servers" className="text-white hover:text-[#62c555] font-medium transition-colors">Сервера</Link>
            <Link to="/forum" className="text-white hover:text-[#62c555] font-medium transition-colors">Форум</Link>
            <Link to="/wiki" className="text-white hover:text-[#62c555] font-medium transition-colors">Wiki</Link>
            <Link to="/guides" className="text-white hover:text-[#62c555] font-medium transition-colors">Гайды</Link>
            <Link to="/news" className="text-white hover:text-[#62c555] font-medium transition-colors">Новости</Link>
            <Link to="/donate" className="text-[#62c555] hover:text-white font-medium transition-colors">Донат</Link>
          </nav>
          
          {/* Search and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-400 hover:text-[#62c555] transition-colors"
            >
              <Icon name="Search" className="h-5 w-5" />
            </button>
            <button 
              className="md:hidden text-gray-400 hover:text-[#62c555] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Search Bar (conditionally rendered) */}
        {isSearchOpen && (
          <div className="mt-4 relative">
            <input 
              type="text" 
              placeholder="Поиск по сайту..." 
              className="w-full bg-[#151619] border border-[#2d2e33] text-white py-2 px-4 pr-10 rounded-sm"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#62c555]">
              <Icon name="Search" className="h-5 w-5" />
            </button>
          </div>
        )}
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-3 border-t border-[#2d2e33]">
            <ul className="space-y-3">
              <li><Link to="/" className="block text-white hover:text-[#62c555]">Главная</Link></li>
              <li><Link to="/servers" className="block text-white hover:text-[#62c555]">Сервера</Link></li>
              <li><Link to="/forum" className="block text-white hover:text-[#62c555]">Форум</Link></li>
              <li><Link to="/wiki" className="block text-white hover:text-[#62c555]">Wiki</Link></li>
              <li><Link to="/guides" className="block text-white hover:text-[#62c555]">Гайды</Link></li>
              <li><Link to="/news" className="block text-white hover:text-[#62c555]">Новости</Link></li>
              <li><Link to="/donate" className="block text-[#62c555] hover:text-white">Донат</Link></li>
            </ul>
            <div className="flex items-center space-x-3 mt-4 pt-3 border-t border-[#2d2e33]">
              <a href="#" className="text-gray-400 hover:text-[#62c555]">
                <Icon name="Facebook" className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#62c555]">
                <Icon name="Youtube" className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#62c555]">
                <Icon name="Instagram" className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#62c555]">
                <Icon name="Twitter" className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#62c555]">
                <Icon name="MessageCircle" className="h-4 w-4" />
              </a>
            </div>
          </nav>
        )}
      </div>
      
      {/* Navigation Categories */}
      <div className="bg-[#151619] py-2 border-t border-[#2d2e33]">
        <div className="container mx-auto px-4 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-6 whitespace-nowrap">
            <a href="#" className="text-sm text-gray-400 hover:text-[#62c555]">Все для DayZ</a>
            <a href="#" className="text-sm text-gray-400 hover:text-[#62c555]">Торговля</a>
            <a href="#" className="text-sm text-gray-400 hover:text-[#62c555]">Кланы</a>
            <a href="#" className="text-sm text-gray-400 hover:text-[#62c555]">Поиск игроков</a>
            <a href="#" className="text-sm text-gray-400 hover:text-[#62c555]">Вопросы и ответы</a>
            <a href="#" className="text-sm text-gray-400 hover:text-[#62c555]">Карты</a>
            <a href="#" className="text-sm text-gray-400 hover:text-[#62c555]">Сборки</a>
            <a href="#" className="text-sm text-gray-400 hover:text-[#62c555]">Моды</a>
            <a href="#" className="text-sm text-gray-400 hover:text-[#62c555]">Сервера</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
