
import React from 'react';
import NavigationBar from '@/components/NavigationBar';
import HeroSection from '@/components/HeroSection';
import FeatureCards from '@/components/FeatureCards';
import GameGallery from '@/components/GameGallery';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      <NavigationBar />
      <HeroSection />
      <FeatureCards />
      <GameGallery />
      
      {/* CTA Section */}
      <section className="bg-[#2A3328] py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы выжить в мире DayZ?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Присоединяйтесь к миллионам игроков по всему миру. Испытайте один из самых реалистичных симуляторов выживания.
          </p>
          <Button 
            className="bg-[#B45230] hover:bg-[#9a3d20] text-white px-8 py-6 rounded-md text-lg flex items-center gap-2 mx-auto"
          >
            Начать игру сейчас <Icon name="ArrowRight" />
          </Button>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#1A1F2C] py-12 border-t border-[#2A3328]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-[#B45230] mb-4">DAYZ</div>
              <p className="text-gray-400 text-sm">
                Хардкорная игра на выживание с открытым миром, где ваши решения определяют судьбу.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Полезные ссылки</h3>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-[#B45230]">Об игре</a></li>
                <li><a href="#" className="hover:text-[#B45230]">Новости</a></li>
                <li><a href="#" className="hover:text-[#B45230]">Партнеры</a></li>
                <li><a href="#" className="hover:text-[#B45230]">Поддержка</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Сообщество</h3>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-[#B45230]">Форум</a></li>
                <li><a href="#" className="hover:text-[#B45230]">Discord</a></li>
                <li><a href="#" className="hover:text-[#B45230]">Twitter</a></li>
                <li><a href="#" className="hover:text-[#B45230]">YouTube</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Ресурсы</h3>
              <ul className="text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-[#B45230]">Гайды</a></li>
                <li><a href="#" className="hover:text-[#B45230]">Карта мира</a></li>
                <li><a href="#" className="hover:text-[#B45230]">Вики</a></li>
                <li><a href="#" className="hover:text-[#B45230]">Моды</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#2A3328] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm">
              © 2025 DayZ. Все права защищены.
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#B45230]">
                <Icon name="Twitter" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#B45230]">
                <Icon name="Youtube" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#B45230]">
                <Icon name="Instagram" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#B45230]">
                <Icon name="Facebook" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
