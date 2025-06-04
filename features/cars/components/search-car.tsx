import { MapPinIcon, CalendarDaysIcon, SearchIcon } from 'lucide-react';

export default function SearchCar() {
  return (
    <section className='container mx-auto py-8 md:py-12 px-4 sm:px-6'>
      <div className='bg-white p-5 md:p-8 rounded-xl shadow-lg max-w-5xl mx-auto border border-gray-100'>
        <h2 className='text-4xl md:text-4xl font-bold text-gray-800 text-center mb-6'>Tìm xe phù hợp với bạn</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5'>
          {/* Địa điểm input */}
          <div className='relative'>
            <label htmlFor='location' className='block text-sm font-medium text-gray-700 mb-1.5'>Địa điểm</label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <MapPinIcon className='h-5 w-5 text-gray-400' />
              </div>
              <input
                id='location'
                type='text'
                placeholder='Địa điểm nhận xe'
                className='border border-gray-300 p-2.5 pl-10 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all'
              />
            </div>
          </div>
          
          {/* Ngày nhận input */}
          <div className='relative'>
            <label htmlFor='startDate' className='block text-sm font-medium text-gray-700 mb-1.5'>Ngày nhận</label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <CalendarDaysIcon className='h-5 w-5 text-gray-400' />
              </div>
              <input
                id='startDate'
                type='date'
                className='border border-gray-300 p-2.5 pl-10 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all'
              />
            </div>
          </div>
          
          {/* Ngày trả input */}
          <div className='relative'>
            <label htmlFor='endDate' className='block text-sm font-medium text-gray-700 mb-1.5'>Ngày trả</label>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <CalendarDaysIcon className='h-5 w-5 text-gray-400' />
              </div>
              <input
                id='endDate'
                type='date'
                className='border border-gray-300 p-2.5 pl-10 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all'
              />
            </div>
          </div>
          
          {/* Button */}
          <div className='relative'>
            <label className='block text-sm font-medium text-transparent mb-1.5'>.</label>
            <button className='bg-orange-500 hover:bg-orange-600 text-white p-2.5 w-full rounded-lg font-medium flex items-center justify-center transition-colors'>
              <SearchIcon className='h-5 w-5 mr-2' />
              <span>Tìm kiếm</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}