'use client';

import Link from 'next/link';
import { useAuth } from '../hooks/use-auth';
import { LoginSchema } from '../schema';

export default function LoginForm() {
  const { login } = useAuth();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const userCredential = Object.fromEntries(formData.entries()) as LoginSchema;
    login(userCredential);
  }

  return (
    <div className='bg-white rounded-xl shadow-lg p-8 max-w-md mx-auto'>
      <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>Đăng nhập vào tài khoản</h2>
      <form onSubmit={handleSubmit}>
        <div className='space-y-4'>
          <div>
            <label className='block text-gray-700 mb-1'>Email</label>
            <input
              name='email'
              type='email'
              placeholder='Nhập email'
              className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
              required
            />
          </div>
          <div>
            <label className='block text-gray-700 mb-1'>Mật khẩu</label>
            <input
              name='password'
              type='password'
              placeholder='Nhập mật khẩu'
              className='w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
              required
            />
          </div>
        </div>
        <button type='submit' className='w-full bg-orange-500 text-white p-3 rounded-lg font-semibold mt-6'>
          Đăng nhập
        </button>
      </form>
      <p className='text-center text-gray-600 mt-4'>
        Chưa có tài khoản?{' '}
        <Link href='/signup' className='text-orange-500'>
          Đăng ký ngay
        </Link>
      </p>
    </div>
  );
}
