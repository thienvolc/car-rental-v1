import Image from "next/image";
import Link from "next/link";

export default function TripHistoryPage() {
  return (
    // <!-- Phần chính: Lịch sử thuê xe -->
    <section className='container mx-auto py-12'>
      <div className='bg-white rounded-xl shadow-lg p-8'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Lịch sử thuê xe</h2>
        {/* <!-- Bộ lọc --> */}
        <div className='flex flex-col sm:flex-row gap-4 mb-6'>
          <select className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>
            <option>Tất cả trạng thái</option>
            <option>Đã hoàn thành</option>
            <option>Đang chờ xác nhận</option>
            <option>Đang thuê</option>
            <option>Đã hủy</option>
          </select>
          <input
            type='date'
            className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
            placeholder='Từ ngày'
          />
          <button className='bg-orange-500 text-white p-3 rounded-lg font-semibold'>Lọc</button>
        </div>
        {/* <!-- Danh sách đơn thuê --> */}
        <div className='space-y-6'>
          {/* <!-- Đơn 1 --> */}
          <div className='border border-gray-200 rounded-lg p-6'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
              <div>
                <Image
                  src='https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
                  alt='Toyota Camry'
                  className='w-full h-32 object-cover rounded-lg'
                  width={200}
                  height={80}
                />
              </div>
              <div>
                <p className='text-gray-800 font-semibold'>Toyota Camry</p>
                <p className='text-gray-600'>Chủ xe: Nguyễn Văn A</p>
                <p className='text-gray-600'>Địa điểm: Hà Nội</p>
              </div>
              <div>
                <p className='text-gray-600'>Ngày thuê: 15/05/2025 - 17/05/2025</p>
                <p className='text-gray-600'>Tổng chi phí: 1.500.000 VNĐ</p>
                <p className='text-green-500 font-semibold'>Đã hoàn thành</p>
              </div>
              <div className='flex items-center justify-end'>
                <button className='bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold'>
                  <Link href='reviews'>Viết đánh giá</Link>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Đơn 2 --> */}
          <div className='border border-gray-200 rounded-lg p-6'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
              <div>
                <Image
                  src='https://images.unsplash.com/photo-1580273916550-ebd7d5c9e8b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
                  alt='Honda CR-V'
                  className='w-full h-32 object-cover rounded-lg'
                />
              </div>
              <div>
                <p className='text-gray-800 font-semibold'>Honda CR-V</p>
                <p className='text-gray-600'>Chủ xe: Trần Thị B</p>
                <p className='text-gray-600'>Địa điểm: TP.HCM</p>
              </div>
              <div>
                <p className='text-gray-600'>Ngày thuê: 20/05/2025 - 22/05/2025</p>
                <p className='text-gray-600'>Tổng chi phí: 2.100.000 VNĐ</p>
                <p className='text-yellow-500 font-semibold'>Đang chờ xác nhận</p>
              </div>
              <div className='flex items-center justify-end'>
                <button className='bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-semibold'>Hủy đơn</button>
              </div>
            </div>
          </div>
          {/* <!-- Đơn 3 --> */}
          <div className='border border-gray-200 rounded-lg p-6'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
              <div>
                <Image
                  src='https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
                  alt='Hyundai Tucson'
                  className='w-full h-32 object-cover rounded-lg'
                />
              </div>
              <div>
                <p className='text-gray-800 font-semibold'>Hyundai Tucson</p>
                <p className='text-gray-600'>Chủ xe: Lê Văn C</p>
                <p className='text-gray-600'>Địa điểm: Đà Nẵng</p>
              </div>
              <div>
                <p className='text-gray-600'>Ngày thuê: 10/05/2025 - 12/05/2025</p>
                <p className='text-gray-600'>Tổng chi phí: 1.800.000 VNĐ</p>
                <p className='text-red-500 font-semibold'>Đã hủy</p>
              </div>
              <div className='flex items-center justify-end'>
                <button className='bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold'>
                  <Link href='/cars/123/bookings'>Đặt lại</Link>
                </button>
              </div>
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
