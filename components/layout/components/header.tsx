'use client';
import { useContext, useState } from 'react';
import Link from 'next/link';
import Logo from '../../common/logo';
import { Button } from '../../ui/button';
import { AuthContext } from '@/features/auth/auth-context';
import Image from 'next/image';
import LogoutButton from '@/features/auth/components/logout-button';
import { MenuIcon, XIcon } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <header className='sticky top-0 z-50 w-full bg-orange-500 shadow-sm dark:bg-gray-800'>
      {/* Removed container class to make navbar full width */}
      <div className='px-4 md:px-8 lg:px-12'>
        <nav className='flex items-center justify-between w-full h-16 md:h-20'>
          <div className='flex items-center space-x-8'>
            <Logo />
            <nav className='hidden md:flex space-x-8'>
              <NavLink href='/about'>Về chúng tôi</NavLink>
              <NavLink href='/contact'>Liên hệ</NavLink>
              <NavLink href='/products'>Sản phẩm</NavLink>
            </nav>
          </div>

          <div className='flex items-center space-x-4'>
            {user ? (
              <>
                <div className='hidden md:flex items-center space-x-3'>
                  <Link
                    className='flex items-center space-x-2 text-white hover:text-gray-200 transition-colors duration-200'
                    aria-label='Tài khoản'
                    href='/dashboard'
                  >
                    <Image
                      src={user.imageUrl || '/avatar-placeholder.png'}
                      alt={user?.name || 'Avatar người dùng'}
                      width={32}
                      height={32}
                      className='w-8 h-8 rounded-full object-cover'
                    />
                    <span className='text-sm font-medium'>{user.name}</span>
                  </Link>
                  <LogoutButton />
                </div>
              </>
            ) : (
              <div className='hidden md:flex items-center space-x-4'>
                <Button
                  asChild
                  variant={'ghost'}
                  className='text-white hover:text-gray-200 transition-colors duration-200 font-medium'
                  aria-label='Đăng nhập'
                >
                  <Link href='/login'>Đăng nhập</Link>
                </Button>
                <Button
                  asChild
                  className='px-4 py-2 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                  aria-label='Đăng ký'
                >
                  <Link href='/signup'>Đăng ký</Link>
                </Button>
              </div>
            )}

            {/* Mobile menu button - improved with Lucide icons */}
            <button
              className='md:hidden flex items-center p-2 text-white rounded-md hover:bg-orange-600'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label='Toggle menu'
            >
              {mobileMenuOpen ? <XIcon className='h-6 w-6' /> : <MenuIcon className='h-6 w-6' />}
            </button>
          </div>
        </nav>

        {/* Mobile menu - improved styling */}
        {mobileMenuOpen && (
          <div className='md:hidden py-4 space-y-4 border-t border-orange-400'>
            <div className='flex flex-col space-y-2'>
              <MobileNavLink href='/about'>Về chúng tôi</MobileNavLink>
              <MobileNavLink href='/contact'>Liên hệ</MobileNavLink>
              <MobileNavLink href='/products'>Sản phẩm</MobileNavLink>
            </div>

            <div className='border-t border-orange-400 pt-3'>
              {user ? (
                <div className='flex flex-col space-y-3 px-4'>
                  <div className='flex items-center space-x-3 px-2'>
                    {user.imageUrl && (
                      <Image
                        src={user.imageUrl}
                        alt={user?.name || 'Avatar người dùng'}
                        width={32}
                        height={32}
                        className='w-8 h-8 rounded-full object-cover'
                      />
                    )}
                    <span className='text-white font-medium'>{user.name}</span>
                  </div>
                  <Button asChild variant={'ghost'} className='text-white hover:bg-orange-600 justify-start'>
                    <Link href='/dashboard'>Tài khoản của tôi</Link>
                  </Button>
                  <LogoutButton />
                </div>
              ) : (
                <div className='flex flex-col space-y-3 px-4'>
                  <Button asChild variant={'ghost'} className='text-white hover:bg-orange-600 justify-start'>
                    <Link href='/login'>Đăng nhập</Link>
                  </Button>
                  <Button asChild className='bg-blue-600 hover:bg-blue-700'>
                    <Link href='/signup'>Đăng ký</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className='text-white hover:text-gray-200 font-medium transition-colors duration-200'>
      {children}
    </Link>
  );
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className='block px-4 py-2 text-white hover:bg-orange-600 rounded-md transition-colors duration-200'
    >
      {children}
    </Link>
  );
}
