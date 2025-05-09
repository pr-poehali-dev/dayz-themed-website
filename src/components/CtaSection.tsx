
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const CtaSection = () => {
  return (
    <section className="py-20 bg-[#121212] relative overflow-hidden">
      {/* Pixelated background with zombie silhouettes */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><rect x="0" y="0" width="10" height="10" fill="%23141414" /><rect x="10" y="0" width="10" height="10" fill="%231a1a1a" /><rect x="0" y="10" width="10" height="10" fill="%231a1a1a" /><rect x="10" y="10" width="10" height="10" fill="%23141414" /></svg>')`,
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Pixel art zombies at the edges */}
      <div className="absolute bottom-0 left-10 w-16 h-24 opacity-20" style={{ 
        background: '#567c52',
        clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)'
      }}></div>
      
      <div className="absolute bottom-0 right-10 w-16 h-24 opacity-20" style={{ 
        background: '#567c52',
        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-green-800/20 border border-[#43803f] rounded-md text-[#43803f] text-sm font-medium mb-4">
            ПРИСОЕДИНЯЙСЯ СЕЙЧАС
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Готовы к выживанию в мире <span className="text-[#43803f]">DayZ</span><span className="text-red-500">Cube</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Загрузите игру прямо сейчас и присоединяйтесь к тысячам игроков в борьбе за выживание в постапокалиптическом кубическом мире.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="bg-[#43803f] hover:bg-[#2d5c2a] text-white px-8 py-6 rounded-md text-lg flex items-center gap-2 w-full sm:w-auto"
            >
              Скачать игру <Icon name="Download" className="ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-[#2c2c2c] text-gray-300 hover:bg-[#1a1a1a] px-8 py-6 rounded-md text-lg w-full sm:w-auto"
            >
              Смотреть трейлер <Icon name="Play" className="ml-2" />
            </Button>
          </div>
          
          <div className="mt-8 p-4 bg-[#1a1a1a] border border-[#2c2c2c] rounded-md inline-flex items-center gap-2">
            <Icon name="Info" className="text-[#43803f]" />
            <span className="text-gray-400 text-sm">Доступно для Windows, Mac и Linux</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
