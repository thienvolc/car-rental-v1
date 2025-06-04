import Image from 'next/image';
import Link from 'next/link';

export default function BookingPage() {
  return (
    // <!-- Phần chính: Đặt xe -->
    <section className='container mx-auto py-12'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* <!-- Thông tin đặt xe --> */}
        <div className='lg:col-span-2 bg-white rounded-xl shadow-lg p-8'>
          <h2 className='text-2xl font-bold text-gray-800 mb-6'>Đặt xe: Toyota Camry</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* <!-- Thông tin xe --> */}
            <div>
              <Image
                src='https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                alt='Toyota Camry'
                className='w-full h-48 object-cover rounded-lg mb-4'
                width={600}
                height={480}
              />
              <p className='text-gray-600'>
                <span className='font-semibold'>Loại xe:</span> Sedan
              </p>
              <p className='text-gray-600'>
                <span className='font-semibold'>Địa điểm:</span> Hà Nội
              </p>
              <p className='text-gray-600'>
                <span className='font-semibold'>Chủ xe:</span> Nguyễn Văn A
              </p>
            </div>
            {/* <!-- Form đặt xe --> */}
            <div className='space-y-4'>
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
                <label className='block text-gray-700 mb-1'>Giờ nhận xe</label>
                <input
                  type='time'
                  className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
              </div>
              <div>
                <label className='block text-gray-700 mb-1'>Địa điểm giao xe</label>
                <input
                  type='text'
                  placeholder='Nhập địa điểm giao xe'
                  className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
              </div>
              <div>
                <label className='block text-gray-700 mb-1'>Ghi chú cho chủ xe</label>
                <textarea
                  placeholder='Ghi chú (nếu có)'
                  className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                  rows={4}
                ></textarea>
              </div>
            </div>
          </div>
          {/* <!-- Dịch vụ bổ sung --> */}
          <div className='mt-6'>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>Dịch vụ bổ sung</h3>
            <div className='space-y-2'>
              <label className='flex items-center'>
                <input type='checkbox' className='mr-2' />
                <span className='text-gray-600'>Ghế trẻ em (100.000 VNĐ)</span>
              </label>
              <label className='flex items-center'>
                <input type='checkbox' className='mr-2' />
                <span className='text-gray-600'>GPS điều hướng (50.000 VNĐ)</span>
              </label>
              <label className='flex items-center'>
                <input type='checkbox' className='mr-2' />
                <span className='text-gray-600'>Bảo hiểm thuê xe (200.000 VNĐ)</span>
              </label>
            </div>
          </div>
        </div>

        {/* <!-- Tóm tắt đơn hàng --> */}
        <div className='bg-white rounded-xl shadow-lg p-6'>
          <h2 className='text-xl font-bold text-gray-800 mb-4'>Tóm tắt đơn hàng</h2>
          <div className='space-y-4'>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Giá thuê xe (1 ngày):</span>
              <span className='text-gray-800 font-semibold'>500.000 VNĐ</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Phí dịch vụ:</span>
              <span className='text-gray-800 font-semibold'>50.000 VNĐ</span>
            </div>
            <div className='flex justify-between'>
              <span className='text-gray-600'>Dịch vụ bổ sung:</span>
              <span className='text-gray-800 font-semibold'>0 VNĐ</span>
            </div>
            <div className='border-t border-gray-300 pt-4 flex justify-between'>
              <span className='text-gray-800 font-semibold'>Tổng cộng:</span>
              <span className='text-orange-500 font-bold text-lg'>550.000 VNĐ</span>
            </div>
            <Link
              className='flex items-center justify-center w-full bg-orange-500 text-white p-3 rounded-lg font-semibold mt-4'
              href={`/trips/${123}/payments/`}
            >
              <span>Xác nhận đặt xe</span>
            </Link>
          </div>
          {/* <!-- Thông tin liên hệ chủ xe --> */}
          <div className='mt-6'>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>Liên hệ chủ xe</h3>
            <p className='text-gray-600'>Tên: Nguyễn Văn A</p>
            <p className='text-gray-600'>Số điện thoại: 0123 456 789</p>
            <p className='text-gray-600'>Email: nguyen.van.a@aurent.com</p>
          </div>
        </div>
      </div>

      {/* <!-- Chính sách thuê xe --> */}
      <div className='bg-white rounded-xl shadow-lg p-6 mt-6'>
        <h3 className='text-xl font-bold text-gray-800 mb-4'>Chính sách thuê xe</h3>
        <ul className='list-disc list-inside text-gray-600 space-y-2'>
          <li>Độ tuổi tối thiểu: 21 tuổi, có giấy phép lái xe hợp lệ.</li>
          <li>Thời gian giao xe: Trong vòng 2 giờ sau khi xác nhận.</li>
          <li>Hủy đơn: Miễn phí nếu hủy trước 24 giờ.</li>
          <li>Phí phạt trễ: 50.000 VNĐ/giờ nếu trả xe muộn.</li>
          <li>Yêu cầu đặt cọc: 2.000.000 VNĐ (hoàn lại sau khi trả xe).</li>
        </ul>
      </div>
    </section>
  );
}
