import Link from 'next/link';

export default function SignupForm() {
  return (
    <div className='bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto'>
      <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>Đăng ký tài khoản</h2>
      <form>
        <div className='space-y-4'>
          <div>
            <label className='block text-gray-700 mb-1'>Email</label>
            <input
              type='email'
              placeholder='Nhập email'
              className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
              required
            />
          </div>
          <div>
            <label className='block text-gray-700 mb-1'>Mật khẩu</label>
            <input
              type='password'
              placeholder='Nhập mật khẩu'
              className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
              required
            />
          </div>
        </div>
        <button type='submit' className='w-full bg-orange-500 text-white p-3 rounded-lg font-semibold mt-6'>
          Đăng ký
        </button>
      </form>
      <p className='text-center text-gray-600 mt-4'>
        Đã có tài khoản?{' '}
        <Link href='/login' className='text-orange-500'>
          Đăng nhập ngay
        </Link>
      </p>
    </div>
  );
}
