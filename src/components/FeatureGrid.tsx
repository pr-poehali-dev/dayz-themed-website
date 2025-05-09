
import React from 'react';
import Icon from '@/components/ui/icon';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  iconBgColor?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, iconBgColor = "bg-[#43803f]" }) => {
  return (
    <Card className="bg-[#1a1a1a] border-[#2c2c2c] hover:border-[#43803f] transition-all duration-300">
      <CardHeader className="pb-2">
        <div className={`w-12 h-12 ${iconBgColor} rounded-md flex items-center justify-center mb-4`}>
          <Icon name={icon} className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-white text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const FeatureGrid = () => {
  const features = [
    {
      icon: "Cube",
      title: "Квадратный мир",
      description: "Исследуйте постапокалиптический мир, созданный из кубов. Разрушайте и стройте всё, что захотите."
    },
    {
      icon: "Users",
      title: "Мультиплеер",
      description: "Объединяйтесь с друзьями или сражайтесь против других игроков за ресурсы и территории."
    },
    {
      icon: "Shield",
      title: "Выживание",
      description: "Следите за жаждой, голодом и здоровьем. Избегайте зомби и других опасностей окружающей среды."
    },
    {
      icon: "Building",
      title: "Строительство",
      description: "Создавайте базы, укрепления и ловушки для защиты от зомби и других игроков."
    },
    {
      icon: "Skull",
      title: "PvP и PvE",
      description: "Сражайтесь с зомби и другими игроками, используя широкий арсенал оружия и снаряжения."
    },
    {
      icon: "HandCoins",
      title: "Торговля",
      description: "Обменивайтесь предметами с другими игроками или торгуйте с NPC в безопасных зонах."
    },
    {
      icon: "ShieldAlert",
      title: "Рейды",
      description: "Участвуйте в рейдах на базы других игроков или защищайте свою территорию от нападений."
    },
    {
      icon: "Map",
      title: "Процедурные карты",
      description: "Каждый сервер имеет уникальную генерируемую карту с разными биомами и локациями."
    }
  ];

  return (
    <section className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-green-800/20 border border-[#43803f] rounded-md text-[#43803f] text-sm font-medium mb-4">
            ВОЗМОЖНОСТИ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Основные особенности <span className="text-[#43803f]">DayZ</span><span className="text-red-500">Cube</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Кубический мир постапокалипсиса бросает вам вызов. Объединяйтесь с друзьями, стройте укрепления и держитесь подальше от зомби.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description}
              iconBgColor={index % 3 === 0 ? "bg-[#43803f]" : index % 3 === 1 ? "bg-[#8f4444]" : "bg-[#444a8f]"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
