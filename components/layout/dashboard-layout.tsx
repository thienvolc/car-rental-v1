'use client';

import { useState, useEffect } from 'react';
import DashboardHeader from './components/dashboard-header';
import DashboardSidebar from './components/dashboard-sidbar';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Phát hiện kích thước màn hình để xác định mobile/desktop
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Kiểm tra ban đầu
    checkIfMobile();

    // Kiểm tra khi resize
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      <DashboardHeader isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <DashboardSidebar isMobileMenuOpen={isSidebarOpen} setIsMobileMenuOpen={setIsSidebarOpen} />

      {/* Main content luôn có margin bên trái cho sidebar trên desktop */}
      <main className='pt-16 transition-all duration-300 md:pl-64'>
        <div>{children}</div>
      </main>
      {/* <main className='pt-16 transition-all duration-300 '>{children}</main> */}
    </div>
  );
}
