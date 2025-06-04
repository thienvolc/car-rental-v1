import Image from 'next/image';
import Link from 'next/link';

export default function AdminDashboardPage() {
  return (
    <>
      {/* //  <!-- Thanh điều hướng (Header) --> */}
      <nav className='bg-orange-500 text-white p-5 shadow-md sticky top-0 z-10'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='text-3xl font-extrabold'>AuRent Admin</div>
          <div className='flex items-center space-x-8'>
            <Link href='/admin/dashboard' className='text-lg'>
              Tổng quan
            </Link>
            <Link href='/admin/dashboard/users' className='text-lg'>
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

      {/* <!-- Phần chính: Trang Admin --> */}
      <section className='container mx-auto py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
          {/* <!-- Sidebar: Menu điều hướng --> */}
          <div className='bg-white rounded-xl shadow-lg p-6'>
            <h3 className='text-lg font-bold text-gray-800 mb-4'>Điều hướng</h3>
            <ul className='space-y-2'>
              <li>
                <Link href='#' className='block text-orange-500 font-semibold py-2 px-4 rounded-lg bg-orange-100'>
                  Tổng quan
                </Link>
              </li>
              <li>
                <Link href='#' className='block text-gray-600 py-2 px-4 rounded-lg'>
                  Quản lý người dùng
                </Link>
              </li>
              <li>
                <Link href='#' className='block text-gray-600 py-2 px-4 rounded-lg'>
                  Quản lý xe
                </Link>
              </li>
              <li>
                <Link href='#' className='block text-gray-600 py-2 px-4 rounded-lg'>
                  Quản lý đơn thuê
                </Link>
              </li>
              <li>
                <Link href='#' className='block text-gray-600 py-2 px-4 rounded-lg'>
                  Thống kê
                </Link>
              </li>
              <li>
                <Link href='#' className='block text-gray-600 py-2 px-4 rounded-lg'>
                  Cài đặt hệ thống
                </Link>
              </li>
            </ul>
          </div>

          {/* <!-- Nội dung chính --> */}
          <div className='lg:col-span-3 space-y-6'>
            {/* <!-- Tổng quan thống kê --> */}
            <div className='bg-white rounded-xl shadow-lg p-6'>
              <h3 className='text-xl font-bold text-gray-800 mb-4'>Tổng quan hệ thống</h3>
              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                <div className='text-center bg-gray-50 p-4 rounded-lg'>
                  <p className='text-2xl font-bold text-orange-500'>1,245</p>
                  <p className='text-gray-600'>Người dùng</p>
                </div>
                <div className='text-center bg-gray-50 p-4 rounded-lg'>
                  <p className='text-2xl font-bold text-orange-500'>560</p>
                  <p className='text-gray-600'>Xe cho thuê</p>
                </div>
                <div className='text-center bg-gray-50 p-4 rounded-lg'>
                  <p className='text-2xl font-bold text-orange-500'>2,340</p>
                  <p className='text-gray-600'>Đơn thuê</p>
                </div>
              </div>
            </div>

            {/* <!-- Quản lý người dùng --> */}
            <div className='bg-white rounded-xl shadow-lg p-6'>
              <h3 className='text-xl font-bold text-gray-800 mb-4'>Quản lý người dùng</h3>
              <div className='flex flex-col sm:flex-row gap-4 mb-4'>
                <input
                  type='text'
                  placeholder='Tìm kiếm theo tên hoặc email'
                  className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
                <select className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>
                  <option>Tất cả vai trò</option>
                  <option>Khách thuê</option>
                  <option>Chủ xe</option>
                  <option>Admin</option>
                </select>
                <button className='bg-orange-500 text-white p-3 rounded-lg font-semibold'>Lọc</button>
              </div>
              <div className='overflow-x-auto'>
                <table className='w-full text-left'>
                  <thead>
                    <tr className='bg-gray-100'>
                      <th className='p-3'>Tên</th>
                      <th className='p-3'>Email</th>
                      <th className='p-3'>Vai trò</th>
                      <th className='p-3'>Trạng thái</th>
                      <th className='p-3'>Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='border-b border-gray-200'>
                      <td className='p-3'>Nguyễn Văn A</td>
                      <td className='p-3'>nguyen.van.a@aurent.com</td>
                      <td className='p-3'>Chủ xe</td>
                      <td className='p-3'>
                        <span className='text-green-500'>Hoạt động</span>
                      </td>
                      <td className='p-3'>
                        <button className='text-orange-500 mr-2'>Sửa</button>
                        <button className='text-red-500'>Khóa</button>
                      </td>
                    </tr>
                    <tr className='border-b border-gray-200'>
                      <td className='p-3'>Trần Thị B</td>
                      <td className='p-3'>tran.thi.b@aurent.com</td>
                      <td className='p-3'>Khách thuê</td>
                      <td className='p-3'>
                        <span className='text-red-500'>Khóa</span>
                      </td>
                      <td className='p-3'>
                        <button className='text-orange-500 mr-2'>Sửa</button>
                        <button className='text-green-500'>Mở khóa</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* <!-- Quản lý xe --> */}
            <div className='bg-white rounded-xl shadow-lg p-6'>
              <h3 className='text-xl font-bold text-gray-800 mb-4'>Quản lý xe</h3>
              <div className='flex flex-col sm:flex-row gap-4 mb-4'>
                <input
                  type='text'
                  placeholder='Tìm kiếm theo tên xe'
                  className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
                <select className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>
                  <option>Tất cả trạng thái</option>
                  <option>Đang cho thuê</option>
                  <option>Ẩn</option>
                  <option>Không khả dụng</option>
                </select>
                <button className='bg-orange-500 text-white p-3 rounded-lg font-semibold'>Lọc</button>
              </div>
              <div className='space-y-4'>
                <div className='border border-gray-200 rounded-lg p-4 flex items-center'>
                  <Image
                    src='https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
                    alt='Toyota Camry'
                    className='w-16 h-16 object-cover rounded-lg mr-4'
                    width={100}
                    height={80}
                  />
                  <div className='flex-1'>
                    <p className='text-gray-800 font-semibold'>Toyota Camry</p>
                    <p className='text-gray-600'>Chủ xe: Nguyễn Văn A</p>
                    <p className='text-gray-600'>Trạng thái: Đang cho thuê</p>
                  </div>
                  <button className='text-orange-500'>Sửa</button>
                  <button className='text-red-500 ml-2'>Xóa</button>
                </div>
                <div className='border border-gray-200 rounded-lg p-4 flex items-center'>
                  <Image
                    src='https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
                    alt='Hyundai Tucson'
                    className='w-16 h-16 object-cover rounded-lg mr-4'
                    width={100}
                    height={80}
                  />
                  <div className='flex-1'>
                    <p className='text-gray-800 font-semibold'>Hyundai Tucson</p>
                    <p className='text-gray-600'>Chủ xe: Lê Văn C</p>
                    <p className='text-gray-600'>Trạng thái: Ẩn</p>
                  </div>
                  <button className='text-orange-500'>Sửa</button>
                  <button className='text-red-500 ml-2'>Xóa</button>
                </div>
              </div>
            </div>

            {/* <!-- Quản lý đơn thuê --> */}
            <div className='bg-white rounded-xl shadow-lg p-6'>
              <h3 className='text-xl font-bold text-gray-800 mb-4'>Quản lý đơn thuê</h3>
              <div className='flex flex-col sm:flex-row gap-4 mb-4'>
                <input
                  type='text'
                  placeholder='Tìm kiếm theo mã đơn'
                  className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
                />
                <select className='border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'>
                  <option>Tất cả trạng thái</option>
                  <option>Đang chờ xác nhận</option>
                  <option>Đã xác nhận</option>
                  <option>Đang thuê</option>
                  <option>Đã hoàn thành</option>
                </select>
                <button className='bg-orange-500 text-white p-3 rounded-lg font-semibold'>Lọc</button>
              </div>
              <div className='space-y-4'>
                <div className='border border-gray-200 rounded-lg p-4 flex items-center'>
                  <Image
                    src='https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
                    alt='Toyota Camry'
                    className='w-16 h-16 object-cover rounded-lg mr-4'
                    width={100}
                    height={80}
                  />
                  <div className='flex-1'>
                    <p className='text-gray-800 font-semibold'>Toyota Camry - #12345</p>
                    <p className='text-gray-600'>Khách thuê: Trần Thị B</p>
                    <p className='text-gray-600'>Trạng thái: Đang chờ xác nhận</p>
                  </div>
                  <button className='text-orange-500'>Chi tiết</button>
                  <button className='text-red-500 ml-2'>Hủy</button>
                </div>
                <div className='border border-gray-200 rounded-lg p-4 flex items-center'>
                  <Image
                    src='https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
                    alt='Hyundai Tucson'
                    className='w-16 h-16 object-cover rounded-lg mr-4'
                    width={100}
                    height={80}
                  />
                  <div className='flex-1'>
                    <p className='text-gray-800 font-semibold'>Hyundai Tucson - #12346</p>
                    <p className='text-gray-600'>Khách thuê: Lê Văn C</p>
                    <p className='text-gray-600'>Trạng thái: Đã hoàn thành</p>
                  </div>
                  <button className='text-orange-500'>Chi tiết</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
