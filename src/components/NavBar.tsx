
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#121212] border-b border-[#2c2c2c] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 bg-[#43803f] rounded flex items-center justify-center">
                <span className="text-white font-bold">DZ</span>
              </div>
              <span className="text-xl font-bold text-[#43803f]">DayZ<span className="text-red-500">Cube</span></span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-300 hover:text-[#43803f] transition-colors px-2 py-1">Главная</Link>
            <Link to="/servers" className="text-gray-300 hover:text-[#43803f] transition-colors px-2 py-1">Сервера</Link>
            <Link to="/maps" className="text-gray-300 hover:text-[#43803f] transition-colors px-2 py-1">Карты</Link>
            <Link to="/guides" className="text-gray-300 hover:text-[#43803f] transition-colors px-2 py-1">Гайды</Link>
            <Link to="/shop" className="text-gray-300 hover:text-[#43803f] transition-colors px-2 py-1">Магазин</Link>
            <Button 
              variant="outline" 
              className="ml-4 border-[#43803f] text-[#43803f] hover:bg-[#43803f] hover:text-white font-medium"
            >
              Войти
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-[#2c2c2c] pt-2 pb-4">
            <div className="flex flex-col space-y-2 px-2">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-[#43803f] px-3 py-2 rounded-md hover:bg-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/servers" 
                className="text-gray-300 hover:text-[#43803f] px-3 py-2 rounded-md hover:bg-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Сервера
              </Link>
              <Link 
                to="/maps" 
                className="text-gray-300 hover:text-[#43803f] px-3 py-2 rounded-md hover:bg-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Карты
              </Link>
              <Link 
                to="/guides" 
                className="text-gray-300 hover:text-[#43803f] px-3 py-2 rounded-md hover:bg-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Гайды
              </Link>
              <Link 
                to="/shop" 
                className="text-gray-300 hover:text-[#43803f] px-3 py-2 rounded-md hover:bg-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Магазин
              </Link>
              <Button 
                variant="outline" 
                className="mt-2 border-[#43803f] text-[#43803f] hover:bg-[#43803f] hover:text-white font-medium"
              >
                Войти
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
