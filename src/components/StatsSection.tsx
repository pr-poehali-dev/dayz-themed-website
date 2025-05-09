
import React from 'react';

interface StatBoxProps {
  number: string;
  label: string;
  bgColor?: string;
}

const StatBox: React.FC<StatBoxProps> = ({ number, label, bgColor = "bg-[#1a1a1a]" }) => {
  return (
    <div className={`${bgColor} border-2 border-[#2c2c2c] p-6 rounded-md text-center`}>
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">{number}</div>
      <div className="text-gray-400 text-sm">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-[#0c0c0c] border-y border-[#2c2c2c]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <StatBox number="200K+" label="Игроков" bgColor="bg-[#1a1a1a]" />
          <StatBox number="2B+" label="Убитых зомби" bgColor="bg-gradient-to-br from-[#1a1a1a] to-[#301a1a]" />
          <StatBox number="75M+" label="Построенных блоков" bgColor="bg-gradient-to-br from-[#1a1a1a] to-[#1a2a1a]" />
          <StatBox number="354+" label="Активных серверов" bgColor="bg-gradient-to-br from-[#1a1a1a] to-[#1a1a2a]" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
