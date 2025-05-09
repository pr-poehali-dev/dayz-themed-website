
import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from '@/components/ui/aspect-ratio';

const PixelArtGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const generatePixelArtImage = (colors: string[], patternName: string) => {
    return (
      <div className="w-full h-full relative overflow-hidden rounded-md">
        <div className="absolute inset-0 grid grid-cols-24 grid-rows-16">
          {Array.from({ length: 24 * 16 }).map((_, i) => {
            const row = Math.floor(i / 24);
            const col = i % 24;
            
            // Different patterns for different images
            let color = "#121212";
            
            if (patternName === "zombie") {
              // Zombie pattern
              if ((row > 5 && row < 12) && (col > 8 && col < 15)) {
                color = colors[0]; // Zombie body
                
                if (row === 6 && (col === 10 || col === 13)) {
                  color = colors[1]; // Zombie eyes
                }
                
                if (row === 8 && (col > 9 && col < 14)) {
                  color = colors[2]; // Zombie mouth
                }
              }
              
              // Ground
              if (row > 12) {
                color = colors[3];
              }
            }
            else if (patternName === "building") {
              // Building pattern
              if ((row > 2 && row < 14) && (col > 6 && col < 18)) {
                color = colors[0]; // Building walls
                
                if (((row > 4 && row < 7) || (row > 8 && row < 11)) && 
                    ((col > 8 && col < 11) || (col > 13 && col < 16))) {
                  color = colors[1]; // Windows
                }
                
                if ((row > 10 && row < 14) && (col > 10 && col < 14)) {
                  color = colors[2]; // Door
                }
              }
              
              // Ground
              if (row > 13) {
                color = colors[3];
              }
            }
            else if (patternName === "survivor") {
              // Survivor pattern
              if ((row > 5 && row < 12) && (col > 8 && col < 15)) {
                color = colors[0]; // Survivor body
                
                if (row === 6 && (col === 10 || col === 13)) {
                  color = colors[1]; // Survivor eyes
                }
                
                if ((row === 6 && col === 15) || (row === 7 && col === 16)) {
                  color = colors[2]; // Gun
                }
              }
              
              // Ground
              if (row > 12) {
                color = colors[3];
              }
            }
            else if (patternName === "base") {
              // Base pattern
              if ((row > 4 && row < 14) && (col > 4 && col < 20)) {
                color = colors[0]; // Base walls
                
                if ((row > 7 && row < 11) && (col > 10 && col < 14)) {
                  color = colors[1]; // Door
                }
                
                if ((row === 6) && ((col > 6 && col < 9) || (col > 15 && col < 18))) {
                  color = colors[2]; // Windows
                }
              }
              
              // Ground
              if (row > 13) {
                color = colors[3];
              }
            }
            
            return (
              <div
                key={i}
                className="border border-black/10"
                style={{ backgroundColor: color }}
              ></div>
            );
          })}
        </div>
      </div>
    );
  };
  
  const images = [
    {
      component: generatePixelArtImage(["#567c52", "#ff0000", "#333333", "#3a6536"], "zombie"),
      alt: "Пиксельный зомби",
      caption: "Зомби бродят по миру в поисках выживших"
    },
    {
      component: generatePixelArtImage(["#555555", "#2d87c5", "#8f5241", "#3a6536"], "building"),
      alt: "Заброшенное здание",
      caption: "Исследуйте заброшенные здания и ищите ресурсы"
    },
    {
      component: generatePixelArtImage(["#926b43", "#2d87c5", "#444444", "#3a6536"], "survivor"),
      alt: "Выживший с оружием",
      caption: "Вооружитесь для защиты от зомби и других игроков"
    },
    {
      component: generatePixelArtImage(["#8f5241", "#43803f", "#2d87c5", "#3a6536"], "base"),
      alt: "Укрепленная база",
      caption: "Стройте и укрепляйте свои базы для защиты"
    }
  ];

  return (
    <div className="bg-[#121212] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 bg-green-800/20 border border-[#43803f] rounded-md text-[#43803f] text-sm font-medium mb-4">
            ГАЛЕРЕЯ
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Мир <span className="text-[#43803f]">DayZ</span><span className="text-red-500">Cube</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Посмотрите на квадратный мир DayZCube, полный опасностей и приключений.
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <Carousel 
            className="w-full" 
            onSelect={(index) => setActiveIndex(index)}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg border-4 border-[#2c2c2c] bg-[#1a1a1a]">
                      <AspectRatio ratio={16 / 9}>
                        {image.component}
                      </AspectRatio>
                      <div className="p-4 bg-[#1a1a1a] text-white">
                        <p className="text-sm font-medium">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 bg-[#1a1a1a] text-white border-[#2c2c2c] hover:bg-[#43803f] hover:text-white hover:border-[#43803f]" />
            <CarouselNext className="absolute -right-12 bg-[#1a1a1a] text-white border-[#2c2c2c] hover:bg-[#43803f] hover:text-white hover:border-[#43803f]" />
          </Carousel>

          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-sm transition-colors ${
                  activeIndex === index ? "bg-[#43803f]" : "bg-gray-700"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PixelArtGallery;
