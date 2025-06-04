'use client';

export default function ReviewPage() {
  function handleReviewSubmit(event: React.FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const rating = formData.get('rating') || '';
    const comment = formData.get('comment') || '';
    // Xử lý gửi đánh giá ở đây
    alert(`Đánh giá đã được gửi thành công!\n` + `Điểm: ${rating}, Nhận xét: ${comment}`);
  }

  return (
    <section className='container mx-auto py-12'>
      <div className='bg-white rounded-xl shadow-lg p-8'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Đánh giá của bạn</h2>
        {/* <!-- Form gửi đánh giá --> */}
        <form onSubmit={handleReviewSubmit} className='border border-gray-200 rounded-lg p-6 mb-6'>
          <h3 className='text-lg font-semibold text-gray-800 mb-4'>Gửi đánh giá mới</h3>
          <div className='space-y-4'>
            <div>
              <label className='block text-gray-700 mb-1'>Chọn xe đã thuê</label>
              <select className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>
                <option>Toyota Camry - 15/05/2025</option>
                <option>Honda CR-V - 20/05/2025</option>
                <option>Hyundai Tucson - 10/05/2025</option>
              </select>
            </div>
            <div>
              <label className='block text-gray-700 mb-1'>Điểm đánh giá</label>
              <div className='flex space-x-2'>
                <input type='radio' name='rating' value='5' className='mr-1' />
                <span>★★★★★</span>
                <input type='radio' name='rating' value='4' className='mr-1' />
                <span>★★★★☆</span>
                <input type='radio' name='rating' value='3' className='mr-1' />
                <span>★★★☆☆</span>
                <input type='radio' name='rating' value='2' className='mr-1' />
                <span>★★☆☆☆</span>
                <input type='radio' name='rating' value='1' className='mr-1' />
                <span>★☆☆☆☆</span>
              </div>
            </div>
            <div>
              <label className='block text-gray-700 mb-1'>Nhận xét</label>
              <textarea
                placeholder='Viết nhận xét của bạn...'
                className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                rows={4}
              ></textarea>
            </div>
            <button className='w-full bg-orange-500 text-white p-3 rounded-lg font-semibold'>Gửi đánh giá</button>
          </div>
        </form>
        {/* <!-- Danh sách đánh giá --> */}
        <h3 className='text-xl font-bold text-gray-800 mb-4'>Các đánh giá đã gửi</h3>
        <div className='space-y-6'>
          {/* <!-- Đánh giá 1 --> */}
          <div className='border border-gray-200 rounded-lg p-6'>
            <div className='flex items-center mb-2'>
              <img
                src='https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
                alt='Toyota Camry'
                className='w-16 h-16 object-cover rounded-lg mr-4'
              />
              <div>
                <p className='text-gray-800 font-semibold'>Toyota Camry</p>
                <p className='text-gray-600'>Ngày thuê: 15/05/2025 - 17/05/2025</p>
              </div>
            </div>
            <p className='text-gray-600'>★★★★☆ - Xe sạch sẽ, chủ xe thân thiện, giao xe đúng giờ.</p>
            <p className='text-gray-500 text-sm'>Ngày gửi: 18/05/2025</p>
            <button className='text-orange-500 text-sm mt-2'>Chỉnh sửa</button>
          </div>
          {/* <!-- Đánh giá 2 --> */}
          <div className='border border-gray-200 rounded-lg p-6'>
            <div className='flex items-center mb-2'>
              <img
                src='https://images.unsplash.com/photo-1580273916550-ebd7d5c9e8b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
                alt='Honda CR-V'
                className='w-16 h-16 object-cover rounded-lg mr-4'
              />
              <div>
                <p className='text-gray-800 font-semibold'>Honda CR-V</p>
                <p className='text-gray-600'>Ngày thuê: 20/05/2025 - 22/05/2025</p>
              </div>
            </div>
            <p className='text-gray-600'>★★★★★ - Trải nghiệm tuyệt vời, xe chạy êm, sẽ thuê lại!</p>
            <p className='text-gray-500 text-sm'>Ngày gửi: 23/05/2025</p>
            <button className='text-orange-500 text-sm mt-2'>Chỉnh sửa</button>
          </div>
          {/* <!-- Đánh giá 3 --> */}
          <div className='border border-gray-200 rounded-lg p-6'>
            <div className='flex items-center mb-2'>
              <img
                src='https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
                alt='Hyundai Tucson'
                className='w-16 h-16 object-cover rounded-lg mr-4'
              />
              <div>
                <p className='text-gray-800 font-semibold'>Hyundai Tucson</p>
                <p className='text-gray-600'>Ngày thuê: 10/05/2025 - 12/05/2025</p>
              </div>
            </div>
            <p className='text-gray-600'>★★★☆☆ - Xe ổn, nhưng cần bảo dưỡng thêm.</p>
            <p className='text-gray-500 text-sm'>Ngày gửi: 13/05/2025</p>
            <button className='text-orange-500 text-sm mt-2'>Chỉnh sửa</button>
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
