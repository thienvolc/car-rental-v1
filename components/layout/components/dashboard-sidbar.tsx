'use client';

import { Calendar, Car, Home, ChevronDown, ChevronRight, User, Star, Plus, MapPin, History } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type MenuItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
  href?: string;
  children?: MenuItem[];
};

type SidebarProps = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
};

export default function DashboardSidebar({ isMobileMenuOpen, setIsMobileMenuOpen }: SidebarProps) {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['trips']); // Mặc định mở nhóm chuyến đi

  // Cấu trúc menu phân cấp
  const menuItems: MenuItem[] = [
    {
      id: 'home',
      label: 'Trang chủ',
      icon: <Home className='h-5 w-5' />,
      href: '/'
    },
    {
      id: 'dashboard',
      label: 'Tổng quan',
      icon: <Home className='h-5 w-5' />,
      href: '/dashboard'
    },
    {
      id: 'trips',
      label: 'Quản lý chuyến đi',
      icon: <Calendar className='h-5 w-5' />,
      children: [
        {
          id: 'trip-history',
          label: 'Lịch sử chuyến đi',
          icon: <History className='h-4 w-4' />,
          href: '/dashboard/trips/history'
        },
        {
          id: 'trip-reviews',
          label: 'Đánh giá chuyến đi',
          icon: <Star className='h-4 w-4' />,
          href: '/dashboard/trips/reviews'
        },
        {
          id: 'trip-management',
          label: 'Quản lý chuyến đi',
          icon: <Calendar className='h-4 w-4' />,
          href: '/dashboard/trips/home'
        },
        {
          id: 'trip-tracking',
          label: 'Theo dõi chuyến đi',
          icon: <MapPin className='h-4 w-4' />,
          href: '/dashboard/trips/track'
        }
      ]
    },
    {
      id: 'cars',
      label: 'Quản lý xe',
      icon: <Car className='h-5 w-5' />,
      children: [
        {
          id: 'add-car',
          label: 'Thêm xe',
          icon: <Plus className='h-4 w-4' />,
          href: '/dashboard/cars/post-car'
        },
        {
          id: 'car-list',
          label: 'Danh sách xe',
          icon: <Car className='h-4 w-4' />,
          href: '/dashboard/cars'
        }
      ]
    },
    {
      id: 'users',
      label: 'Tài khoản',
      icon: <User className='h-5 w-5' />,
      children: [
        {
          id: 'user-profile',
          label: 'Hồ sơ người dùng',
          icon: <User className='h-4 w-4' />,
          href: '/dashboard/users/123/profile'
        },
        {
          id: 'user-trips',
          label: 'Chuyến đi của tôi',
          icon: <Calendar className='h-4 w-4' />,
          href: '/dashboard/users/123/trips'
        }
      ]
    }
  ];

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

  const toggleExpanded = (menuId: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuId) 
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    );
  };

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const isExpanded = expandedMenus.includes(item.id);
    const hasChildren = item.children && item.children.length > 0;
    const isActive = activeMenu === item.id;
    
    const paddingLeft = level === 0 ? 'pl-3' : 'pl-8';
    const textSize = level === 0 ? 'text-sm font-medium' : 'text-sm';
    
    return (
      <li key={item.id}>
        {hasChildren ? (
          // Menu cha có children
          <button
            onClick={() => toggleExpanded(item.id)}
            className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
              isExpanded 
                ? 'bg-orange-50 text-orange-600' 
                : 'text-gray-700 hover:bg-gray-100'
            } ${paddingLeft} ${textSize}`}
          >
            <div className='flex items-center'>
              {item.icon}
              <span className='ml-3'>{item.label}</span>
            </div>
            {isExpanded ? (
              <ChevronDown className='h-4 w-4' />
            ) : (
              <ChevronRight className='h-4 w-4' />
            )}
          </button>
        ) : (
          // Menu lá không có children
          <Link
            href={item.href || '#'}
            className={`flex items-center p-3 rounded-lg transition-colors ${
              isActive 
                ? 'bg-orange-100 text-orange-600' 
                : 'text-gray-700 hover:bg-gray-100'
            } ${paddingLeft} ${textSize}`}
            onClick={() => handleMenuClick(item.id)}
          >
            {item.icon}
            <span className='ml-3'>{item.label}</span>
          </Link>
        )}
        
        {/* Render children nếu có và được expand */}
        {hasChildren && isExpanded && (
          <ul className='mt-1 space-y-1'>
            {item.children!.map(child => renderMenuItem(child, level + 1))}
          </ul>
        )}
      </li>
    );
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
        } overflow-y-auto`}
      >
        <div className='p-4 border-b border-gray-200'>
          <p className='text-sm text-gray-500 font-medium'>Quản lý dịch vụ xe</p>
        </div>
        
        <nav className='p-4'>
          <ul className='space-y-2'>
            {menuItems.map(item => renderMenuItem(item))}
          </ul>
        </nav>
      </div>
    </>
  );
}