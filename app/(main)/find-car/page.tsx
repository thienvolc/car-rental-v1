'use client';

import { useState, useMemo, useCallback, memo } from 'react';
import { mockCars } from '@/features/cars/mock';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, MapPin, Calendar, Car, 
  PiggyBank, SlidersHorizontal, Filter, 
  Star, Info, Check, ChevronDown, X, Grid3X3
} from 'lucide-react';

// Memoized car card component
const CarCard = memo(({ car }: { car: any }) => {
  const formatPrice = useCallback((price: number) => {
    return new Intl.NumberFormat('vi-VN').format(price) + ' VNĐ';
  }, []);

  return (
    <div className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200 hover:shadow-md hover:border-orange-200 group'>
      <div className='relative overflow-hidden'>
        <Image
          src={car.images[0]}
          alt={car.name}
          className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105'
          width={400}
          height={192}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className='absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 py-1 px-2 rounded-full text-sm font-medium flex items-center'>
          <Star className="mr-1" size={12} fill="currentColor" strokeWidth={0} />
          4.8
        </div>
      </div>
      
      <div className='p-4'>
        <h3 className='text-lg font-semibold text-gray-800 mb-2 line-clamp-1'>{car.name}</h3>
        
        <div className='flex flex-wrap gap-1.5 mb-3'>
          <span className='bg-orange-50 text-orange-600 px-2 py-1 rounded-md text-xs flex items-center border border-orange-100'>
            <Car className="mr-1" size={10} strokeWidth={1.5} />
            Sedan
          </span>
          <span className='bg-blue-50 text-blue-600 px-2 py-1 rounded-md text-xs flex items-center border border-blue-100'>
            <MapPin className="mr-1" size={10} strokeWidth={1.5} />
            {car.location || 'Hà Nội'}
          </span>
          <span className='bg-green-50 text-green-600 px-2 py-1 rounded-md text-xs flex items-center border border-green-100'>
            <Check className="mr-1" size={10} strokeWidth={1.5} />
            Giao xe
          </span>
        </div>
        
        <div className='flex justify-between items-center mb-4'>
          <div className='text-gray-800 font-bold text-lg'>
            {formatPrice(car.price)} 
            <span className='text-gray-500 font-normal text-sm'>/ngày</span>
          </div>
          <div className='text-gray-500 text-sm'>25+ lượt thuê</div>
        </div>
        
        <div className='grid grid-cols-2 gap-2'>
          <Link 
            href={`/cars/${car.id}`}
            className='bg-gray-50 hover:bg-gray-100 text-gray-700 px-3 py-2 rounded-lg font-medium text-center transition-colors duration-200 text-sm flex items-center justify-center'
          >
            <Info className="mr-1" size={14} strokeWidth={1.5} />
            Chi tiết
          </Link>
          <Link
            href={`/cars/${car.id}/bookings`}
            className='bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-lg font-medium text-center transition-colors duration-200 text-sm flex items-center justify-center'
          >
            <Car className="mr-1" size={14} strokeWidth={1.5} />
            Đặt xe
          </Link>
        </div>
      </div>
    </div>
  );
});

CarCard.displayName = 'CarCard';

export default function FindCarPage() {
  const [filters, setFilters] = useState({
    location: '',
    pickupDate: '',
    returnDate: '',
    carType: '',
    priceRange: ''
  });
  
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [sortBy, setSortBy] = useState('default');

  // Optimized filter change handler
  const handleFilterChange = useCallback((key: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  // Memoized filtered and sorted cars
  const filteredAndSortedCars = useMemo(() => {
    let filtered = mockCars.filter(car => {
      // Location filter
      if (filters.location && !car.location?.toLowerCase().includes(filters.location.toLowerCase())) {
        return false;
      }
      
      // Price range filter
      if (filters.priceRange) {
        const [min, max] = filters.priceRange.split('-').map(p => parseInt(p) || 0);
        if (max && (car.price < min || car.price > max)) return false;
        if (!max && car.price < min) return false;
      }
      
      return true;
    });

    // Sort cars
    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'rating':
      default:
        return filtered;
    }
  }, [filters, sortBy]);

  const handleApplyFilter = useCallback(() => {
    setShowMobileFilters(false);
    // Filter logic is handled by useMemo
  }, []);

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto py-4 md:py-8 px-4'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-2xl md:text-3xl font-bold text-gray-900 mb-2 flex items-center'>
            <Car className="mr-3 text-orange-500" strokeWidth={1.5} size={32} />
            Tìm xe phù hợp
          </h1>
          <p className='text-gray-600'>Khám phá hàng ngàn chiếc xe chất lượng với giá tốt nhất</p>
        </div>
        
        {/* Top Filter Section */}
        <div className='bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8'>
          {/* Mobile Filter Toggle */}
          <div className='lg:hidden mb-4'>
            <button 
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className='w-full bg-orange-500 text-white p-3 rounded-xl font-medium flex items-center justify-center hover:bg-orange-600 transition-colors duration-200'
            >
              <SlidersHorizontal className="mr-2" size={18} strokeWidth={1.5} />
              {showMobileFilters ? 'Ẩn bộ lọc' : 'Hiện bộ lọc'}
            </button>
          </div>

          {/* Filter Content */}
          <div className={`${showMobileFilters ? 'block' : 'hidden'} lg:block`}>
            <div className='flex items-center mb-4'>
              <Filter className="mr-2 text-orange-500" size={20} strokeWidth={1.5} />
              <h2 className='text-lg font-semibold text-gray-800'>Bộ lọc tìm kiếm</h2>
            </div>
            
            {/* Desktop Filter Layout */}
            <div className='hidden lg:grid lg:grid-cols-6 gap-4 items-end'>
              <div>
                <label className='block text-gray-700 mb-2 font-medium text-sm flex items-center'>
                  <MapPin className="mr-1 text-orange-500" size={14} strokeWidth={1.5} />
                  Địa điểm
                </label>
                <input
                  type='text'
                  placeholder='Nhập địa điểm'
                  className='w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm'
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                />
              </div>
              
              <div>
                <label className='block text-gray-700 mb-2 font-medium text-sm flex items-center'>
                  <Calendar className="mr-1 text-orange-500" size={14} strokeWidth={1.5} />
                  Ngày nhận
                </label>
                <input
                  type='date'
                  className='w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm'
                  value={filters.pickupDate}
                  onChange={(e) => handleFilterChange('pickupDate', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              
              <div>
                <label className='block text-gray-700 mb-2 font-medium text-sm flex items-center'>
                  <Calendar className="mr-1 text-orange-500" size={14} strokeWidth={1.5} />
                  Ngày trả
                </label>
                <input
                  type='date'
                  className='w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm'
                  value={filters.returnDate}
                  onChange={(e) => handleFilterChange('returnDate', e.target.value)}
                  min={filters.pickupDate || new Date().toISOString().split('T')[0]}
                />
              </div>
              
              <div>
                <label className='block text-gray-700 mb-2 font-medium text-sm flex items-center'>
                  <Car className="mr-1 text-orange-500" size={14} strokeWidth={1.5} />
                  Loại xe
                </label>
                <div className='relative'>
                  <select 
                    className='w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 appearance-none transition-all text-sm bg-white'
                    value={filters.carType}
                    onChange={(e) => handleFilterChange('carType', e.target.value)}
                  >
                    <option value="">Tất cả</option>
                    <option value="Sedan">Sedan</option>
                    <option value="SUV">SUV</option>
                    <option value="MPV">MPV</option>
                    <option value="Hatchback">Hatchback</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={16} strokeWidth={1.5} />
                </div>
              </div>
              
              <div>
                <label className='block text-gray-700 mb-2 font-medium text-sm flex items-center'>
                  <PiggyBank className="mr-1 text-orange-500" size={14} strokeWidth={1.5} />
                  Khoảng giá
                </label>
                <div className='relative'>
                  <select 
                    className='w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 appearance-none transition-all text-sm bg-white'
                    value={filters.priceRange}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                  >
                    <option value="">Tất cả</option>
                    <option value="0-500000">500K</option>
                    <option value="500000-1000000">500K - 1M</option>
                    <option value="1000000-2000000">1M - 2M</option>
                    <option value="2000000-">2M</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={16} strokeWidth={1.5} />
                </div>
              </div>
              
              <div>
                <button 
                  onClick={handleApplyFilter}
                  className='w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg font-semibold flex items-center justify-center transition-colors duration-200 h-12'
                >
                  <Search className="mr-2" size={16} strokeWidth={2} />
                  Tìm kiếm
                </button>
              </div>
            </div>
            
            {/* Mobile Filter Layout */}
            <div className='lg:hidden space-y-4'>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='block text-gray-700 mb-2 font-medium text-sm flex items-center'>
                    <Calendar className="mr-1 text-orange-500" size={14} strokeWidth={1.5} />
                    Ngày nhận
                  </label>
                  <input
                    type='date'
                    className='w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm'
                    value={filters.pickupDate}
                    onChange={(e) => handleFilterChange('pickupDate', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div>
                  <label className='block text-gray-700 mb-2 font-medium text-sm flex items-center'>
                    <Calendar className="mr-1 text-orange-500" size={14} strokeWidth={1.5} />
                    Ngày trả
                  </label>
                  <input
                    type='date'
                    className='w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm'
                    value={filters.returnDate}
                    onChange={(e) => handleFilterChange('returnDate', e.target.value)}
                    min={filters.pickupDate || new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>
              
              <div>
                <label className='block text-gray-700 mb-2 font-medium text-sm flex items-center'>
                  <MapPin className="mr-1 text-orange-500" size={14} strokeWidth={1.5} />
                  Địa điểm
                </label>
                <input
                  type='text'
                  placeholder='Nhập địa điểm nhận xe'
                  className='w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-sm'
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                />
              </div>
              
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className='block text-gray-700 mb-2 font-medium text-sm flex items-center'>
                    <Car className="mr-1 text-orange-500" size={14} strokeWidth={1.5} />
                    Loại xe
                  </label>
                  <div className='relative'>
                    <select 
                      className='w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 appearance-none transition-all text-sm bg-white'
                      value={filters.carType}
                      onChange={(e) => handleFilterChange('carType', e.target.value)}
                    >
                      <option value="">Tất cả</option>
                      <option value="Sedan">Sedan</option>
                      <option value="SUV">SUV</option>
                      <option value="MPV">MPV</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={16} strokeWidth={1.5} />
                  </div>
                </div>
                
                <div>
                  <label className='block text-gray-700 mb-2 font-medium text-sm flex items-center'>
                    <PiggyBank className="mr-1 text-orange-500" size={14} strokeWidth={1.5} />
                    Khoảng giá
                  </label>
                  <div className='relative'>
                    <select 
                      className='w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 appearance-none transition-all text-sm bg-white'
                      value={filters.priceRange}
                      onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    >
                      <option value="">Tất cả</option>
                      <option value="0-500000">500K</option>
                      <option value="500000-1000000">500K - 1M</option>
                      <option value="1000000-2000000">1M - 2M</option>
                      <option value="2000000-">2M</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={16} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
              
              <button 
                onClick={handleApplyFilter}
                className='w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg font-semibold flex items-center justify-center transition-colors duration-200 mt-4'
              >
                <Search className="mr-2" size={16} strokeWidth={2} />
                Tìm kiếm xe
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div>
          {/* Results header */}
          <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4'>
            <div>
              <h2 className='text-xl font-bold text-gray-900 flex items-center'>
                <Grid3X3 className="mr-2 text-orange-500" size={20} strokeWidth={1.5} />
                Kết quả tìm kiếm 
                <span className='ml-2 text-orange-500'>({filteredAndSortedCars.length})</span>
              </h2>
              <p className='text-gray-600 text-sm mt-1'>
                {filteredAndSortedCars.length} xe phù hợp với tiêu chí của bạn
              </p>
            </div>
            
            <div className='flex items-center'>
              <label className='text-gray-600 text-sm mr-2 hidden sm:block'>Sắp xếp:</label>
              <select 
                className='border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 bg-white'
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Mặc định</option>
                <option value="price-low">Giá: Thấp → Cao</option>
                <option value="price-high">Giá: Cao → Thấp</option>
                <option value="rating">Đánh giá cao nhất</option>
              </select>
            </div>
          </div>

          {/* Cars grid - 4 columns */}
          {filteredAndSortedCars.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'>
              {filteredAndSortedCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className='text-center py-16 bg-white rounded-2xl border border-gray-100'>
              <Car className="mx-auto text-gray-400 mb-4" size={64} strokeWidth={1} />
              <h3 className='text-xl font-semibold text-gray-600 mb-2'>Không tìm thấy xe phù hợp</h3>
              <p className='text-gray-500 mb-4'>Hãy thử điều chỉnh bộ lọc để tìm thêm lựa chọn khác</p>
              <button 
                onClick={() => setFilters({ location: '', pickupDate: '', returnDate: '', carType: '', priceRange: '' })}
                className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors'
              >
                Xóa bộ lọc
              </button>
            </div>
          )}
          
          {/* Pagination */}
          {filteredAndSortedCars.length > 0 && (
            <div className='mt-12 flex justify-center'>
              <div className='flex items-center space-x-1 bg-white rounded-xl p-2 shadow-sm border border-gray-100'>
                <button className='w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600'>
                  &laquo;
                </button>
                <button className='w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center font-medium'>
                  1
                </button>
                <button className='w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600'>
                  2
                </button>
                <button className='w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600'>
                  3
                </button>
                <button className='w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-600'>
                  &raquo;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}