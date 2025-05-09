
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <Card className="bg-[#1A1F2C] border-[#2A3328] text-white hover:border-[#B45230] transition-all duration-300 h-full">
      <CardHeader className="pb-2">
        <div className="w-10 h-10 rounded-lg bg-[#2A3328] flex items-center justify-center mb-4">
          <Icon name={icon} className="h-5 w-5 text-[#B45230]" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-400">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const FeatureCards = () => {
  const features = [
    {
      title: "Открытый мир",
      description: "Исследуйте огромную карту Черноруси площадью 230 кв. км с городами, лесами и заброшенными локациями.",
      icon: "Map"
    },
    {
      title: "Реалистичное выживание",
      description: "Управляйте голодом, жаждой, температурой тела и здоровьем в жестоком постапокалиптическом мире.",
      icon: "Heart"
    },
    {
      title: "Крафт и строительство",
      description: "Собирайте ресурсы, создавайте предметы и стройте базы для защиты от других игроков и зомби.",
      icon: "Hammer"
    },
    {
      title: "PvP сражения",
      description: "Выбирайте — сотрудничать с другими выжившими или охотиться на них ради ценных ресурсов.",
      icon: "Swords"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#1A1F2C] to-[#1A1F2C]/90 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Особенности игры</h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            DayZ предлагает уникальный опыт выживания, где каждое действие имеет последствия, 
            а каждая встреча с другими игроками может закончиться дружбой или смертью.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;
