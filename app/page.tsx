import Link from 'next/link';
import MainLayout from '@/components/layout/common-layout';
import CarRecommandList from '@/features/cars/components/car-recommand-list';
import SearchCar from '@/features/cars/components/search-car';

export default function Home() {
  return (
    <MainLayout>
      <main className='min-h-screen'>
        <section
          className='bg-cover bg-center h-[500px] rounded-xl mb-10'
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

        <SearchCar />

        <CarRecommandList />
      </main>
    </MainLayout>
  );
}
