
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ServerProps {
  name: string;
  players: {
    current: number;
    max: number;
  };
  map: string;
  ping: number;
  tags: string[];
  online: boolean;
}

const ServerCard: React.FC<ServerProps> = ({ name, players, map, ping, tags, online }) => {
  return (
    <div className="bg-[#1a1a1a] border border-[#2c2c2c] hover:border-[#43803f] rounded-md p-4 transition-all duration-200">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#242424] rounded-md flex items-center justify-center relative">
            <div className="w-3 h-3 absolute top-0 right-0 rounded-full border-2 border-[#1a1a1a] bg-green-500"></div>
            <Icon name="Server" className={online ? "text-[#43803f]" : "text-gray-600"} />
          </div>
          <div>
            <h3 className="text-white font-medium">{name}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>{map}</span>
              <span className="h-1 w-1 rounded-full bg-gray-600"></span>
              <span className="flex items-center gap-1">
                <Icon name="Users" className="h-3 w-3" /> 
                {players.current}/{players.max}
              </span>
              <span className="h-1 w-1 rounded-full bg-gray-600"></span>
              <span className="flex items-center gap-1">
                <Icon name="Activity" className="h-3 w-3" /> 
                {ping} ms
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-[#242424] text-gray-300 border-[#2c2c2c]">
              {tag}
            </Badge>
          ))}
        </div>
        
        <Button
          size="sm"
          className="bg-[#43803f] hover:bg-[#2d5c2a] text-white mt-2 md:mt-0"
        >
          Подключиться
        </Button>
      </div>
    </div>
  );
};

const ServersList = () => {
  const servers = [
    {
      name: "DayZCube Official #1",
      players: { current: 42, max: 50 },
      map: "Chernarus",
      ping: 25,
      tags: ["PvP", "Ванилла", "Первый лиц"],
      online: true
    },
    {
      name: "DayZCube RPG",
      players: { current: 98, max: 100 },
      map: "Namalsk",
      ping: 45,
      tags: ["PvE", "Ролевой", "Торговля"],
      online: true
    },
    {
      name: "Survival Hardcore",
      players: { current: 27, max: 50 },
      map: "Livonia",
      ping: 67,
      tags: ["PvP", "Хардкор", "Без трейдеров"],
      online: true
    },
    {
      name: "Community Build Server",
      players: { current: 15, max: 30 },
      map: "Esseker",
      ping: 39,
      tags: ["Креатив", "PvE", "Кастомные блоки"],
      online: true
    }
  ];
  
  return (
    <section className="py-16 bg-[#0c0c0c]">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="inline-block px-3 py-1 bg-green-800/20 border border-[#43803f] rounded-md text-[#43803f] text-sm font-medium mb-4">
              СЕРВЕРА
            </div>
            <h2 className="text-3xl font-bold text-white">Популярные сервера</h2>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-[#2c2c2c] text-gray-300 hover:bg-[#1a1a1a]">
              <Icon name="Filter" className="mr-2 h-4 w-4" />
              Фильтры
            </Button>
            <Button className="bg-[#43803f] hover:bg-[#2d5c2a] text-white">
              Все сервера <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          {servers.map((server, index) => (
            <ServerCard 
              key={index}
              name={server.name}
              players={server.players}
              map={server.map}
              ping={server.ping}
              tags={server.tags}
              online={server.online}
            />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button variant="outline" className="border-[#2c2c2c] text-gray-300 hover:bg-[#1a1a1a]">
            Показать больше серверов <Icon name="ChevronDown" className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServersList;
