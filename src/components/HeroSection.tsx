
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-[#121212] pb-8 pt-16">
      {/* Pixelated background with zombie silhouettes */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><rect x="0" y="0" width="8" height="8" fill="%23111111" /><rect x="8" y="0" width="8" height="8" fill="%23191919" /><rect x="16" y="0" width="8" height="8" fill="%23111111" /><rect x="24" y="0" width="8" height="8" fill="%23191919" /><rect x="0" y="8" width="8" height="8" fill="%23191919" /><rect x="8" y="8" width="8" height="8" fill="%23111111" /><rect x="16" y="8" width="8" height="8" fill="%23191919" /><rect x="24" y="8" width="8" height="8" fill="%23111111" /><rect x="0" y="16" width="8" height="8" fill="%23111111" /><rect x="8" y="16" width="8" height="8" fill="%23191919" /><rect x="16" y="16" width="8" height="8" fill="%23111111" /><rect x="24" y="16" width="8" height="8" fill="%23191919" /><rect x="0" y="24" width="8" height="8" fill="%23191919" /><rect x="8" y="24" width="8" height="8" fill="%23111111" /><rect x="16" y="24" width="8" height="8" fill="%23191919" /><rect x="24" y="24" width="8" height="8" fill="%23111111" /></svg>')`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Pixel zombie silhouettes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-[5%] w-12 h-20 bg-[#333333] opacity-60"
             style={{clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 75% 0%, 75% 25%, 50% 25%, 50% 0%, 0% 0%)'}} /> {/* Zombie silhouette */}
        <div className="absolute bottom-0 left-[15%] w-10 h-16 bg-[#333333] opacity-40"
             style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'}} /> {/* Zombie head */}
        <div className="absolute bottom-0 right-[10%] w-14 h-24 bg-[#333333] opacity-50"
             style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}} /> {/* Building silhouette */}
      </div>

      <div className="container mx-auto px-4 pt-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6">
            <div className="inline-block px-3 py-1 bg-green-800/20 border border-[#43803f] rounded-md text-[#43803f] text-sm font-medium mb-2">
              ВЫЖИВАНИЕ В МИРЕ КУБОВ
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-[#43803f]">DayZ</span><span className="text-red-500">Cube</span>: 
              <br />Выживай. Строй. <span className="text-red-500">Сражайся.</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Исследуйте квадратный мир постапокалипсиса, стройте базы, собирайте ресурсы и 
              сражайтесь с зомби и другими игроками в пиксельной версии DayZ.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-[#43803f] hover:bg-[#2d5c2a] text-white px-6 py-2 rounded-md flex items-center gap-2"
              >
                Начать игру <Icon name="ArrowRight" className="ml-1" />
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                Смотреть трейлер
              </Button>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-sm pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-md bg-[#43803f] flex items-center justify-center border border-gray-700 text-white text-xs">C1</div>
                <div className="w-8 h-8 rounded-md bg-[#43803f] flex items-center justify-center border border-gray-700 text-white text-xs">C2</div>
                <div className="w-8 h-8 rounded-md bg-[#43803f] flex items-center justify-center border border-gray-700 text-white text-xs">C3</div>
              </div>
              <span>+10,000 игроков уже выживают</span>
            </div>
          </div>
          
          {/* Hero Image - Pixel Art Style */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto bg-[#1a1a1a] rounded-md overflow-hidden border-4 border-[#2c2c2c] shadow-xl p-2">
              {/* Pixel art style background with grid */}
              <div className="absolute inset-0 grid grid-cols-16 grid-rows-16">
                {Array.from({ length: 256 }).map((_, i) => (
                  <div 
                    key={i}
                    className="border border-gray-900/10"
                  />
                ))}
              </div>
              
              {/* Pixel art game scene */}
              <div className="relative h-full w-full">
                {/* Ground/terrain - green blocks */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-[#3a6536]"></div>
                
                {/* Pixel buildings in background */}
                <div className="absolute bottom-1/4 left-[10%] w-[15%] h-[30%] bg-[#555555]"></div>
                <div className="absolute bottom-1/4 left-[30%] w-[10%] h-[20%] bg-[#444444]"></div>
                <div className="absolute bottom-1/4 right-[20%] w-[12%] h-[25%] bg-[#666666]"></div>
                
                {/* Pixel trees */}
                <div className="absolute bottom-1/4 left-[5%] w-[8%] h-[12%] bg-[#43803f]"></div>
                <div className="absolute bottom-1/4 right-[5%] w-[8%] h-[12%] bg-[#43803f]"></div>
                
                {/* Pixel zombie */}
                <div className="absolute bottom-1/4 left-[60%] w-[10%] h-[15%] bg-[#567c52]"></div>
                
                {/* Pixel player character */}
                <div className="absolute bottom-1/4 left-[45%] w-[10%] h-[15%] bg-[#926b43]"></div>
                
                {/* Pixelated sun */}
                <div className="absolute top-[15%] right-[15%] w-[12%] h-[12%] bg-[#e67e22] rounded-sm"></div>
                
                {/* Dark sky background */}
                <div className="absolute top-0 left-0 right-0 h-3/4 bg-gradient-to-b from-[#0c1c28] to-[#1a2e3c] -z-10"></div>
              </div>
            </div>
            
            {/* Stats blocks */}
            <div className="absolute -bottom-4 -right-4 bg-[#1a1a1a] border-2 border-[#2c2c2c] rounded-md p-3 shadow-lg">
              <div className="text-[#43803f] font-bold">5K+</div>
              <div className="text-gray-400 text-sm">Блоков</div>
            </div>
            
            <div className="absolute -top-4 -left-4 bg-[#1a1a1a] border-2 border-[#2c2c2c] rounded-md p-3 shadow-lg">
              <div className="text-red-500 font-bold">12K+</div>
              <div className="text-gray-400 text-sm">Зомби</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
