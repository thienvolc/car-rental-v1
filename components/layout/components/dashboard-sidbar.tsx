'use client';

import { Calendar, Car, Home } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type SidebarProps = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
};

export default function DashboardSidebar({ isMobileMenuOpen, setIsMobileMenuOpen }: SidebarProps) {
  const [activeMenu, setActiveMenu] = useState('dashboard');

  // Đóng sidebar khi click bên ngoài (chỉ trên mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.sidebar') && !target.closest('header')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen, setIsMobileMenuOpen]);

  // Khóa cuộn trang khi sidebar mở trên mobile
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    // Chỉ đóng sidebar trên mobile
    if (window.innerWidth < 768) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Overlay khi mở sidebar trên mobile */}
      {isMobileMenuOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden'
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - cố định trên desktop, toggle trên mobile */}
      <div
        className={`sidebar fixed md:fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-30 transition-transform duration-300 ease-in-out pt-16 ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } text-sm overflow-y-auto`}
      >
        <div className='p-4 border-b border-gray-200'>
          <p className='text-sm text-gray-500'>Quản lý dịch vụ xe</p>
        </div>
        <nav className='p-4'>
          <ul className='space-y-2'>
            <li>
              <Link
                href='/'
                className={`flex items-center p-3 rounded-lg ${
                  activeMenu === '/' ? 'bg-orange-100 text-orange-600' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => handleMenuClick('/')}
              >
                <Home className='h-5 w-5 mr-3' />
                Trang chủ
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard'
                className={`flex items-center p-3 rounded-lg ${
                  activeMenu === 'dashboard' ? 'bg-orange-100 text-orange-600' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => handleMenuClick('dashboard')}
              >
                <Home className='h-5 w-5 mr-3' />
                Tổng quan
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard/trips/history'
                className={`flex items-center p-3 rounded-lg ${
                  activeMenu === 'bookings' ? 'bg-orange-100 text-orange-600' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => handleMenuClick('bookings')}
              >
                <Calendar className='h-5 w-5 mr-3' />
                Lịch sử chuyến đi
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard/trips/reviews'
                className={`flex items-center p-3 rounded-lg ${
                  activeMenu === 'reviews' ? 'bg-orange-100 text-orange-600' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => handleMenuClick('reviews')}
              >
                <Calendar className='h-5 w-5 mr-3' />
                Đánh giá chuyến đi
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard/trips/home'
                className={`flex items-center p-3 rounded-lg ${
                  activeMenu === 'trip/home' ? 'bg-orange-100 text-orange-600' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => handleMenuClick('trip/home')}
              >
                <Calendar className='h-5 w-5 mr-3' />
                Quản lý chuyến đi
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard/trips/track'
                className={`flex items-center p-3 rounded-lg ${
                  activeMenu === 'trip/track' ? 'bg-orange-100 text-orange-600' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => handleMenuClick('trip/track')}
              >
                <Calendar className='h-5 w-5 mr-3' />
                Theo dõi chuyến đi
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard/cars/post-car'
                className={`flex items-center p-3 rounded-lg ${
                  activeMenu === 'cars' ? 'bg-orange-100 text-orange-600' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => handleMenuClick('cars')}
              >
                <Car className='h-5 w-5 mr-3' />
                Thêm xe
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard/users/123/profile'
                className={`flex items-center p-3 rounded-lg ${
                  activeMenu === 'user/profile' ? 'bg-orange-100 text-orange-600' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => handleMenuClick('user/profile')}
              >
                <Car className='h-5 w-5 mr-3' />
                Hồ sơ người dùng
              </Link>
            </li>
            <li>
              <Link
                href='/dashboard/users/123/trips'
                className={`flex items-center p-3 rounded-lg ${
                  activeMenu === 'user/trips' ? 'bg-orange-100 text-orange-600' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => handleMenuClick('user/trips')}
              >
                <Car className='h-5 w-5 mr-3' />
                Chuyến đi của tôi
              </Link>
            </li>
            {/* Giữ các menu items khác */}
          </ul>
        </nav>
      </div>
    </>
  );
}
