
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-[#1A1F2C] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 opacity-50" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1563207153-f403bf289096?q=80&w=2071&auto=format&fit=crop')",
          filter: "brightness(0.4) contrast(1.1)"
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F2C] via-transparent to-transparent z-10" />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-12 bg-[#B45230]" />
            <span className="text-xs uppercase tracking-wider text-gray-300">Постапокалиптический мир</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Выживай. Исследуй.<br />
            <span className="text-[#B45230]">Сражайся.</span>
          </h1>
          
          <p className="text-gray-300 mb-8 text-lg">
            DayZ — хардкорная игра на выживание с открытым миром, где каждое решение имеет значение. 
            Исследуйте постапокалиптический мир, ищите ресурсы и решайте сами — кому доверять, а от кого держаться подальше.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-[#B45230] hover:bg-[#9a3d20] text-white font-medium px-6 py-3 rounded flex items-center gap-2"
            >
              Начать игру <Icon name="ArrowRight" className="ml-1" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-gray-500 text-white hover:bg-white/10 font-medium"
            >
              Смотреть гайды
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-2">
              <img 
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1887&auto=format&fit=crop" 
                alt="Player" 
                className="w-10 h-10 rounded-full border-2 border-gray-800"
              />
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" 
                alt="Player" 
                className="w-10 h-10 rounded-full border-2 border-gray-800"
              />
              <img 
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1960&auto=format&fit=crop" 
                alt="Player" 
                className="w-10 h-10 rounded-full border-2 border-gray-800"
              />
            </div>
            <div className="text-sm text-gray-300">
              <span className="text-white font-medium">10K+</span> выживших в игре прямо сейчас
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
        <Button variant="ghost" className="text-white animate-bounce bg-transparent">
          <Icon name="ChevronDown" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
