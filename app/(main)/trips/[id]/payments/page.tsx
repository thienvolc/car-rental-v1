import { mockCars } from '@/features/cars/mock';
import Image from 'next/image';
import Link from 'next/link';

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function PaymentPage({ params }: PageProps) {
  const { id: carId } = await params;
  const car = mockCars.find((car) => car.id.toString() === carId)!;

  return (
    //  <!-- Phần chính: Thanh toán -->
    <section className='container mx-auto py-12'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* <!-- Thông tin đơn hàng --> */}
        <div className='lg:col-span-2 bg-white rounded-xl shadow-lg p-8'>
          <h2 className='text-2xl font-bold text-gray-800 mb-6'>Thông tin đơn hàng</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* <!-- Thông tin xe --> */}
            <div>
              <Image
                src={car.images[0]}
                alt={car.name}
                className='w-full h-48 object-cover rounded-lg mb-4'
                width={200}
                height={80}
              />
              <p className='text-gray-800 font-semibold'>{car.name}</p>
              <p className='text-gray-600'>Chủ xe: Nguyễn Văn A</p>
              <p className='text-gray-600'>Địa điểm: {car.location}</p>
              <p className='text-gray-600'>Ngày thuê: 15/06/2025 - 17/06/2025</p>
            </div>
            {/* <!-- Chi tiết thanh toán --> */}
            <div className='space-y-4'>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Giá thuê (3 ngày):</span>
                <span className='text-gray-800 font-semibold'>1.500.000 VNĐ</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Phí dịch vụ:</span>
                <span className='text-gray-800 font-semibold'>50.000 VNĐ</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Dịch vụ bổ sung (Ghế trẻ em):</span>
                <span className='text-gray-800 font-semibold'>100.000 VNĐ</span>
              </div>
              <div className='flex justify-between'>
                <span className='text-gray-600'>Phí bảo hiểm:</span>
                <span className='text-gray-800 font-semibold'>200.000 VNĐ</span>
              </div>
              <div className='border-t border-gray-300 pt-4 flex justify-between'>
                <span className='text-gray-800 font-semibold'>Tổng cộng:</span>
                <span className='text-orange-500 font-bold text-lg'>1.850.000 VNĐ</span>
              </div>
            </div>
          </div>
          {/* <!-- Ghi chú --> */}
          <div className='mt-6'>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>Ghi chú</h3>
            <p className='text-gray-600'>Giao xe tại sân bay Nội Bài, vui lòng chuẩn bị giấy phép lái xe.</p>
          </div>
        </div>
        {/* <!-- Phương thức thanh toán --> */}
        <div className='bg-white rounded-xl shadow-lg p-8'>
          <h2 className='text-xl font-bold text-gray-800 mb-4'>Phương thức thanh toán</h2>
          <div className='space-y-4'>
            <div className='border border-gray-200 rounded-lg p-4'>
              <label className='flex items-center'>
                <input type='radio' name='payment-method' className='mr-2' defaultChecked />
                <span className='text-gray-600'>Thẻ tín dụng / Thẻ ghi nợ</span>
              </label>
              <div className='mt-4 space-y-4'>
                <input
                  type='text'
                  placeholder='Số thẻ'
                  className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
                <div className='flex gap-4'>
                  <input
                    type='text'
                    placeholder='MM/YY'
                    className='w-1/2 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                  />
                  <input
                    type='text'
                    placeholder='CVV'
                    className='w-1/2 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                  />
                </div>
                <input
                  type='text'
                  placeholder='Tên trên thẻ'
                  className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
              </div>
            </div>
            <div className='border border-gray-200 rounded-lg p-4'>
              <label className='flex items-center'>
                <input type='radio' name='payment-method' className='mr-2' />
                <span className='text-gray-600'>Chuyển khoản ngân hàng</span>
              </label>
              <div className='mt-4 hidden'>
                <p className='text-gray-600'>Ngân hàng: Vietcombank</p>
                <p className='text-gray-600'>Số tài khoản: 1234 5678 9012 3456</p>
                <p className='text-gray-600'>Chủ tài khoản: AuRent Co., Ltd.</p>
                <p className='text-gray-600'>Nội dung: Thanh toán đơn #12345</p>
              </div>
            </div>
            <div className='border border-gray-200 rounded-lg p-4'>
              <label className='flex items-center'>
                <input type='radio' name='payment-method' className='mr-2' />
                <span className='text-gray-600'>Thanh toán qua ví điện tử (Momo)</span>
              </label>
              <div className='mt-4 hidden'>
                <p className='text-gray-600'>Số điện thoại: 0123 456 789</p>
                <p className='text-gray-600'>Nội dung: Thanh toán đơn #12345</p>
              </div>
            </div>
            <button className='w-full bg-orange-500 text-white p-3 rounded-lg font-semibold'>
              <Link href='https://sandbox.vnpayment.vn/tryitnow/Home/CreateOrder'>Xác nhận thanh toán</Link>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- Chính sách thanh toán --> */}
      <div className='bg-white rounded-xl shadow-lg p-6 mt-6'>
        <h3 className='text-xl font-bold text-gray-800 mb-4'>Chính sách thanh toán</h3>
        <ul className='list-disc list-inside text-gray-600 space-y-2'>
          <li>Thanh toán toàn bộ chi phí trước khi nhận xe.</li>
          <li>Hoàn tiền 100% nếu hủy đơn trước 24 giờ.</li>
          <li>Đặt cọc 2.000.000 VNĐ sẽ được hoàn lại sau khi trả xe.</li>
          <li>Mọi giao dịch được bảo mật và mã hóa.</li>
        </ul>
      </div>
    </section>
  );
}
