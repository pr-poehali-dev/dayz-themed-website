
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface NewsCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  comments: number;
  views: number;
  image: string;
  category: string;
  authorAvatar: string;
  authorName: string;
  featured?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({ 
  id, title, excerpt, date, comments, views, image, category, authorAvatar, authorName, featured = false 
}) => {
  return (
    <Card className={`overflow-hidden border-0 ${featured ? 'lg:col-span-2 bg-[#1d1e21]' : 'bg-[#1d1e21]'}`}>
      <Link to={`/news/${id}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-[#62c555] text-white text-xs py-1 px-2">
            {category}
          </div>
        </div>
      </Link>
      
      <CardHeader className="pt-4 pb-2 px-4">
        <Link to={`/news/${id}`} className="block">
          <h2 className={`font-bold text-white hover:text-[#62c555] transition-colors ${featured ? 'text-xl' : 'text-lg'}`}>
            {title}
          </h2>
        </Link>
      </CardHeader>
      
      <CardContent className="px-4 py-2">
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{excerpt}</p>
      </CardContent>
      
      <CardFooter className="px-4 pt-0 pb-4 flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <img 
            src={authorAvatar} 
            alt={authorName}
            className="w-8 h-8 rounded-full mr-2 object-cover"
          />
          <div>
            <span className="text-xs text-gray-400">{authorName}</span>
            <div className="text-xs text-gray-500">{date}</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 text-xs text-gray-500">
          <div className="flex items-center">
            <Icon name="MessageSquare" className="h-3.5 w-3.5 mr-1" />
            {comments}
          </div>
          <div className="flex items-center">
            <Icon name="Eye" className="h-3.5 w-3.5 mr-1" />
            {views}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

const NewsPosts = () => {
  const newsData: NewsCardProps[] = [
    {
      id: 1,
      title: "Обновление 1.22 для DayZ уже доступно на всех платформах",
      excerpt: "Разработчики Bohemia Interactive выпустили новое крупное обновление для DayZ. Патч 1.22 вносит множество изменений в игровой процесс, включая новое оружие, транспорт и исправление ошибок.",
      date: "15 мая 2025",
      comments: 42,
      views: 1568,
      image: "https://images.unsplash.com/photo-1608870742373-62c527e7f2f7?q=80&w=1974&auto=format&fit=crop",
      category: "Обновления",
      authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80",
      authorName: "Александр",
      featured: true
    },
    {
      id: 2,
      title: "Гайд: Как найти лучшее оружие в первый час игры",
      excerpt: "В этом руководстве мы расскажем о лучших местах для поиска оружия и боеприпасов в начале игры, когда вы только появились на побережье Черноруси.",
      date: "12 мая 2025",
      comments: 28,
      views: 2341,
      image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=2070&auto=format&fit=crop",
      category: "Гайды",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80",
      authorName: "Елена"
    },
    {
      id: 3,
      title: "Лучшие моды для DayZ в 2025 году",
      excerpt: "Обзор самых популярных и качественных модификаций для DayZ, которые значительно улучшат ваш игровой опыт и добавят новый контент.",
      date: "8 мая 2025",
      comments: 15,
      views: 976,
      image: "https://images.unsplash.com/photo-1618290597776-b5bca1c3b673?q=80&w=2070&auto=format&fit=crop",
      category: "Моды",
      authorAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80",
      authorName: "Игорь"
    },
    {
      id: 4,
      title: "Сервер недели: DayZ Village - PvE сервер с особыми правилами",
      excerpt: "Знакомимся с одним из самых интересных серверов DayZ с уникальной концепцией мирного сосуществования игроков и особыми игровыми механиками.",
      date: "5 мая 2025",
      comments: 31,
      views: 1242,
      image: "https://images.unsplash.com/photo-1603722039047-bc9540bc4126?q=80&w=1974&auto=format&fit=crop",
      category: "Сервера",
      authorAvatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80",
      authorName: "Михаил"
    },
    {
      id: 5,
      title: "Интервью с разработчиками: Будущее DayZ в 2026 году",
      excerpt: "Эксклюзивное интервью с командой разработчиков Bohemia Interactive о планах развития игры на следующий год и возможном продолжении серии.",
      date: "1 мая 2025",
      comments: 53,
      views: 3578,
      image: "https://images.unsplash.com/photo-1478265409131-1f65c88f965c?q=80&w=2235&auto=format&fit=crop",
      category: "Интервью",
      authorAvatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=80",
      authorName: "Анна"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsData.map((post) => (
        <NewsCard key={post.id} {...post} />
      ))}
      
      <div className="flex justify-center lg:col-span-3 mt-6">
        <Button variant="outline" className="border-[#2d2e33] text-gray-400 hover:text-[#62c555] hover:border-[#62c555]">
          Загрузить больше
          <Icon name="ChevronDown" className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default NewsPosts;
