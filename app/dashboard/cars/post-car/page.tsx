export default function CarPostPage() {
  // <!-- Phần chính: Đăng tin xe -->
  return (
    <section className='container mx-auto py-12'>
      <div className='bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>Đăng tin xe cho thuê</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* <!-- Thông tin cơ bản --> */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>Thông tin cơ bản</h3>
            <div>
              <label className='block text-gray-700 mb-1'>Tên xe</label>
              <input
                type='text'
                placeholder='Ví dụ: Toyota Camry'
                className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
              />
            </div>
            <div>
              <label className='block text-gray-700 mb-1'>Loại xe</label>
              <select className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>
                <option>Sedan</option>
                <option>SUV</option>
                <option>MPV</option>
                <option>Hatchback</option>
                <option>Khác</option>
              </select>
            </div>
            <div>
              <label className='block text-gray-700 mb-1'>Năm sản xuất</label>
              <input
                type='number'
                placeholder='Ví dụ: 2020'
                className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
              />
            </div>
            <div>
              <label className='block text-gray-700 mb-1'>Địa điểm cho thuê</label>
              <input
                type='text'
                placeholder='Ví dụ: Hà Nội'
                className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
              />
            </div>
            <div>
              <label className='block text-gray-700 mb-1'>Giá thuê mỗi ngày (VNĐ)</label>
              <input
                type='number'
                placeholder='Ví dụ: 500000'
                className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
              />
            </div>
          </div>
          {/* <!-- Hình ảnh xe --> */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>Hình ảnh xe</h3>
            <div className='border border-dashed border-gray-300 rounded-lg p-4 text-center'>
              <p className='text-gray-600 mb-2'>Kéo thả hoặc nhấp để tải lên hình ảnh</p>
              <input
                type='file'
                multiple
                accept='image/*'
                className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
              />
              <p className='text-gray-500 text-sm mt-2'>Tối đa 5 ảnh, định dạng JPG, PNG, tối đa 5MB/ảnh</p>
            </div>
            <div className='grid grid-cols-3 gap-2'>
              <div className='bg-gray-200 h-24 rounded-lg'></div>
              <div className='bg-gray-200 h-24 rounded-lg'></div>
              <div className='bg-gray-200 h-24 rounded-lg'></div>
            </div>
          </div>
        </div>
        {/* <!-- Mô tả chi tiết --> */}
        <div className='mt-6'>
          <h3 className='text-lg font-semibold text-gray-800 mb-2'>Mô tả chi tiết</h3>
          <textarea
            placeholder='Mô tả về xe của bạn (nội thất, tính năng, tình trạng, v.v.)'
            className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
            rows={6}
          ></textarea>
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
        {/* <!-- Yêu cầu thuê xe --> */}
        <div className='mt-6'>
          <h3 className='text-lg font-semibold text-gray-800 mb-2'>Yêu cầu thuê xe</h3>
          <div className='space-y-2'>
            <div>
              <label className='block text-gray-700 mb-1'>Độ tuổi tối thiểu</label>
              <input
                type='number'
                placeholder='Ví dụ: 21'
                className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
              />
            </div>
            <label className='flex items-center'>
              <input type='checkbox' className='mr-2' />
              <span className='text-gray-600'>Yêu cầu giấy phép lái xe</span>
            </label>
            <label className='flex items-center'>
              <input type='checkbox' className='mr-2' />
              <span className='text-gray-600'>Yêu cầu đặt cọc</span>
            </label>
          </div>
        </div>
        {/* <!-- Nút hành động --> */}
        <div className='flex justify-end space-x-4 mt-8'>
          <button className='bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold'>Hủy</button>
          <button className='bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold'>Đăng tin</button>
        </div>
      </div>
    </section>
  );
}
