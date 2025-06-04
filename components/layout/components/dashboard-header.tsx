'use client';

import { Menu, Bell, User } from 'lucide-react';
import Link from 'next/link';

type HeaderProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

export default function DashboardHeader({ toggleSidebar }: HeaderProps) {
  return (
    <header className='fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-40 px-4'>
      <div className='flex items-center justify-between h-full'>
        <div className='flex items-center'>
          {/* Chỉ hiển thị nút toggle trên mobile */}
          <button
            className='md:hidden p-2 rounded-md hover:bg-gray-100 mr-4'
            onClick={toggleSidebar}
            aria-label='Toggle sidebar'
          >
            <Menu size={20} />
          </button>
          <Link href='/dashboard' className='font-bold text-orange-600 text-lg md:text-xl'>
            AuRent
          </Link>
        </div>

        <div className='flex items-center space-x-3'>
          <button className='p-2 rounded-full hover:bg-gray-100 relative'>
            <Bell size={20} />
            <span className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full'></span>
          </button>
          <div className='w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center'>
            <User size={18} />
          </div>
        </div>
      </div>
    </header>
  );
}
