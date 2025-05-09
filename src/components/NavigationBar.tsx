
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1A1F2C] text-white border-b border-[#2A3328]/30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter text-[#B45230]">DAYZ</span>
            <span className="text-xs bg-[#2A3328] px-2 py-0.5 rounded">Выживание</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm hover:text-[#B45230] transition-colors">Главная</Link>
            <Link to="/about" className="text-sm hover:text-[#B45230] transition-colors">Об игре</Link>
            <Link to="/guides" className="text-sm hover:text-[#B45230] transition-colors">Гайды</Link>
            <Link to="/gallery" className="text-sm hover:text-[#B45230] transition-colors">Галерея</Link>
            <Button 
              variant="outline" 
              className="border-[#B45230] text-[#B45230] hover:bg-[#B45230] hover:text-white"
            >
              Скачать игру
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-200 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2 space-y-2 border-t border-[#2A3328]/30 mt-3">
            <Link to="/" className="block py-2 hover:bg-[#2A3328]/20 px-2 rounded">Главная</Link>
            <Link to="/about" className="block py-2 hover:bg-[#2A3328]/20 px-2 rounded">Об игре</Link>
            <Link to="/guides" className="block py-2 hover:bg-[#2A3328]/20 px-2 rounded">Гайды</Link>
            <Link to="/gallery" className="block py-2 hover:bg-[#2A3328]/20 px-2 rounded">Галерея</Link>
            <Button 
              variant="outline" 
              className="w-full mt-2 border-[#B45230] text-[#B45230] hover:bg-[#B45230] hover:text-white"
            >
              Скачать игру
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
