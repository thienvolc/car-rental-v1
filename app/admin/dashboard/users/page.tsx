import Image from 'next/image';
import Link from 'next/link';

export default function AdminUserDashboardPage() {
  return (
    <>
      {/* // <!-- Thanh điều hướng (Header) --> */}
      <nav className='bg-orange-500 text-white p-5 shadow-md sticky top-0 z-10'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='text-3xl font-extrabold'>AuRent Admin</div>
          <div className='flex items-center space-x-8'>
            <Link href='/admin/dashboard' className='text-lg'>
              Tổng quan
            </Link>
            <Link href='/admin/dashboard/users' className='text-lg font-semibold'>
              Người dùng
            </Link>
            <Link href='#' className='text-lg'>
              Xe
            </Link>
            <Link href='#' className='text-lg'>
              Đơn thuê
            </Link>
            <div className='flex items-center'>
              <Image
                src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=50&q=80'
                alt='Admin Avatar'
                className='w-10 h-10 rounded-full mr-2'
                width={50}
                height={50}
              />
              <span>Admin</span>
              <button className='ml-4 bg-gray-300 text-gray-800 px-3 py-1 rounded-lg'>Đăng xuất</button>
            </div>
          </div>
        </div>
      </nav>

      {/* <!-- Phần chính: Quản lý người dùng --> */}
      <section className='container mx-auto py-12'>
        <div className='bg-white rounded-xl shadow-lg p-8'>
          <h2 className='text-2xl font-bold text-gray-800 mb-6'>Quản lý người dùng</h2>
          {/* <!-- Bộ lọc và tìm kiếm --> */}
          <div className='flex flex-col sm:flex-row gap-4 mb-6'>
            <input
              type='text'
              placeholder='Tìm kiếm theo tên hoặc email'
              className='flex-1 border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
            />
            <select className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>
              <option>Tất cả vai trò</option>
              <option>Khách thuê</option>
              <option>Chủ xe</option>
              <option>Admin</option>
            </select>
            <select className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>
              <option>Tất cả trạng thái</option>
              <option>Hoạt động</option>
              <option>Khóa</option>
            </select>
            <button className='bg-orange-500 text-white p-3 rounded-lg font-semibold'>Lọc</button>
          </div>
          {/* <!-- Bảng danh sách người dùng --> */}
          <div className='overflow-x-auto'>
            <table className='w-full text-left'>
              <thead>
                <tr className='bg-gray-100'>
                  <th className='p-4'>Tên</th>
                  <th className='p-4'>Email</th>
                  <th className='p-4'>Số điện thoại</th>
                  <th className='p-4'>Vai trò</th>
                  <th className='p-4'>Trạng thái</th>
                  <th className='p-4'>Hành động</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-b border-gray-200'>
                  <td className='p-4 flex items-center'>
                    <Image
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&q=80'
                      alt='Avatar'
                      className='w-8 h-8 rounded-full mr-2'
                      width={40}
                      height={40}
                    />
                    Nguyễn Văn A
                  </td>
                  <td className='p-4'>nguyen.van.a@aurent.com</td>
                  <td className='p-4'>0123 456 789</td>
                  <td className='p-4'>Chủ xe</td>
                  <td className='p-4'>
                    <span className='text-green-500'>Hoạt động</span>
                  </td>
                  <td className='p-4'>
                    <button className='text-orange-500 mr-2'>Sửa</button>
                    <button className='text-red-500'>Khóa</button>
                  </td>
                </tr>
                <tr className='border-b border-gray-200'>
                  <td className='p-4 flex items-center'>
                    <Image
                      src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&q=80'
                      alt='Avatar'
                      className='w-8 h-8 rounded-full mr-2'
                      width={40}
                      height={40}
                    />
                    Trần Thị B
                  </td>
                  <td className='p-4'>tran.thi.b@aurent.com</td>
                  <td className='p-4'>0987 654 321</td>
                  <td className='p-4'>Khách thuê</td>
                  <td className='p-4'>
                    <span className='text-red-500'>Khóa</span>
                  </td>
                  <td className='p-4'>
                    <button className='text-orange-500 mr-2'>Sửa</button>
                    <button className='text-green-500'>Mở khóa</button>
                  </td>
                </tr>
                <tr className='border-b border-gray-200'>
                  <td className='p-4 flex items-center'>
                    <Image
                      src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=40&q=80'
                      alt='Avatar'
                      className='w-8 h-8 rounded-full mr-2'
                      width={40}
                      height={40}
                    />
                    Lê Văn C
                  </td>
                  <td className='p-4'>le.van.c@aurent.com</td>
                  <td className='p-4'>0912 345 678</td>
                  <td className='p-4'>Chủ xe & Khách thuê</td>
                  <td className='p-4'>
                    <span className='text-green-500'>Hoạt động</span>
                  </td>
                  <td className='p-4'>
                    <button className='text-orange-500 mr-2'>Sửa</button>
                    <button className='text-red-500'>Khóa</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- Phân trang --> */}
          <div className='flex justify-center mt-6'>
            <div className='flex space-x-2'>
              <button className='bg-gray-300 text-gray-800 px-4 py-2 rounded-lg'>Trước</button>
              <button className='bg-orange-500 text-white px-4 py-2 rounded-lg'>1</button>
              <button className='bg-gray-300 text-gray-800 px-4 py-2 rounded-lg'>2</button>
              <button className='bg-gray-300 text-gray-800 px-4 py-2 rounded-lg'>3</button>
              <button className='bg-gray-300 text-gray-800 px-4 py-2 rounded-lg'>Sau</button>
            </div>
          </div>
        </div>

        {/* <!-- Thống kê người dùng --> */}
        <div className='bg-white rounded-xl shadow-lg p-6 mt-6'>
          <h3 className='text-xl font-bold text-gray-800 mb-4'>Thống kê người dùng</h3>
          <div className='grid grid-cols-1 sm:grid-cols-4 gap-4'>
            <div className='text-center bg-gray-50 p-4 rounded-lg'>
              <p className='text-2xl font-bold text-orange-500'>1,245</p>
              <p className='text-gray-600'>Tổng người dùng</p>
            </div>
            <div className='text-center bg-gray-50 p-4 rounded-lg'>
              <p className='text-2xl font-bold text-orange-500'>800</p>
              <p className='text-gray-600'>Khách thuê</p>
            </div>
            <div className='text-center bg-gray-50 p-4 rounded-lg'>
              <p className='text-2xl font-bold text-orange-500'>400</p>
              <p className='text-gray-600'>Chủ xe</p>
            </div>
            <div className='text-center bg-gray-50 p-4 rounded-lg'>
              <p className='text-2xl font-bold text-orange-500'>45</p>
              <p className='text-gray-600'>Tài khoản bị khóa</p>
            </div>
          </div>
        </div>

        {/* <!-- Form chỉnh sửa người dùng (ẩn mặc định) --> */}
        <div className='bg-white rounded-xl shadow-lg p-6 mt-6 hidden' id='edit-user-form'>
          <h3 className='text-xl font-bold text-gray-800 mb-4'>Chỉnh sửa thông tin người dùng</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <div>
                <label className='block text-gray-700 mb-1'>Họ và tên</label>
                <input
                  type='text'
                  placeholder='Nhập họ và tên'
                  className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
              </div>
              <div>
                <label className='block text-gray-700 mb-1'>Email</label>
                <input
                  type='email'
                  placeholder='Nhập email'
                  className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
              </div>
              <div>
                <label className='block text-gray-700 mb-1'>Số điện thoại</label>
                <input
                  type='text'
                  placeholder='Nhập số điện thoại'
                  className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
              </div>
            </div>
            <div className='space-y-4'>
              <div>
                <label className='block text-gray-700 mb-1'>Vai trò</label>
                <select className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>
                  <option>Khách thuê</option>
                  <option>Chủ xe</option>
                  <option>Admin</option>
                </select>
              </div>
              <div>
                <label className='block text-gray-700 mb-1'>Trạng thái</label>
                <select className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>
                  <option>Hoạt động</option>
                  <option>Khóa</option>
                </select>
              </div>
              <div>
                <label className='block text-gray-700 mb-1'>Ghi chú</label>
                <textarea
                  placeholder='Ghi chú (nếu có)'
                  className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                  rows={4}
                ></textarea>
              </div>
            </div>
          </div>
          <div className='flex justify-end space-x-4 mt-6'>
            <button className='bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-semibold'>Hủy</button>
            <button className='bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold'>Lưu thay đổi</button>
          </div>
        </div>

        {/* <!-- Hoạt động gần đây --> */}
        <div className='bg-white rounded-xl shadow-lg p-6 mt-6'>
          <h3 className='text-xl font-bold text-gray-800 mb-4'>Hoạt động gần đây</h3>
          <div className='space-y-4'>
            <div className='flex items-center'>
              <span className='text-orange-500 mr-2'>•</span>
              <p className='text-gray-600'>Khóa tài khoản "tran.thi.b@aurent.com" bởi Admin lúc 29/05/2025 22:00</p>
            </div>
            <div className='flex items-center'>
              <span className='text-orange-500 mr-2'>•</span>
              <p className='text-gray-600'>
                Cập nhật vai trò "le.van.c@aurent.com" thành Chủ xe & Khách thuê lúc 29/05/2025 21:30
              </p>
            </div>
            <div className='flex items-center'>
              <span className='text-orange-500 mr-2'>•</span>
              <p className='text-gray-600'>Thêm người dùng mới "pham.thi.d@aurent.com" lúc 29/05/2025 20:45</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Chân trang (Footer) --> */}
      <footer className='bg-orange-500 text-white p-8'>
        <div className='container mx-auto text-center'>
          <div className='text-2xl font-bold mb-4'>AuRent Admin</div>
          <div className='flex justify-center space-x-6 mb-4'>
            <Link href='#' className='text-white'>
              Tổng quan
            </Link>
            <Link href='#' className='text-white'>
              Hỗ trợ
            </Link>
            <Link href='#' className='text-white'>
              Liên hệ
            </Link>
          </div>
          <p className='text-sm'>© 2025 AuRent. Tất cả quyền được bảo lưu.</p>
          <p className='text-sm'>Liên hệ: admin@aurent.com | 0123 456 789</p>
        </div>
      </footer>
    </>
  );
}
