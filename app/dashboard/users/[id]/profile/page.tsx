export default function UserProfilePage() {
  return (
    // <!-- Phần chính: Hồ sơ cá nhân -->
    <section className='pl-6 container mx-auto py-12'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* <!-- Thông tin cá nhân và vai trò --> */}
        <div className='bg-white rounded-xl shadow-lg p-8'>
          <div className='flex items-center mb-6'>
            <img
              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
              alt='Avatar'
              className='w-24 h-24 rounded-full object-cover mr-4'
            />
            <div>
              <h2 className='text-2xl font-bold text-gray-800'>Nguyễn Văn A</h2>
              <p className='text-gray-600'>Khách thuê & Chủ xe</p>
            </div>
          </div>
          <div className='space-y-4'>
            <div>
              <label className='block text-gray-700 mb-1'>Email</label>
              <input
                type='email'
                value='nguyen.van.a@aurent.com'
                className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                readOnly
              />
            </div>
            <div>
              <label className='block text-gray-700 mb-1'>Số điện thoại</label>
              <input
                type='text'
                value='0123 456 789'
                className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                readOnly
              />
            </div>
            <button className='w-full bg-orange-500 text-white p-3 rounded-lg font-semibold'>Cập nhật thông tin</button>
            <button className='w-full bg-gray-300 text-gray-800 p-3 rounded-lg font-semibold'>Đổi mật khẩu</button>
          </div>
        </div>

        {/* <!-- Tab nội dung chính --> */}
        <div className='lg:col-span-2 bg-white rounded-xl shadow-lg p-8'>
          <div className='flex border-b border-gray-300 mb-6'>
            <button className='w-1/3 py-3 text-lg font-semibold text-orange-500 border-b-4 border-orange-500'>
              Lịch sử thuê
            </button>
            <button className='w-1/3 py-3 text-lg font-semibold text-gray-600'>Quản lý xe</button>
            <button className='w-1/3 py-3 text-lg font-semibold text-gray-600'>Đánh giá</button>
          </div>

          {/* <!-- Lịch sử thuê xe --> */}
          <div id='rental-history'>
            <h3 className='text-xl font-bold text-gray-800 mb-4'>Lịch sử thuê xe</h3>
            <div className='space-y-4'>
              <div className='border border-gray-200 rounded-lg p-4'>
                <div className='flex justify-between'>
                  <div>
                    <p className='text-gray-800 font-semibold'>Toyota Camry</p>
                    <p className='text-gray-600'>Ngày thuê: 15/05/2025 - 17/05/2025</p>
                    <p className='text-gray-600'>Tổng chi phí: 1.500.000 VNĐ</p>
                  </div>
                  <span className='text-green-500 font-semibold'>Đã hoàn thành</span>
                </div>
              </div>
              <div className='border border-gray-200 rounded-lg p-4'>
                <div className='flex justify-between'>
                  <div>
                    <p className='text-gray-800 font-semibold'>Honda CR-V</p>
                    <p className='text-gray-600'>Ngày thuê: 20/05/2025 - 22/05/2025</p>
                    <p className='text-gray-600'>Tổng chi phí: 2.100.000 VNĐ</p>
                  </div>
                  <span className='text-yellow-500 font-semibold'>Đang chờ xác nhận</span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Quản lý xe (ẩn mặc định) --> */}
          <div id='car-management' className='hidden'>
            <h3 className='text-xl font-bold text-gray-800 mb-4'>Quản lý xe của bạn</h3>
            <div className='space-y-4'>
              <div className='flex items-center border border-gray-200 rounded-lg p-4'>
                <img
                  src='https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
                  alt='Hyundai Tucson'
                  className='w-24 h-24 object-cover rounded-lg mr-4'
                />
                <div>
                  <p className='text-gray-800 font-semibold'>Hyundai Tucson</p>
                  <p className='text-gray-600'>Giá: 600.000 VNĐ/ngày</p>
                  <p className='text-gray-600'>Trạng thái: Đang cho thuê</p>
                </div>
                <button className='ml-auto bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold'>
                  Chỉnh sửa
                </button>
              </div>
              <button className='w-full bg-orange-500 text-white p-3 rounded-lg font-semibold'>Đăng xe mới</button>
            </div>
          </div>

          {/* <!-- Đánh giá (ẩn mặc định) --> */}
          <div id='reviews' className='hidden'>
            <h3 className='text-xl font-bold text-gray-800 mb-4'>Đánh giá của bạn</h3>
            <div className='space-y-4'>
              <div className='border border-gray-200 rounded-lg p-4'>
                <p className='text-gray-800 font-semibold'>Toyota Camry</p>
                <p className='text-gray-600'>★★★★☆ - Xe sạch sẽ, chủ xe thân thiện.</p>
                <p className='text-gray-500 text-sm'>Ngày: 17/05/2025</p>
              </div>
              <div className='border border-gray-200 rounded-lg p-4'>
                <p className='text-gray-800 font-semibold'>Honda CR-V</p>
                <p className='text-gray-600'>★★★★★ - Trải nghiệm tuyệt vời!</p>
                <p className='text-gray-500 text-sm'>Ngày: 22/05/2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Thống kê nhanh --> */}
      <div className='bg-white rounded-xl shadow-lg p-8 mt-6'>
        <h3 className='text-xl font-bold text-gray-800 mb-4'>Thống kê nhanh</h3>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          <div className='text-center'>
            <p className='text-2xl font-bold text-orange-500'>5</p>
            <p className='text-gray-600'>Chuyến thuê xe</p>
          </div>
          <div className='text-center'>
            <p className='text-2xl font-bold text-orange-500'>2</p>
            <p className='text-gray-600'>Xe đang cho thuê</p>
          </div>
          <div className='text-center'>
            <p className='text-2xl font-bold text-orange-500'>4.8</p>
            <p className='text-gray-600'>Điểm đánh giá trung bình</p>
          </div>
        </div>
      </div>

      {/* <!-- Thông báo --> */}
      <div className='bg-white rounded-xl shadow-lg p-8 mt-6'>
        <h3 className='text-xl font-bold text-gray-800 mb-4'>Thông báo gần đây</h3>
        <div className='space-y-4'>
          <div className='flex items-center'>
            <span className='text-orange-500 mr-2'>•</span>
            <p className='text-gray-600'>Đơn thuê Honda CR-V đã được xác nhận. Giao xe vào 20/05/2025.</p>
          </div>
          <div className='flex items-center'>
            <span className='text-orange-500 mr-2'>•</span>
            <p className='text-gray-600'>Đánh giá mới từ Trần Thị B: ★★★★☆.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
