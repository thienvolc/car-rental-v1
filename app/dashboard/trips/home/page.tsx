import { mockCars } from "@/features/cars/mock";
import Image from "next/image";

export default function HomeTripPage() {
  const cars = mockCars;

  return (
    // <!-- Phần chính: Quản lý đơn thuê xe -->
    <section className='container mx-auto py-12'>
      <div className='bg-white rounded-xl shadow-lg p-8'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Quản lý đơn thuê xe</h2>
        {/* <!-- Bộ lọc --> */}
        <div className='flex flex-col sm:flex-row gap-4 mb-6'>
          <input
            type='text'
            placeholder='Tìm kiếm theo tên khách hoặc xe'
            className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
          />
          <select className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>
            <option>Tất cả trạng thái</option>
            <option>Đang chờ xác nhận</option>
            <option>Đã xác nhận</option>
            <option>Đang thuê</option>
            <option>Đã hoàn thành</option>
            <option>Đã hủy</option>
          </select>
          <input
            type='date'
            className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
          />
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
                <p className='text-gray-600'>Khách thuê: Trần Thị B</p>
                <p className='text-gray-600'>Ngày thuê: 15/06/2025 - 17/06/2025</p>
                <p className='text-gray-600'>Địa điểm giao xe: Hà Nội</p>
                <p className='text-gray-600'>Tổng chi phí: 1.500.000 VNĐ</p>
              </div>
              <div>
                <p className='text-gray-600'>
                  Trạng thái: <span className='text-yellow-500 font-semibold'>Đang chờ xác nhận</span>
                </p>
                <p className='text-gray-600'>Ghi chú: Giao xe tại sân bay Nội Bài</p>
              </div>
              <div className='flex items-center justify-end space-x-2'>
                <button className='bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold'>Xác nhận</button>
                <button className='bg-red-500 text-white px-4 py-2 rounded-lg font-semibold'>Từ chối</button>
              </div>
            </div>
            {/* <!-- Chi tiết bổ sung --> */}
            <div className='mt-4 border-t border-gray-200 pt-4'>
              <p className='text-gray-600'>
                <span className='font-semibold'>Dịch vụ bổ sung:</span> Ghế trẻ em (100.000 VNĐ)
              </p>
              <p className='text-gray-600'>
                <span className='font-semibold'>Liên hệ khách:</span> 0987 654 321 | tran.thi.b@aurent.com
              </p>
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
                <p className='text-gray-600'>Khách thuê: Lê Văn C</p>
                <p className='text-gray-600'>Ngày thuê: 10/06/2025 - 12/06/2025</p>
                <p className='text-gray-600'>Địa điểm giao xe: Đà Nẵng</p>
                <p className='text-gray-600'>Tổng chi phí: 1.800.000 VNĐ</p>
              </div>
              <div>
                <p className='text-gray-600'>
                  Trạng thái: <span className='text-green-500 font-semibold'>Đã xác nhận</span>
                </p>
                <p className='text-gray-600'>Ghi chú: Khách yêu cầu kiểm tra xe trước</p>
              </div>
              <div className='flex items-center justify-end space-x-2'>
                <button className='bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-semibold'>Xem chi tiết</button>
                <button className='bg-red-500 text-white px-4 py-2 rounded-lg font-semibold'>Hủy đơn</button>
              </div>
            </div>
            {/* <!-- Chi tiết bổ sung --> */}
            <div className='mt-4 border-t border-gray-200 pt-4'>
              <p className='text-gray-600'>
                <span className='font-semibold'>Dịch vụ bổ sung:</span> Không có
              </p>
              <p className='text-gray-600'>
                <span className='font-semibold'>Liên hệ khách:</span> 0912 345 678 | le.van.c@aurent.com
              </p>
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
                <p className='text-gray-600'>Khách thuê: Phạm Thị D</p>
                <p className='text-gray-600'>Ngày thuê: 05/06/2025 - 07/06/2025</p>
                <p className='text-gray-600'>Địa điểm giao xe: TP.HCM</p>
                <p className='text-gray-600'>Tổng chi phí: 2.000.000 VNĐ</p>
              </div>
              <div>
                <p className='text-gray-600'>
                  Trạng thái: <span className='text-blue-500 font-semibold'>Đang thuê</span>
                </p>
                <p className='text-gray-600'>Ghi chú: Giao xe tại trung tâm quận 1</p>
              </div>
              <div className='flex items-center justify-end space-x-2'>
                <button className='bg-gray-300 text-gray-800 px-4 py-2 rounded-lg font-semibold'>Xem chi tiết</button>
                <button className='bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold'>Hoàn thành</button>
              </div>
            </div>
            {/* <!-- Chi tiết bổ sung --> */}
            <div className='mt-4 border-t border-gray-200 pt-4'>
              <p className='text-gray-600'>
                <span className='font-semibold'>Dịch vụ bổ sung:</span> Bảo hiểm thuê xe (200.000 VNĐ)
              </p>
              <p className='text-gray-600'>
                <span className='font-semibold'>Liên hệ khách:</span> 0909 123 456 | pham.thi.d@aurent.com
              </p>
            </div>
          </div>
        </div>
        {/* <!-- Thống kê nhanh --> */}
        <div className='mt-6 bg-gray-50 rounded-lg p-6'>
          <h3 className='text-xl font-bold text-gray-800 mb-4'>Thống kê đơn thuê</h3>
          <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
            <div className='text-center'>
              <p className='text-2xl font-bold text-orange-500'>15</p>
              <p className='text-gray-600'>Tổng đơn thuê</p>
            </div>
            <div className='text-center'>
              <p className='text-2xl font-bold text-orange-500'>3</p>
              <p className='text-gray-600'>Đang chờ xác nhận</p>
            </div>
            <div className='text-center'>
              <p className='text-2xl font-bold text-orange-500'>5</p>
              <p className='text-gray-600'>Đang thuê</p>
            </div>
            <div className='text-center'>
              <p className='text-2xl font-bold text-orange-500'>7</p>
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
