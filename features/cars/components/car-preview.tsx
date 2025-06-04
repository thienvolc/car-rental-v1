'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Car, MapPin, Calendar, Users, Star, Shield, 
  Info, CheckCircle, Clock, AlertCircle, ChevronLeft, 
  ChevronRight, PiggyBank, Gauge, Fuel, Settings, Heart
} from 'lucide-react';

type CarPreviewProps = {
  car: {
    id: string | number;
    name: string;
    price: number;
    description?: string;
    features?: string[];
    location?: string;
    type?: string;
    rating?: string;
    status?: string;
    transmission?: string;
    fuelType?: string;
    seats?: number;
    year?: number;
    images: string[];
    owner?: {
      name: string;
      avatar?: string;
      joinDate?: string;
      responseRate?: number;
    };
  };
  onClose?: () => void;
  onEdit?: () => void;
  isFullscreen?: boolean;
};

export default function CarPreview({ 
  car, 
  onClose, 
  onEdit,
  isFullscreen = false 
}: CarPreviewProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  // Format tiền tệ
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + ' VNĐ';
  };

  // Di chuyển đến ảnh trước đó
  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? car.images.length - 1 : prev - 1
    );
  };

  // Di chuyển đến ảnh tiếp theo
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === car.images.length - 1 ? 0 : prev + 1
    );
  };

  // Danh sách tính năng mẫu nếu không có
  const defaultFeatures = [
    'Điều hòa không khí',
    'Bluetooth',
    'Cảm biến lùi',
    'Camera lùi',
    'Ghế da',
    'Cửa sổ trời',
    'Định vị GPS',
    'Cảm biến áp suất lốp'
  ];

  // Sử dụng tính năng mặc định nếu không có tính năng
  const features = car.features || defaultFeatures;
  const displayFeatures = showAllFeatures ? features : features.slice(0, 4);

  return (
    <div className={`bg-white rounded-xl shadow-lg ${isFullscreen ? 'fixed inset-0 z-50 overflow-y-auto' : ''}`}>
      {/* Header - chỉ hiển thị trong chế độ toàn màn hình */}
      {isFullscreen && (
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <button 
            onClick={onClose} 
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <ChevronLeft size={20} className="mr-1" />
            <span>Quay lại</span>
          </button>
          <h2 className="text-lg font-semibold text-gray-800">Xem trước</h2>
          <button 
            onClick={onEdit} 
            className="text-orange-500 hover:text-orange-600 font-medium"
          >
            Chỉnh sửa
          </button>
        </div>
      )}

      {/* Phần hình ảnh */}
      <div className="relative overflow-hidden">
        <div className="relative h-64 md:h-80 w-full">
          <Image
            src={car.images[currentImageIndex]}
            alt={car.name}
            fill
            className="object-cover"
            priority
          />
          
          {/* Nút điều hướng ảnh */}
          <button 
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Số lượng ảnh */}
          <div className="absolute bottom-2 right-2 bg-black/60 text-white py-1 px-2 rounded-md text-xs">
            {currentImageIndex + 1}/{car.images.length}
          </div>
          
          {/* Trạng thái xe */}
          {car.status && (
            <div className="absolute top-2 left-2">
              {car.status === 'active' && (
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Đang hoạt động
                </span>
              )}
              {car.status === 'hidden' && (
                <span className="bg-gray-500 text-white text-xs px-2 py-1 rounded-full">
                  Đã ẩn
                </span>
              )}
              {car.status === 'maintenance' && (
                <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">
                  Đang bảo trì
                </span>
              )}
            </div>
          )}
          
          {/* Yêu thích */}
          <button className="absolute top-2 right-2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white">
            <Heart size={20} className="text-gray-600" />
          </button>
        </div>
        
        {/* Hiển thị hình ảnh nhỏ */}
        {car.images.length > 1 && (
          <div className="flex space-x-2 p-2 overflow-x-auto">
            {car.images.map((image, index) => (
              <button 
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden border-2 ${
                  index === currentImageIndex ? 'border-orange-500' : 'border-transparent'
                }`}
              >
                <Image
                  src={image}
                  alt={`${car.name} - ảnh ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Thông tin cơ bản */}
      <div className="p-4 md:p-6">
        <div className="flex justify-between items-start mb-2">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">{car.name}</h1>
          <div className="text-xl font-bold text-orange-500">{formatCurrency(car.price)}<span className="text-sm font-normal text-gray-500">/ngày</span></div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="flex items-center text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
            <MapPin size={14} className="mr-1 text-gray-500" />
            {car.location || 'Hà Nội'}
          </span>
          <span className="flex items-center text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
            <Car size={14} className="mr-1 text-gray-500" />
            {car.type || 'Sedan'}
          </span>
          {car.rating && (
            <span className="flex items-center text-sm text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
              <Star size={14} className="mr-1" fill="currentColor" />
              {car.rating}/5
            </span>
          )}
        </div>
        
        {car.description && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Mô tả</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {car.description}
            </p>
          </div>
        )}
        
        {/* Thông số kỹ thuật */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Thông số kỹ thuật</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center">
              <Settings size={18} className="mr-2 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Hộp số</p>
                <p className="text-sm font-medium">{car.transmission || 'Tự động'}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Fuel size={18} className="mr-2 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Nhiên liệu</p>
                <p className="text-sm font-medium">{car.fuelType || 'Xăng'}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Users size={18} className="mr-2 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Số ghế</p>
                <p className="text-sm font-medium">{car.seats || 5} chỗ</p>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar size={18} className="mr-2 text-gray-500" />
              <div>
                <p className="text-xs text-gray-500">Năm sản xuất</p>
                <p className="text-sm font-medium">{car.year || 2020}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tính năng */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Tính năng</h2>
          <div className="grid grid-cols-2 gap-y-2 gap-x-4">
            {displayFeatures.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle size={16} className="mr-2 text-green-500" />
                <span className="text-sm text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
          
          {features.length > 4 && (
            <button 
              className="mt-2 text-orange-500 text-sm font-medium hover:text-orange-600"
              onClick={() => setShowAllFeatures(!showAllFeatures)}
            >
              {showAllFeatures ? 'Ẩn bớt' : 'Xem thêm'}
            </button>
          )}
        </div>
        
        {/* Chính sách cho thuê */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Chính sách cho thuê</h2>
          <div className="bg-gray-50 p-4 rounded-lg space-y-3">
            <div className="flex items-start">
              <Clock size={18} className="mr-2 text-gray-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-700">Thời gian phản hồi</p>
                <p className="text-sm text-gray-600">Thường phản hồi trong vòng 2 giờ</p>
              </div>
            </div>
            <div className="flex items-start">
              <AlertCircle size={18} className="mr-2 text-gray-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-700">Chính sách hủy</p>
                <p className="text-sm text-gray-600">Miễn phí hủy trước 24 giờ</p>
              </div>
            </div>
            <div className="flex items-start">
              <Shield size={18} className="mr-2 text-gray-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-700">Yêu cầu người thuê</p>
                <p className="text-sm text-gray-600">Phải có giấy phép lái xe và trên 21 tuổi</p>
              </div>
            </div>
            <div className="flex items-start">
              <PiggyBank size={18} className="mr-2 text-gray-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-700">Đặt cọc</p>
                <p className="text-sm text-gray-600">Yêu cầu đặt cọc 2 triệu đồng</p>
              </div>
            </div>
          </div>
        </div>

        {/* Thông tin chủ xe */}
        {car.owner && (
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Thông tin chủ xe</h2>
            <div className="flex items-center">
              <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
                <Image
                  src={car.owner.avatar || "https://ui-avatars.com/api/?name=" + encodeURIComponent(car.owner.name)}
                  alt={car.owner.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-gray-800">{car.owner.name}</p>
                <p className="text-sm text-gray-500">
                  {car.owner.joinDate ? `Tham gia từ ${car.owner.joinDate}` : 'Chủ xe'}
                </p>
              </div>
            </div>
          </div>
        )}
        
        {/* Nút đặt xe */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <button className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg flex justify-center items-center transition-colors">
            <Car size={18} className="mr-2" />
            Đặt xe ngay
          </button>
        </div>
      </div>
    </div>
  );
}