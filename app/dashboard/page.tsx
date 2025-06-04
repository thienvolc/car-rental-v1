'use client';

import { useState } from 'react';
import { Calendar, Car, DollarSign, MapPin, Menu, Settings, Star, Users, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardSidebar from '@/components/layout/components/dashboard-sidbar';

export default function DashboardPage() {
  const [period, setPeriod] = useState<'day' | 'week' | 'month' | 'year'>('month');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mock data - replace with API calls in real implementation
  const overviewData = {
    totalBookings: 152,
    totalRevenue: 75500000,
    activeRentals: 12,
    completedRentals: 140,
    totalCars: 15,
    averageRating: 4.7,
  };

  const recentBookings = [
    {
      id: 'B1234',
      customerName: 'Nguyễn Văn A',
      carName: 'Toyota Camry',
      startDate: '2025-06-01',
      endDate: '2025-06-03',
      status: 'active',
      amount: 1500000,
    },
    {
      id: 'B1235',
      customerName: 'Trần Thị B',
      carName: 'Honda CR-V',
      startDate: '2025-06-02',
      endDate: '2025-06-04',
      status: 'pending',
      amount: 1800000,
    },
    {
      id: 'B1236',
      customerName: 'Lê Minh C',
      carName: 'Mazda CX-5',
      startDate: '2025-06-03',
      endDate: '2025-06-05',
      status: 'completed',
      amount: 1600000,
    },
    {
      id: 'B1237',
      customerName: 'Phạm Thanh D',
      carName: 'Hyundai Tucson',
      startDate: '2025-06-04',
      endDate: '2025-06-06',
      status: 'cancelled',
      amount: 1700000,
    },
  ];

  const cars = [
    { id: 'C001', name: 'Toyota Camry', status: 'available', bookingRate: '85%', revenue: 25000000 },
    { id: 'C002', name: 'Honda CR-V', status: 'rented', bookingRate: '92%', revenue: 30000000 },
    { id: 'C003', name: 'Mazda CX-5', status: 'maintenance', bookingRate: '78%', revenue: 18000000 },
    { id: 'C004', name: 'Hyundai Tucson', status: 'available', bookingRate: '81%', revenue: 20500000 },
  ];

  return (
    <div className='flex flex-col md:flex-row bg-gray-50 min-h-screen'>
      {/* Main content */}
      <div className='flex-1 p-4 md:p-6 md:ml-0'>
        <h1 className='text-2xl md:text-3xl font-bold text-gray-800 mb-6'>Bảng điều khiển chủ xe</h1>

        {/* Overview Cards - Improved responsive grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8'>
          <Card className='p-4 md:p-6 hover:shadow-md transition-shadow'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm font-medium text-gray-500'>Tổng đơn đặt xe</p>
                <h3 className='text-xl md:text-2xl font-bold text-gray-800'>{overviewData.totalBookings}</h3>
              </div>
              <div className='bg-blue-100 p-2 md:p-3 rounded-full'>
                <Calendar className='text-blue-600 h-5 w-5 md:h-6 md:w-6' />
              </div>
            </div>
            <div className='mt-3 md:mt-4'>
              <p className='text-xs md:text-sm text-green-600 flex items-center'>
                +12% <span className='text-gray-500 ml-1'>so với tháng trước</span>
              </p>
            </div>
          </Card>

          <Card className='p-4 md:p-6 hover:shadow-md transition-shadow'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm font-medium text-gray-500'>Doanh thu</p>
                <h3 className='text-xl md:text-2xl font-bold text-gray-800'>
                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                    overviewData.totalRevenue,
                  )}
                </h3>
              </div>
              <div className='bg-green-100 p-2 md:p-3 rounded-full'>
                <DollarSign className='text-green-600 h-5 w-5 md:h-6 md:w-6' />
              </div>
            </div>
            <div className='mt-3 md:mt-4'>
              <p className='text-xs md:text-sm text-green-600 flex items-center'>
                +8% <span className='text-gray-500 ml-1'>so với tháng trước</span>
              </p>
            </div>
          </Card>

          <Card className='p-4 md:p-6 hover:shadow-md transition-shadow'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm font-medium text-gray-500'>Đang cho thuê</p>
                <h3 className='text-xl md:text-2xl font-bold text-gray-800'>{overviewData.activeRentals}</h3>
              </div>
              <div className='bg-orange-100 p-2 md:p-3 rounded-full'>
                <Car className='text-orange-600 h-5 w-5 md:h-6 md:w-6' />
              </div>
            </div>
            <div className='mt-3 md:mt-4'>
              <p className='text-xs md:text-sm text-orange-600 flex items-center'>
                {overviewData.activeRentals}/{overviewData.totalCars}{' '}
                <span className='text-gray-500 ml-1'>xe đang hoạt động</span>
              </p>
            </div>
          </Card>

          <Card className='p-4 md:p-6 hover:shadow-md transition-shadow'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm font-medium text-gray-500'>Đánh giá trung bình</p>
                <h3 className='text-xl md:text-2xl font-bold text-gray-800'>{overviewData.averageRating}/5</h3>
              </div>
              <div className='bg-yellow-100 p-2 md:p-3 rounded-full'>
                <Star className='text-yellow-600 h-5 w-5 md:h-6 md:w-6' />
              </div>
            </div>
            <div className='mt-3 md:mt-4'>
              <p className='text-xs md:text-sm text-yellow-600 flex items-center'>
                +0.2 <span className='text-gray-500 ml-1'>so với tháng trước</span>
              </p>
            </div>
          </Card>
        </div>

        {/* Main content area - Improved layout for mobile */}
        <div className='flex flex-col lg:flex-row gap-6'>
          <div className='w-full'>
            <Tabs defaultValue='bookings' className='w-full'>
              <TabsList className='mb-4 overflow-x-auto flex whitespace-nowrap'>
                <TabsTrigger value='bookings'>Đơn đặt xe</TabsTrigger>
                <TabsTrigger value='cars'>Quản lý xe</TabsTrigger>
                <TabsTrigger value='analytics'>Phân tích</TabsTrigger>
              </TabsList>

              <TabsContent value='bookings' className='bg-white p-4 md:p-6 rounded-xl shadow-sm'>
                <div className='flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3'>
                  <h2 className='text-lg md:text-xl font-bold text-gray-800'>Đơn đặt xe gần đây</h2>
                  <Button variant='outline' size='sm' className='sm:w-auto w-full'>
                    Xem tất cả
                  </Button>
                </div>

                <div className='overflow-x-auto -mx-4 sm:mx-0'>
                  <div className='inline-block min-w-full align-middle p-4 sm:p-0'>
                    <table className='min-w-full divide-y divide-gray-200'>
                      <thead>
                        <tr className='border-b border-gray-200'>
                          <th className='px-3 md:px-4 py-3 text-left text-xs md:text-sm font-medium text-gray-600'>
                            Mã đơn
                          </th>
                          <th className='px-3 md:px-4 py-3 text-left text-xs md:text-sm font-medium text-gray-600'>
                            Khách hàng
                          </th>
                          <th className='px-3 md:px-4 py-3 text-left text-xs md:text-sm font-medium text-gray-600'>
                            Xe
                          </th>
                          <th className='px-3 md:px-4 py-3 text-left text-xs md:text-sm font-medium text-gray-600 hidden md:table-cell'>
                            Thời gian
                          </th>
                          <th className='px-3 md:px-4 py-3 text-left text-xs md:text-sm font-medium text-gray-600'>
                            Trạng thái
                          </th>
                          <th className='px-3 md:px-4 py-3 text-left text-xs md:text-sm font-medium text-gray-600 hidden sm:table-cell'>
                            Số tiền
                          </th>
                          <th className='px-3 md:px-4 py-3 text-right text-xs md:text-sm font-medium text-gray-600'>
                            Thao tác
                          </th>
                        </tr>
                      </thead>
                      <tbody className='divide-y divide-gray-200'>
                        {recentBookings.map((booking) => (
                          <tr key={booking.id} className='hover:bg-gray-50'>
                            <td className='px-3 md:px-4 py-3 text-xs md:text-sm text-blue-600 font-medium'>
                              {booking.id}
                            </td>
                            <td className='px-3 md:px-4 py-3 text-xs md:text-sm'>{booking.customerName}</td>
                            <td className='px-3 md:px-4 py-3 text-xs md:text-sm'>{booking.carName}</td>
                            <td className='px-3 md:px-4 py-3 text-xs md:text-sm hidden md:table-cell'>
                              {booking.startDate} - {booking.endDate}
                            </td>
                            <td className='px-3 md:px-4 py-3 text-xs md:text-sm'>
                              <span
                                className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                                  booking.status === 'active'
                                    ? 'bg-green-100 text-green-800'
                                    : booking.status === 'pending'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : booking.status === 'completed'
                                    ? 'bg-blue-100 text-blue-800'
                                    : 'bg-red-100 text-red-800'
                                }`}
                              >
                                {booking.status === 'active'
                                  ? 'Đang thuê'
                                  : booking.status === 'pending'
                                  ? 'Chờ xác nhận'
                                  : booking.status === 'completed'
                                  ? 'Hoàn thành'
                                  : 'Đã hủy'}
                              </span>
                            </td>
                            <td className='px-3 md:px-4 py-3 text-xs md:text-sm hidden sm:table-cell'>
                              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                                booking.amount,
                              )}
                            </td>
                            <td className='px-3 md:px-4 py-3 text-xs md:text-sm text-right'>
                              <Button variant='ghost' size='sm'>
                                Chi tiết
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              {/* Similar changes for other TabsContent components */}
              {/* ... */}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
