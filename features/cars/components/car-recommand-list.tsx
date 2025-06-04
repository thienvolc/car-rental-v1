import Image from 'next/image';
import { Car, mockCars } from '../mock';
import Link from 'next/link';
import { CurrencyIcon, Calendar1Icon } from 'lucide-react';

export default function CarRecommandList() {
  const carList: Car[] = mockCars;

  return (
    <section className='container mx-auto py-6 md:py-10 px-4 sm:px-6 max-w-6xl'>
      <h2 className='text-4xl md:text-4xl font-bold text-gray-800 text-center mb-5 md:mb-8'>Xe nổi bật</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'>
        {carList.map((car) => (
          <div key={car.id} className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
            <div className='relative aspect-[4/3]'>
              <Image
                src={car.images[0]}
                alt={car.name}
                className='object-cover'
                fill
                sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
              />
            </div>
            <div className='p-3 md:p-4'>
              <h3 className='text-base md:text-lg font-semibold text-gray-800 line-clamp-1'>{car.name}</h3>
              <div className='flex items-center mt-1 text-gray-600'>
                <CurrencyIcon className='h-4 w-4 mr-1 flex-shrink-0' />
                <p className='text-xs md:text-sm'>Giá: {car.price.toLocaleString()} VNĐ/ngày</p>
              </div>
              <div className='flex items-center mt-1 text-gray-600'>
                <Calendar1Icon className='h-4 w-4 mr-1 flex-shrink-0' />
                <p className='text-xs md:text-sm'>Đặt ngay</p>
              </div>
              <Link
                href={`/cars/${car.id}`}
                className='mt-2 md:mt-3 inline-block bg-orange-500 hover:bg-orange-600 text-white px-2.5 py-1 md:px-3 md:py-1.5 rounded-md font-medium text-xs md:text-sm transition-colors'
              >
                Xem chi tiết
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
