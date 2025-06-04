'use client';

import { useState } from 'react';
import DashboardHeader from './components/dashboard-header';
import DashboardSidebar from './components/dashboard-sidbar';
import Footer from './components/footer';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <DashboardHeader isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <DashboardSidebar isMobileMenuOpen={isSidebarOpen} setIsMobileMenuOpen={setIsSidebarOpen} />

      {/* Main content luôn có margin bên trái cho sidebar trên desktop */}
      <main className='pt-16 transition-all duration-300 md:pl-70 p-4'>
        <div>{children}</div>
      </main>
      {/* <main className='pt-16 transition-all duration-300 '>{children}</main> */}
    </div>
  );
}
