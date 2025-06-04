'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Car, mockCars } from '../mock';

export default function CarDetails({ carId }: { carId: string }) {
  const carList: Car[] = mockCars;
  const car = carList.find((car) => car.id.toString() === carId)!;
  const [mainImage, setMainImage] = useState(car.images[0]);
  const [showFullImage, setShowFullImage] = useState(false);

  return (
    <section className='container mx-auto md:py-8 px-4 md:px-0'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6'>
        {/* Hình ảnh xe */}
        <div className='lg:col-span-2 bg-white rounded-xl shadow-lg p-4 md:p-6'>
          <div className='relative cursor-pointer' onClick={() => setShowFullImage(true)}>
            <Image
              src={mainImage}
              alt={car.name}
              width={800}
              height={600}
              className='w-full h-64 md:h-96 object-cover rounded-lg hover:brightness-90 transition'
            />
            <div className='absolute top-2 right-2 bg-black/50 text-white p-1 px-2 rounded-lg text-xs'>
              Nhấn để phóng to
            </div>
          </div>

          <div className='grid grid-cols-4 gap-2 mt-4'>
            {car.images.map((image, index) => (
              <div
                key={index}
                className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
                  mainImage === image ? 'border-orange-500' : 'border-transparent'
                }`}
                onClick={() => setMainImage(image)}
              >
                <Image
                  src={image}
                  alt={`${car.name} - ảnh ${index + 1}`}
                  width={200}
                  height={150}
                  className='w-full h-16 md:h-20 object-cover'
                />
              </div>
            ))}
          </div>
        </div>

        {/* Thông tin xe */}
        <div className='bg-white rounded-xl shadow-lg p-4 md:p-6 flex flex-col'>
          <div className='flex-1'>
            <h1 className='text-2xl md:text-3xl font-bold text-gray-800 mb-2'>{car.name}</h1>
            <div className='bg-orange-50 text-orange-700 font-semibold inline-block px-3 py-1 rounded-full text-sm mb-4'>
              {car.year}
            </div>

            <div className='flex flex-col space-y-3 mb-6'>
              <div className='flex items-center'>
                <div className='w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 text-orange-500'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <span className='text-gray-700 font-medium'>{car.price.toLocaleString()} VNĐ/ngày</span>
              </div>
              <div className='flex items-center'>
                <div className='w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 text-orange-500'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                </div>
                <span className='text-gray-700'>{car.location}</span>
              </div>
              <div className='flex items-center'>
                <div className='w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 text-orange-500'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10'
                    />
                  </svg>
                </div>
                <span className='text-gray-700'>Số sàn</span>
              </div>
            </div>

            <div className='mb-6 p-4 border border-gray-100 rounded-lg bg-gray-50'>
              <h3 className='text-lg font-semibold text-gray-800 mb-2'>Thông tin chủ xe</h3>
              <div className='flex items-center'>
                <div className='w-12 h-12 bg-gray-300 rounded-full mr-3 overflow-hidden'>
                  <Image
                    src='https://randomuser.me/api/portraits/men/32.jpg'
                    alt='Chủ xe'
                    width={48}
                    height={48}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div>
                  <p className='text-gray-800 font-medium'>Nguyễn Văn A</p>
                  <p className='text-amber-500'>★★★★☆ (4.5/5)</p>
                </div>
              </div>
            </div>
          </div>

          <Link
            href={`/cars/${car.id}/bookings`}
            className='w-full bg-orange-500 hover:bg-orange-600 transition text-white p-4 rounded-lg font-semibold text-center block'
          >
            Đặt xe ngay
          </Link>
        </div>
      </div>

      {/* Mô tả chi tiết */}
      <div className='bg-white rounded-xl shadow-lg p-4 md:p-6 mt-4 md:mt-6'>
        <h3 className='text-xl font-bold text-gray-800 mb-4'>Mô tả chi tiết</h3>
        <p className='text-gray-600 leading-relaxed'>{car.description}</p>
      </div>

      {/* Đánh giá */}
      <div className='bg-white rounded-xl shadow-lg p-4 md:p-6 mt-4 md:mt-6'>
        <div className='flex items-center justify-between mb-6'>
          <h3 className='text-xl font-bold text-gray-800'>Đánh giá</h3>
          <span className='text-amber-500 font-semibold'>★★★★☆ 4.5/5</span>
        </div>

        <div className='space-y-6'>
          {[
            {
              name: 'Trần Thị B',
              rating: '★★★★☆',
              comment: 'Xe sạch sẽ, chủ xe thân thiện, giao xe đúng giờ.',
              date: '20/05/2025',
              avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
            },
            {
              name: 'Lê Văn C',
              rating: '★★★★★',
              comment: 'Trải nghiệm tuyệt vời, xe chạy êm, sẽ thuê lại!',
              date: '15/05/2025',
              avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
            },
          ].map((review, index) => (
            <div key={index} className='flex space-x-4 pb-4 border-b border-gray-100'>
              <div className='flex-shrink-0'>
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={40}
                  height={40}
                  className='w-10 h-10 rounded-full'
                />
              </div>
              <div className='flex-1'>
                <div className='flex justify-between items-center mb-1'>
                  <p className='text-gray-800 font-medium'>{review.name}</p>
                  <p className='text-gray-500 text-sm'>{review.date}</p>
                </div>
                <p className='text-amber-500 mb-2'>{review.rating}</p>
                <p className='text-gray-600'>{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {showFullImage && (
        <div
          className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'
          onClick={() => setShowFullImage(false)}
        >
          <div className='relative max-w-4xl w-full'>
            <button
              className='absolute top-4 right-4 text-white bg-black/50 rounded-full p-2'
              onClick={() => setShowFullImage(false)}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
            <Image src={mainImage} alt={car.name} width={1200} height={800} className='w-full h-auto object-contain' />
          </div>
        </div>
      )}
    </section>
  );
}
