import { PageProps } from '@/.next/types/app/layout';
import Image from 'next/image';
import Link from 'next/link';


export default function CarPage() {
  return (
    // <!-- Phần chính: Chi tiết xe -->
    <section className='container mx-auto py-12'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* <!-- Hình ảnh xe --> */}
        <div className='lg:col-span-2 bg-white rounded-xl shadow-lg p-6'>
          <Image
            src='https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            alt='Toyota Camry'
            width={800}
            height={600}
            className='w-full h-96 object-cover rounded-lg'
          />
          <div className='grid grid-cols-3 gap-2 mt-4'>
            <Image
              src='https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
              alt='Toyota Camry 1'
              width={200}
              height={150}
              className='w-full h-24 object-cover rounded-lg'
            />
            <Image
              src='https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
              alt='Toyota Camry 2'
              width={200}
              height={150}
              className='w-full h-24 object-cover rounded-lg'
            />
            <Image
              src='https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
              alt='Toyota Camry 3'
              width={200}
              height={150}
              className='w-full h-24 object-cover rounded-lg'
            />
          </div>
        </div>

        {/* <!-- Thông tin xe --> */}
        <div className='bg-white rounded-xl shadow-lg p-6'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>Toyota Camry</h2>
          <p className='text-gray-600 mb-2'>Giá: 500.000 VNĐ/ngày</p>
          <p className='text-gray-600 mb-2'>Địa điểm: Hà Nội</p>
          <p className='text-gray-600 mb-2'>Loại xe: Sedan</p>
          <p className='text-gray-600 mb-4'>Năm sản xuất: 2020</p>
          <div className='mb-4'>
            <h3 className='text-lg font-semibold text-gray-800'>Thông tin chủ xe</h3>
            <p className='text-gray-600'>Tên: Nguyễn Văn A</p>
            <p className='text-gray-600'>Đánh giá: ★★★★☆ (4.5/5)</p>
          </div>
          <button className='w-full bg-orange-500 text-white p-3 rounded-lg font-semibold'>
            {' '}
            <Link href={`/cars/123/bookings`}>Đặt xe ngay</Link>
          </button>
        </div>
      </div>

      {/* <!-- Mô tả chi tiết --> */}
      <div className='bg-white rounded-xl shadow-lg p-6 mt-6'>
        <h3 className='text-xl font-bold text-gray-800 mb-4'>Mô tả chi tiết</h3>
        <p className='text-gray-600'>
          Toyota Camry 2020 là một chiếc sedan sang trọng, phù hợp cho các chuyến đi công tác hoặc du lịch gia đình. Xe
          được trang bị nội thất da cao cấp, hệ thống giải trí hiện đại, và động cơ tiết kiệm nhiên liệu. Chủ xe cam kết
          xe luôn sạch sẽ và bảo dưỡng định kỳ.
        </p>
      </div>

      {/* <!-- Đánh giá --> */}
      <div className='bg-white rounded-xl shadow-lg p-6 mt-6'>
        <h3 className='text-xl font-bold text-gray-800 mb-4'>Đánh giá</h3>
        <div className='space-y-4'>
          <div>
            <p className='text-gray-600 font-semibold'>Trần Thị B</p>
            <p className='text-gray-600'>★★★★☆ - Xe sạch sẽ, chủ xe thân thiện, giao xe đúng giờ.</p>
            <p className='text-gray-500 text-sm'>Ngày: 20/05/2025</p>
          </div>
          <div>
            <p className='text-gray-600 font-semibold'>Lê Văn C</p>
            <p className='text-gray-600'>★★★★★ - Trải nghiệm tuyệt vời, xe chạy êm, sẽ thuê lại!</p>
            <p className='text-gray-500 text-sm'>Ngày: 15/05/2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}
