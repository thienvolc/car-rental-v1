import { mockCars } from "@/features/cars/mock";
import Image from "next/image";

export default function TrackTripPage() {
  const cars = mockCars;

  return (
    // <!-- Phần chính: Trạng thái đơn / Giao nhận xe -->
    <section className='container mx-auto py-12'>
      <div className='bg-white rounded-xl shadow-lg p-8'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Trạng thái đơn thuê xe</h2>
        {/* <!-- Bộ lọc --> */}
        <div className='flex flex-col sm:flex-row gap-4 mb-6'>
          <input
            type='text'
            placeholder='Tìm kiếm theo mã đơn hoặc xe'
            className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
          />
          <select className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>
            <option>Tất cả trạng thái</option>
            <option>Đang chờ xác nhận</option>
            <option>Đã xác nhận</option>
            <option>Đang giao xe</option>
            <option>Đang thuê</option>
            <option>Đã hoàn thành</option>
            <option>Đã hủy</option>
          </select>
          <button className='bg-orange-500 text-white p-3 rounded-lg font-semibold'>Lọc</button>
        </div>
        {/* <!-- Danh sách đơn thuê --> */}
        <div className='space-y-6'>
          {/* <!-- Đơn 1 --> */}
          <div className='border border-gray-200 rounded-lg p-6'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
              <div>
                <Image
                  src={cars[0].images[0]}
                  alt='Toyota Camry'
                  className='w-full h-32 object-cover rounded-lg'
                  width={200}
                  height={80}
                />
              </div>
              <div className='md:col-span-2'>
                <p className='text-gray-800 font-semibold'>{cars[0].name}</p>
                <p className='text-gray-600'>Mã đơn: #12345</p>
                <p className='text-gray-600'>Chủ xe: Nguyễn Văn A</p>
                <p className='text-gray-600'>Ngày thuê: 15/06/2025 - 17/06/2025</p>
                <p className='text-gray-600'>Địa điểm giao xe: Hà Nội</p>
              </div>
              <div>
                <p className='text-gray-600'>
                  Trạng thái: <span className='text-yellow-500 font-semibold'>Đang chờ xác nhận</span>
                </p>
                <p className='text-gray-600'>Tổng chi phí: 1.500.000 VNĐ</p>
              </div>
              <div className='flex items-center justify-end'>
                <button className='bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold'>Xem chi tiết</button>
              </div>
            </div>
            {/* <!-- Thanh tiến trình --> */}
            <div className='mt-4'>
              <div className='flex items-center justify-between'>
                <div className='text-center'>
                  <div className='w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white'>
                    ✓
                  </div>
                  <p className='text-gray-600 text-sm mt-2'>Đặt xe</p>
                </div>
                <div className='flex-1 h-1 bg-gray-300'></div>
                <div className='text-center'>
                  <div className='w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-800'>
                    2
                  </div>
                  <p className='text-gray-600 text-sm mt-2'>Xác nhận</p>
                </div>
                <div className='flex-1 h-1 bg-gray-300'></div>
                <div className='text-center'>
                  <div className='w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-800'>
                    3
                  </div>
                  <p className='text-gray-600 text-sm mt-2'>Giao xe</p>
                </div>
                <div className='flex-1 h-1 bg-gray-300'></div>
                <div className='text-center'>
                  <div className='w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-800'>
                    4
                  </div>
                  <p className='text-gray-600 text-sm mt-2'>Hoàn thành</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Đơn 2 --> */}
          <div className='border border-gray-200 rounded-lg p-6'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
              <div>
                <Image
                  src={cars[1].images[0]}
                  alt='Hyundai Tucson'
                  className='w-full h-32 object-cover rounded-lg'
                  width={200}
                  height={80}
                />
              </div>
              <div className='md:col-span-2'>
                <p className='text-gray-800 font-semibold'>{cars[1].name}</p>
                <p className='text-gray-600'>Mã đơn: #12346</p>
                <p className='text-gray-600'>Chủ xe: Lê Văn C</p>
                <p className='text-gray-600'>Ngày thuê: 10/06/2025 - 12/06/2025</p>
                <p className='text-gray-600'>Địa điểm giao xe: Đà Nẵng</p>
              </div>
              <div>
                <p className='text-gray-600'>
                  Trạng thái: <span className='text-blue-500 font-semibold'>Đang thuê</span>
                </p>
                <p className='text-gray-600'>Tổng chi phí: 1.800.000 VNĐ</p>
              </div>
              <div className='flex items-center justify-end'>
                <button className='bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold'>Xem chi tiết</button>
              </div>
            </div>
            {/* <!-- Thanh tiến trình --> */}
            <div className='mt-4'>
              <div className='flex items-center justify-between'>
                <div className='text-center'>
                  <div className='w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white'>
                    ✓
                  </div>
                  <p className='text-gray-600 text-sm mt-2'>Đặt xe</p>
                </div>
                <div className='flex-1 h-1 bg-orange-500'></div>
                <div className='text-center'>
                  <div className='w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white'>
                    ✓
                  </div>
                  <p className='text-gray-600 text-sm mt-2'>Xác nhận</p>
                </div>
                <div className='flex-1 h-1 bg-orange-500'></div>
                <div className='text-center'>
                  <div className='w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white'>
                    ✓
                  </div>
                  <p className='text-gray-600 text-sm mt-2'>Giao xe</p>
                </div>
                <div className='flex-1 h-1 bg-gray-300'></div>
                <div className='text-center'>
                  <div className='w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-800'>
                    4
                  </div>
                  <p className='text-gray-600 text-sm mt-2'>Hoàn thành</p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Đơn 3 --> */}
          <div className='border border-gray-200 rounded-lg p-6'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
              <div>
                <Image
                  src={cars[2].images[0]}
                  alt='Mazda CX-5'
                  className='w-full h-32 object-cover rounded-lg'
                  width={200}
                  height={80}
                />
              </div>
              <div className='md:col-span-2'>
                <p className='text-gray-800 font-semibold'>{cars[2].name}</p>
                <p className='text-gray-600'>Mã đơn: #12347</p>
                <p className='text-gray-600'>Chủ xe: Phạm Thị D</p>
                <p className='text-gray-600'>Ngày thuê: 05/06/2025 - 07/06/2025</p>
                <p className='text-gray-600'>Địa điểm giao xe: TP.HCM</p>
              </div>
              <div>
                <p className='text-gray-600'>
                  Trạng thái: <span className='text-green-500 font-semibold'>Đã hoàn thành</span>
                </p>
                <p className='text-gray-600'>Tổng chi phí: 2.000.000 VNĐ</p>
              </div>
              <div className='flex items-center justify-end'>
                <button className='bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold'>Xem chi tiết</button>
              </div>
            </div>
            {/* <!-- Thanh tiến trình --> */}
            <div className='mt-4'>
              <div className='flex items-center justify-between'>
                <div className='text-center'>
                  <div className='w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white'>
                    ✓
                  </div>
                  <p className='text-gray-600 text-sm mt-2'>Đặt xe</p>
                </div>
                <div className='flex-1 h-1 bg-orange-500'></div>
                <div className='text-center'>
                  <div className='w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white'>
                    ✓
                  </div>
                  <p className='text-gray-600 text-sm mt-2'>Xác nhận</p>
                </div>
                <div className='flex-1 h-1 bg-orange-500'></div>
                <div className='text-center'>
                  <div className='w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white'>
                    ✓
                  </div>
                  <p className='text-gray-600 text-sm mt-2'>Giao xe</p>
                </div>
                <div className='flex-1 h-1 bg-orange-500'></div>
                <div className='text-center'>
                  <div className='w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white'>
                    ✓
                  </div>
                  <p className='text-gray-600 text-sm mt-2'>Hoàn thành</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Thống kê nhanh --> */}
        <div className='mt-6 bg-gray-50 rounded-lg p-6'>
          <h3 className='text-xl font-bold text-gray-800 mb-4'>Thống kê đơn thuê</h3>
          <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
            <div className='text-center'>
              <p className='text-2xl font-bold text-orange-500'>10</p>
              <p className='text-gray-600'>Tổng đơn thuê</p>
            </div>
            <div className='text-center'>
              <p className='text-2xl font-bold text-orange-500'>2</p>
              <p className='text-gray-600'>Đang chờ xác nhận</p>
            </div>
            <div className='text-center'>
              <p className='text-2xl font-bold text-orange-500'>3</p>
              <p className='text-gray-600'>Đang thuê</p>
            </div>
            <div className='text-center'>
              <p className='text-2xl font-bold text-orange-500'>5</p>
              <p className='text-gray-600'>Đã hoàn thành</p>
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
