
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const popularServers = [
    { id: 1, name: "DAYZ AVR #1", players: "45/50", map: "Chernarus" },
    { id: 2, name: "DAYZ AVR HARDCORE", players: "38/40", map: "Namalsk" },
    { id: 3, name: "PVP NO RULES", players: "95/100", map: "Livonia" },
    { id: 4, name: "RP SURVIVAL", players: "72/80", map: "Chernarus" },
    { id: 5, name: "LOOT x10 | PVE", players: "29/50", map: "Esseker" },
  ];
  
  const popularGuides = [
    { id: 1, title: "Полное руководство для новичков 2025", views: 8742 },
    { id: 2, title: "Как найти оружие и снаряжение быстро", views: 6523 },
    { id: 3, title: "Лучшие места для базы на Черноруси", views: 5981 },
    { id: 4, title: "Выживание на Намальске: особенности", views: 4872 },
    { id: 5, title: "Полный гайд по механикам болезней", views: 3650 },
  ];
  
  const latestDiscussions = [
    { id: 1, title: "Поиск игроков для группы на официальном сервере", replies: 27, author: "SurvivorPro" },
    { id: 2, title: "Баг с исчезновением транспорта после рестарта", replies: 19, author: "DayZBugHunter" },
    { id: 3, title: "Какие настройки графики оптимальны для слабых ПК?", replies: 34, author: "GamerLow" },
    { id: 4, title: "Обсуждение нового обновления 1.22", replies: 56, author: "UpdateFan" },
    { id: 5, title: "Продам полностью укомплектованную M4A1", replies: 12, author: "Trader123" },
  ];

  return (
    <div className="space-y-6">
      {/* Discord Widget */}
      <Card className="bg-[#1d1e21] border-[#2d2e33]">
        <CardHeader className="pb-2">
          <CardTitle className="text-white text-lg flex items-center">
            <Icon name="MessageSquare" className="mr-2 h-5 w-5 text-[#62c555]" />
            Наш Discord
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-[#2b2c30] rounded-sm p-4 flex flex-col items-center">
            <div className="flex items-center mb-3">
              <Icon name="Discord" className="h-6 w-6 text-[#5865F2] mr-2" />
              <span className="text-white font-medium">DayZ AVR Community</span>
            </div>
            <span className="text-gray-400 text-sm mb-3">3,762 участников онлайн</span>
            <Button className="w-full bg-[#5865F2] hover:bg-[#4752c4] text-white">
              Присоединиться
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Popular Servers */}
      <Card className="bg-[#1d1e21] border-[#2d2e33]">
        <CardHeader className="pb-2">
          <CardTitle className="text-white text-lg flex items-center">
            <Icon name="Server" className="mr-2 h-5 w-5 text-[#62c555]" />
            Популярные серверы
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {popularServers.map((server) => (
              <div key={server.id} className="flex items-center justify-between p-2 rounded-sm hover:bg-[#2b2c30] transition-colors">
                <div>
                  <div className="text-white text-sm font-medium">{server.name}</div>
                  <div className="text-gray-500 text-xs">{server.map}</div>
                </div>
                <div className="text-xs px-2 py-1 bg-[#2b2c30] text-[#62c555] rounded-sm">
                  {server.players}
                </div>
              </div>
            ))}
            
            <Link to="/servers" className="text-[#62c555] text-sm hover:underline flex items-center mt-2 justify-end">
              Все сервера
              <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
      
      {/* Popular Guides */}
      <Card className="bg-[#1d1e21] border-[#2d2e33]">
        <CardHeader className="pb-2">
          <CardTitle className="text-white text-lg flex items-center">
            <Icon name="BookOpen" className="mr-2 h-5 w-5 text-[#62c555]" />
            Популярные гайды
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {popularGuides.map((guide) => (
              <div key={guide.id} className="flex items-center justify-between p-2 rounded-sm hover:bg-[#2b2c30] transition-colors">
                <div className="text-white text-sm">{guide.title}</div>
                <div className="text-xs flex items-center text-gray-400">
                  <Icon name="Eye" className="mr-1 h-3.5 w-3.5" />
                  {guide.views}
                </div>
              </div>
            ))}
            
            <Link to="/guides" className="text-[#62c555] text-sm hover:underline flex items-center mt-2 justify-end">
              Все гайды
              <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
      
      {/* Latest Forum Discussions */}
      <Card className="bg-[#1d1e21] border-[#2d2e33]">
        <CardHeader className="pb-2">
          <CardTitle className="text-white text-lg flex items-center">
            <Icon name="MessageCircle" className="mr-2 h-5 w-5 text-[#62c555]" />
            Обсуждения на форуме
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {latestDiscussions.map((thread) => (
              <div key={thread.id} className="p-2 rounded-sm hover:bg-[#2b2c30] transition-colors">
                <div className="text-white text-sm mb-1">{thread.title}</div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>{thread.author}</span>
                  <div className="flex items-center">
                    <Icon name="MessageSquare" className="mr-1 h-3.5 w-3.5" />
                    {thread.replies}
                  </div>
                </div>
              </div>
            ))}
            
            <Link to="/forum" className="text-[#62c555] text-sm hover:underline flex items-center mt-2 justify-end">
              Перейти на форум
              <Icon name="ChevronRight" className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </Card>
      
      {/* Advertisement */}
      <Card className="bg-[#1d1e21] border-[#2d2e33] overflow-hidden">
        <div className="relative h-60 bg-gradient-to-r from-[#62c555] to-[#43a337]">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <h3 className="text-white font-bold text-xl mb-2">Нужен игровой сервер?</h3>
            <p className="text-white/90 mb-4">Лучший хостинг для вашего сервера DayZ с быстрой технической поддержкой 24/7</p>
            <Button variant="secondary" className="bg-white text-[#62c555] hover:bg-gray-100">
              Заказать сервер
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Sidebar;
