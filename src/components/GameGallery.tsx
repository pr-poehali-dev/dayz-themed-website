
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from '@/components/ui/aspect-ratio';

const GameGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const images = [
    {
      url: "https://images.unsplash.com/photo-1608870742373-62c527e7f2f7?q=80&w=1974&auto=format&fit=crop",
      alt: "Постапокалиптический пейзаж",
      caption: "Исследуйте заброшенные города после апокалипсиса"
    },
    {
      url: "https://images.unsplash.com/photo-1610568781018-995405522539?q=80&w=1974&auto=format&fit=crop",
      alt: "Ночное время в игре",
      caption: "Ночью опасность подстерегает на каждом шагу"
    },
    {
      url: "https://images.unsplash.com/photo-1603722039047-bc9540bc4126?q=80&w=1974&auto=format&fit=crop",
      alt: "Противостояние зомби",
      caption: "Зараженные представляют постоянную угрозу выжившим"
    },
    {
      url: "https://images.unsplash.com/photo-1618290597776-b5bca1c3b673?q=80&w=2070&auto=format&fit=crop",
      alt: "Снаряжение игрока",
      caption: "Собирайте необходимое снаряжение для выживания"
    }
  ];

  return (
    <div className="bg-[#1A1F2C] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Галерея игры</h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Взгляните на жестокий и атмосферный мир DayZ, где вам предстоит выживать и сражаться за ресурсы.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel 
            className="w-full"
            onSelect={(index) => setActiveIndex(index)}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg border border-[#2A3328]">
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                        />
                      </AspectRatio>
                      <div className="p-4 bg-[#1A1F2C]/90 text-white">
                        <p className="text-sm font-medium">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 bg-[#2A3328] text-white border-none hover:bg-[#B45230]" />
            <CarouselNext className="absolute -right-12 bg-[#2A3328] text-white border-none hover:bg-[#B45230]" />
          </Carousel>

          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-[#B45230]" : "bg-gray-600"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            Нажмите на кнопки или используйте стрелки для навигации по галерее
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameGallery;
