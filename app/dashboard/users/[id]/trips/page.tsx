import Image from "next/image";

export default function UserTripsPage() {
  return (
    // <!-- Phần chính: Quản lý xe của tôi -->
    <section className='container mx-auto py-12'>
      <div className='bg-white rounded-xl shadow-lg p-8'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-bold text-gray-800'>Quản lý xe của tôi</h2>
          <button className='bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold'>Đăng xe mới</button>
        </div>
        {/* <!-- Bộ lọc --> */}
        <div className='flex flex-col sm:flex-row gap-4 mb-6'>
          <input
            type='text'
            placeholder='Tìm kiếm theo tên xe'
            className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
          />
          <select className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>
            <option>Tất cả trạng thái</option>
            <option>Đang cho thuê</option>
            <option>Ẩn</option>
            <option>Không khả dụng</option>
          </select>
          <button className='bg-orange-500 text-white p-3 rounded-lg font-semibold'>Lọc</button>
        </div>
        {/* <!-- Danh sách xe --> */}
        <div className='space-y-6'>
          {/* <!-- Xe 1 --> */}
          <div className='border border-gray-200 rounded-lg p-6'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
              <div>
                <Image
                  src='https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
                  alt='Toyota Camry'
                  className='w-full h-32 object-cover rounded-lg'
                  width={200}
                  height={80}
                />
              </div>
              <div className='md:col-span-2'>
                <p className='text-gray-800 font-semibold'>Toyota Camry</p>
                <p className='text-gray-600'>Giá: 500.000 VNĐ/ngày</p>
                <p className='text-gray-600'>Địa điểm: Hà Nội</p>
                <p className='text-gray-600'>Loại xe: Sedan</p>
              </div>
              <div>
                <p className='text-gray-600'>
                  Trạng thái: <span className='text-green-500 font-semibold'>Đang cho thuê</span>
                </p>
                <p className='text-gray-600'>Lượt thuê: 12</p>
                <p className='text-gray-600'>Đánh giá: ★★★★☆ (4.5/5)</p>
              </div>
              <div className='flex items-center justify-end space-x-2'>
                <button className='bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold'>Chỉnh sửa</button>
                <button className='bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-semibold'>Ẩn</button>
              </div>
            </div>
          </div>
          {/* <!-- Xe 2 --> */}
          <div className='border border-gray-200 rounded-lg p-6'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
              <div>
                <Image
                  src='https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
                  alt='Hyundai Tucson'
                  className='w-full h-32 object-cover rounded-lg'
                  width={200}
                  height={80}
                />
              </div>
              <div className='md:col-span-2'>
                <p className='text-gray-800 font-semibold'>Hyundai Tucson</p>
                <p className='text-gray-600'>Giá: 600.000 VNĐ/ngày</p>
                <p className='text-gray-600'>Địa điểm: Đà Nẵng</p>
                <p className='text-gray-600'>Loại xe: SUV</p>
              </div>
              <div>
                <p className='text-gray-600'>
                  Trạng thái: <span className='text-gray-500 font-semibold'>Ẩn</span>
                </p>
                <p className='text-gray-600'>Lượt thuê: 8</p>
                <p className='text-gray-600'>Đánh giá: ★★★★☆ (4.2/5)</p>
              </div>
              <div className='flex items-center justify-end space-x-2'>
                <button className='bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold'>Chỉnh sửa</button>
                <button className='bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-semibold'>Hiện</button>
              </div>
            </div>
          </div>
          {/* <!-- Xe 3 --> */}
          <div className='border border-gray-200 rounded-lg p-6'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
              <div>
                <Image
                  src='https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
                  alt='Mazda CX-5'
                  className='w-full h-32 object-cover rounded-lg'
                  width={200}
                  height={80}
                />
              </div>
              <div className='md:col-span-2'>
                <p className='text-gray-800 font-semibold'>Mazda CX-5</p>
                <p className='text-gray-600'>Giá: 650.000 VNĐ/ngày</p>
                <p className='text-gray-600'>Địa điểm: TP.HCM</p>
                <p className='text-gray-600'>Loại xe: SUV</p>
              </div>
              <div>
                <p className='text-gray-600'>
                  Trạng thái: <span className='text-red-500 font-semibold'>Không khả dụng</span>
                </p>
                <p className='text-gray-600'>Lượt thuê: 5</p>
                <p className='text-gray-600'>Đánh giá: ★★★★☆ (4.8/5)</p>
              </div>
              <div className='flex items-center justify-end space-x-2'>
                <button className='bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold'>Chỉnh sửa</button>
                <button className='bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-semibold'>Xóa</button>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Thống kê nhanh --> */}
        <div className='mt-6 bg-gray-50 rounded-lg p-6'>
          <h3 className='text-xl font-bold text-gray-800 mb-4'>Thống kê xe</h3>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
            <div className='text-center'>
              <p className='text-2xl font-bold text-orange-500'>3</p>
              <p className='text-gray-600'>Tổng số xe</p>
            </div>
            <div className='text-center'>
              <p className='text-2xl font-bold text-orange-500'>25</p>
              <p className='text-gray-600'>Tổng lượt thuê</p>
            </div>
            <div className='text-center'>
              <p className='text-2xl font-bold text-orange-500'>4.5</p>
              <p className='text-gray-600'>Đánh giá trung bình</p>
            </div>
          </div>
        </div>
        {/* <!-- Phân trang --> */}
        <div className='flex justify-center mt-6'>
          <div className='flex space-x-2'>
            <button className='bg-gray-300 text-gray-800 px-4 py-2 rounded-lg'>Trước</button>
            <button className='bg-orange-500 text-white px-4 py-2 rounded-lg'>1</button>
            <button className='bg-gray-300 text-gray-800 px-4 py-2 rounded-lg'>2</button>
            <button className='bg-gray-300 text-gray-800 px-4 py-2 rounded-lg'>Sau</button>
          </div>
        </div>
      </div>
    </section>
  );
}
