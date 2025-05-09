
import React from 'react';
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import NewsPosts from '@/components/NewsPosts';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#121215] text-gray-200">
      <Header />
      <Banner />
      
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="flex items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Последние новости и обновления</h2>
                <div className="ml-auto flex gap-2">
                  <button className="h-8 w-8 flex items-center justify-center bg-[#1d1e21] border border-[#2d2e33] text-gray-400 hover:text-[#62c555] rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>
                  </button>
                  <button className="h-8 w-8 flex items-center justify-center bg-[#1d1e21] border border-[#2d2e33] text-gray-400 hover:text-[#62c555] rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect></svg>
                  </button>
                  <button className="h-8 w-8 flex items-center justify-center bg-[#1d1e21] border border-[#2d2e33] text-gray-400 hover:text-[#62c555] rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>
                  </button>
                </div>
              </div>
              
              <NewsPosts />
            </div>
            
            <div className="lg:w-1/3">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
