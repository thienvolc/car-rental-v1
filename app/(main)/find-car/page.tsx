export default function FindCarPage() {
  return (
    <section className='container mx-auto py-12'>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
        {/* <!-- Bộ lọc --> */}
        <div className='bg-white p-6 rounded-xl shadow-lg'>
          <h2 className='text-xl font-bold text-gray-800 mb-4'>Bộ lọc tìm kiếm</h2>
          <div className='space-y-4'>
            <div>
              <label className='block text-gray-700 mb-1'>Địa điểm</label>
              <input
                type='text'
                placeholder='Nhập địa điểm'
                className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
              />
            </div>
            <div>
              <label className='block text-gray-700 mb-1'>Ngày nhận xe</label>
              <input
                type='date'
                className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
              />
            </div>
            <div>
              <label className='block text-gray-700 mb-1'>Ngày trả xe</label>
              <input
                type='date'
                className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
              />
            </div>
            <div>
              <label className='block text-gray-700 mb-1'>Loại xe</label>
              <select className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>
                <option>Tất cả</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>MPV</option>
              </select>
            </div>
            <div>
              <label className='block text-gray-700 mb-1'>Giá mỗi ngày</label>
              <select className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>
                <option>Tất cả</option>
                <option>Dưới 500.000 VNĐ</option>
                <option>500.000 - 1.000.000 VNĐ</option>
                <option>Trên 1.000.000 VNĐ</option>
              </select>
            </div>
            <button className='w-full bg-orange-500 text-white p-3 rounded-lg font-semibold'>Áp dụng bộ lọc</button>
          </div>
        </div>

        {/* <!-- Kết quả tìm kiếm --> */}
        <div className='lg:col-span-3'>
          <h2 className='text-2xl font-bold text-gray-800 mb-6'>Kết quả tìm kiếm</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* <!-- Xe 1 --> */}
            <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
              <img
                src='https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                alt='Toyota Camry'
                className='w-full h-48 object-cover'
              />
              <div className='p-5'>
                <h3 className='text-xl font-semibold text-gray-800'>Toyota Camry</h3>
                <p className='text-gray-600'>Giá: 500.000 VNĐ/ngày</p>
                <p className='text-gray-600'>Địa điểm: Hà Nội</p>
                <p className='text-gray-600'>Loại xe: Sedan</p>
                <a href='#' className='mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold'>
                  Xem chi tiết
                </a>
              </div>
            </div>
            {/* <!-- Xe 2 --> */}
            <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
              <img
                src='https://images.unsplash.com/photo-1580273916550-ebd7d5c9e8b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                alt='Honda CR-V'
                className='w-full h-48 object-cover'
              />
              <div className='p-5'>
                <h3 className='text-xl font-semibold text-gray-800'>Honda CR-V</h3>
                <p className='text-gray-600'>Giá: 700.000 VNĐ/ngày</p>
                <p className='text-gray-600'>Địa điểm: TP.HCM</p>
                <p className='text-gray-600'>Loại xe: SUV</p>
                <a href='#' className='mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold'>
                  Xem chi tiết
                </a>
              </div>
            </div>
            {/* <!-- Xe 3 --> */}
            <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
              <img
                src='https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                alt='Hyundai Tucson'
                className='w-full h-48 object-cover'
              />
              <div className='p-5'>
                <h3 className='text-xl font-semibold text-gray-800'>Hyundai Tucson</h3>
                <p className='text-gray-600'>Giá: 600.000 VNĐ/ngày</p>
                <p className='text-gray-600'>Địa điểm: Đà Nẵng</p>
                <p className='text-gray-600'>Loại xe: SUV</p>
                <a href='#' className='mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold'>
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
