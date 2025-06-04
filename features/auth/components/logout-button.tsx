import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { AuthContext } from '../auth-context';

export default function LogoutButton() {
  const { logout } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className='px-4 py-2 font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'
      aria-label='Đăng xuất'
    >
      Đăng xuất
    </button>
  );
}
