'use client';

import { useRouter } from 'next/navigation';
import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { mockAdminUser, mockUser } from './mock';
import { AlignRight } from 'lucide-react';

export interface User {
  id: string;
  name: string;
  email: string;
  imageUrl?: string;
  role?: 'admin' | 'user';
}

export interface AuthContextType {
  user: User | null;
  login: (user: { email: string; password: string }) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Failed to parse user data from localStorage', error);
        localStorage.removeItem('user');
      }
    }
  }, []);

  const login = (user: { email: string; password: string }) => {
    alert(JSON.stringify(user));
    if ((user.email != mockUser.email && user.email != mockAdminUser.email) || user.password !== '123456') {
      return alert('Email hoặc mật khẩu không đúng');
    }

    if (user.email === mockAdminUser.email) {
      loginAsAdmin();
    } else {
      loginAsUser();
    }
  };

  const loginAsAdmin = () => {
    setUser(mockAdminUser);
    localStorage.setItem('user', JSON.stringify(mockAdminUser));
    router.push('/admin/dashboard');
  };

  const loginAsUser = () => {
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    router.push('/');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
