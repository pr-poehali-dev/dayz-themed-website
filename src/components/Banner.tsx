
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Banner = () => {
  return (
    <div className="relative bg-[#1a1a1a] overflow-hidden">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-center bg-cover"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1608870742373-62c527e7f2f7?q=80&w=1974&auto=format&fit=crop')",
          filter: "brightness(0.7)"
        }}
      ></div>
      
      <div className="container mx-auto px-4 py-16 relative z-20">
        <div className="max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Добро пожаловать на DayZ AVR</h1>
          <p className="text-gray-300 mb-6">
            Первый русскоязычный портал для игры DayZ. У нас вы найдете последние новости, 
            полезные гайды, моды, карты и сможете присоединиться к сообществу выживших.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-[#62c555] hover:bg-[#4fa446] text-white px-6">
              <Icon name="Download" className="mr-2 h-4 w-4" />
              Скачать DayZ
            </Button>
            <Button variant="outline" className="border-[#62c555] text-[#62c555] hover:bg-[#62c555] hover:text-white">
              Присоединиться к сообществу
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
