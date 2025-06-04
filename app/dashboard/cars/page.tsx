'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Car, Search, Filter, Settings, Edit, Trash2, Eye, EyeOff, 
  ArrowUpDown, Calendar, PiggyBank, MapPin, Users, Plus
} from 'lucide-react';
import { mockCars } from '@/features/cars/mock';

export default function CarListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Danh sách xe mẫu với thêm các thuộc tính cần thiết
  const cars = mockCars.map(car => ({
    ...car,
    status: ['active', 'hidden', 'maintenance'][Math.floor(Math.random() * 3)],
    bookingCount: Math.floor(Math.random() * 50),
    rating: (3 + Math.random() * 2).toFixed(1),
    lastUpdated: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
    earnings: Math.floor(Math.random() * 20 + 5) * 500000,
  }));

  // Lọc và sắp xếp xe
  const filteredCars = cars
    .filter(car => {
      // Lọc theo tìm kiếm
      if (searchTerm && !car.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      // Lọc theo trạng thái
      if (statusFilter !== 'all' && car.status !== statusFilter) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      // Sắp xếp theo các tiêu chí
      switch (sortBy) {
        case 'price-high':
          return b.price - a.price;
        case 'price-low':
          return a.price - b.price;
        case 'bookings':
          return b.bookingCount - a.bookingCount;
        case 'rating':
          return parseFloat(b.rating) - parseFloat(a.rating);
        case 'newest':
        default:
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
      }
    });

  // Format tiền tệ
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' VNĐ';
  };

  // Hiển thị trạng thái xe
  const renderStatus = (status: string) => {
    switch (status) {
      case 'active':
        return <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Đang hoạt động</span>;
      case 'hidden':
        return <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">Đã ẩn</span>;
      case 'maintenance':
        return <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">Bảo trì</span>;
      default:
        return <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">{status}</span>;
    }
  };

  return (
    <div className="pb-12">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 flex items-center">
          <Car className="mr-3 text-orange-500" strokeWidth={1.5} />
          Quản lý danh sách xe
        </h1>
        <p className="text-gray-600">Quản lý và theo dõi trạng thái các xe bạn đang cho thuê</p>
      </div>

      {/* Thống kê tổng quan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Tổng số xe</p>
              <h3 className="text-2xl font-bold text-gray-800">{cars.length}</h3>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Car className="text-blue-600 h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Đang hoạt động</p>
              <h3 className="text-2xl font-bold text-green-600">
                {cars.filter(car => car.status === 'active').length}
              </h3>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Eye className="text-green-600 h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Tổng lượt thuê</p>
              <h3 className="text-2xl font-bold text-orange-500">
                {cars.reduce((total, car) => total + car.bookingCount, 0)}
              </h3>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <Calendar className="text-orange-600 h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Tổng doanh thu</p>
              <h3 className="text-xl font-bold text-purple-600">
                {formatCurrency(cars.reduce((total, car) => total + car.earnings, 0))}
              </h3>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <PiggyBank className="text-purple-600 h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Filter và Search Bar */}
      <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm mb-6 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên xe..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex items-center gap-2">
              <button
                className={`p-2 rounded-lg border ${viewMode === 'grid' ? 'bg-orange-100 border-orange-300 text-orange-600' : 'bg-white border-gray-300 text-gray-500'}`}
                onClick={() => setViewMode('grid')}
                title="Chế độ xem lưới"
              >
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                  <div className="w-1.5 h-1.5 bg-current rounded-sm"></div>
                </div>
              </button>
              <button
                className={`p-2 rounded-lg border ${viewMode === 'list' ? 'bg-orange-100 border-orange-300 text-orange-600' : 'bg-white border-gray-300 text-gray-500'}`}
                onClick={() => setViewMode('list')}
                title="Chế độ xem danh sách"
              >
                <div className="flex flex-col gap-0.5">
                  <div className="w-4 h-1 bg-current rounded-sm"></div>
                  <div className="w-4 h-1 bg-current rounded-sm"></div>
                  <div className="w-4 h-1 bg-current rounded-sm"></div>
                </div>
              </button>
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-2.5 text-gray-400" size={16} />
              <select
                className="appearance-none pl-9 pr-8 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">Tất cả trạng thái</option>
                <option value="active">Đang hoạt động</option>
                <option value="hidden">Đã ẩn</option>
                <option value="maintenance">Bảo trì</option>
              </select>
            </div>
            <div className="relative">
              <Car className="absolute left-3 top-2.5 text-gray-400" size={16} />
              <select
                className="appearance-none pl-9 pr-8 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="all">Tất cả loại xe</option>
                <option value="Sedan">Sedan</option>
                <option value="SUV">SUV</option>
                <option value="MPV">MPV</option>
                <option value="Hatchback">Hatchback</option>
              </select>
            </div>
            <div className="relative">
              <ArrowUpDown className="absolute left-3 top-2.5 text-gray-400" size={16} />
              <select
                className="appearance-none pl-9 pr-8 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Mới nhất</option>
                <option value="price-high">Giá cao đến thấp</option>
                <option value="price-low">Giá thấp đến cao</option>
                <option value="bookings">Lượt thuê nhiều nhất</option>
                <option value="rating">Đánh giá cao nhất</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-gray-600 text-sm">
            Hiển thị <span className="font-semibold">{filteredCars.length}</span> trên tổng số <span className="font-semibold">{cars.length}</span> xe
          </p>
          <Link
            href="/dashboard/cars/post-car"
            className="flex items-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <Plus size={16} className="mr-1" />
            Thêm xe mới
          </Link>
        </div>
      </div>

      {/* Danh sách xe - Chế độ xem lưới */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative">
                <Image
                  src={car.images[0]}
                  alt={car.name}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                {renderStatus(car.status)}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1 truncate">{car.name}</h3>
                <div className="flex items-center mb-2">
                  <MapPin size={14} className="text-gray-500 mr-1" />
                  <span className="text-gray-600 text-sm">{car.location || 'Hà Nội'}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <div className="text-orange-600 font-semibold">{formatCurrency(car.price)}/ngày</div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users size={14} className="mr-1" />
                    <span>{car.bookingCount} lượt thuê</span>
                  </div>
                </div>
                <div className="flex justify-between text-sm mb-3">
                  <div className="flex items-center text-yellow-500">
                    <span className="mr-1">★</span>
                    <span>{car.rating}/5</span>
                  </div>
                  <div className="text-gray-500">
                    Doanh thu: {formatCurrency(car.earnings)}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button className="flex justify-center items-center p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                    <Edit size={16} />
                  </button>
                  <button className="flex justify-center items-center p-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                    {car.status === 'hidden' ? <Eye size={16} /> : <EyeOff size={16} />}
                  </button>
                  <button className="flex justify-center items-center p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Danh sách xe - Chế độ xem danh sách */}
      {viewMode === 'list' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Xe</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Loại</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng thái</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lượt thuê</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Đánh giá</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCars.map((car) => (
                  <tr key={car.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 mr-3">
                          <Image
                            src={car.images[0]}
                            alt={car.name}
                            width={40}
                            height={40}
                            className="h-10 w-10 rounded-md object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{car.name}</div>
                          <div className="text-xs text-gray-500">{car.location || 'Hà Nội'}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      {'Sedan'}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="text-sm text-orange-600 font-medium">{formatCurrency(car.price)}</div>
                      <div className="text-xs text-gray-500">mỗi ngày</div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {renderStatus(car.status)}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                      {car.bookingCount} lượt
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center text-yellow-500 text-sm">
                        <span className="mr-1">★</span>
                        <span>{car.rating}/5</span>
                      </div>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm">
                      <div className="flex space-x-2">
                        <button className="p-1.5 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors">
                          <Edit size={16} />
                        </button>
                        <button className="p-1.5 bg-gray-50 text-gray-600 rounded-md hover:bg-gray-100 transition-colors">
                          {car.status === 'hidden' ? <Eye size={16} /> : <EyeOff size={16} />}
                        </button>
                        <button className="p-1.5 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Nếu không có kết quả */}
      {filteredCars.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm p-8 text-center border border-gray-100">
          <Car className="mx-auto h-16 w-16 text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-2">Không tìm thấy xe nào</h3>
          <p className="text-gray-600 mb-6">Không có xe nào phù hợp với điều kiện tìm kiếm của bạn.</p>
          <Link
            href="/dashboard/cars/post-car"
            className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            <Plus size={16} className="mr-2" />
            Thêm xe mới
          </Link>
        </div>
      )}
    </div>
  );
}