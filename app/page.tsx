import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '@/components/layout/common-layout';

export default function Home() {
  return (
    <MainLayout>
      <main className='min-h-screen'>
        <section
          className='bg-cover bg-center h-[500px]'
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
          }}
        >
          <div className='container mx-auto h-full flex items-center justify-center'>
            <div className='text-center bg-orange-900/75 p-10 rounded-xl'>
              <h1 className='text-5xl font-bold text-white mb-4'>Khám phá hành trình với AuRent</h1>
              <p className='text-xl text-white mb-6'>Thuê xe dễ dàng, giá cả phải chăng, trải nghiệm tuyệt vời!</p>
              <Link
                href='/find-car'
                className='bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold inline-block'
              >
                Tìm xe ngay
              </Link>
            </div>
          </div>
        </section>

        <section className='container mx-auto py-10'>
          <div className='bg-white p-8 rounded-xl shadow-lg max-w-5xl mx-auto'>
            <h2 className='text-2xl font-bold text-gray-800 text-center mb-6'>Tìm xe phù hợp với bạn</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
              <input
                type='text'
                placeholder='Địa điểm nhận xe'
                className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
              />
              <input
                type='date'
                className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
              />
              <input
                type='date'
                className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
              />
              <button className='bg-orange-500 text-white p-3 rounded-lg font-semibold'>Tìm kiếm</button>
            </div>
          </div>
        </section>

        <section className='container mx-auto py-12'>
          <h2 className='text-3xl font-bold text-gray-800 text-center mb-10'>Xe nổi bật</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
              <Image
                src='https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                alt='Toyota Camry'
                className='w-full h-48 object-cover'
                width={600}
                height={480}
              />
              <div className='p-5'>
                <h3 className='text-xl font-semibold text-gray-800'>Toyota Camry</h3>
                <p className='text-gray-600'>Giá: 500.000 VNĐ/ngày</p>
                <Link
                  href='/car/123'
                  className='mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold'
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>
            <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
              <Image
                src='https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                alt='Honda CR-V'
                className='w-full h-48 object-cover'
                width={600}
                height={480}
              />
              <div className='p-5'>
                <h3 className='text-xl font-semibold text-gray-800'>Honda CR-V</h3>
                <p className='text-gray-600'>Giá: 700.000 VNĐ/ngày</p>
                <Link
                  href='/car/123'
                  className='mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold'
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>
            <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
              <Image
                src='https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                alt='Hyundai Tucson'
                className='w-full h-48 object-cover'
                width={600}
                height={480}
              />
              <div className='p-5'>
                <h3 className='text-xl font-semibold text-gray-800'>Hyundai Tucson</h3>
                <p className='text-gray-600'>Giá: 600.000 VNĐ/ngày</p>
                <Link
                  href='/car/123'
                  className='mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold'
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>
            <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
              <Image
                src='https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
                alt='Mazda CX-5'
                className='w-full h-48 object-cover'
                width={600}
                height={480}
              />
              <div className='p-5'>
                <h3 className='text-xl font-semibold text-gray-800'>Mazda CX-5</h3>
                <p className='text-gray-600'>Giá: 650.000 VNĐ/ngày</p>
                <Link
                  href='/car/123'
                  className='mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold'
                >
                  Xem chi tiết
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  );
}
