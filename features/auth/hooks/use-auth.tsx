'use client';

import { useRouter } from 'next/navigation';
import React, { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { UserInfo } from '../api/mock';
import { LoginSchema } from '../schema';
import authClient from '../api/client';

interface AuthContextType {
  getCurrentUser: () => UserInfo | null;
  login: (user: LoginSchema) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const { setItem, getItem, removeItem } = useLocalStorage('token');
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedToken = getItem();
        if (storedToken) {
          const userInfo = authClient.getServerSession(storedToken);
          setUser(userInfo);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        removeItem();
        setUser(null);
      }
    };

    checkAuth();
  }, []);

  const login = async (userCredentials: LoginSchema) => {
    const { token } = authClient.login(userCredentials);
    if (token) {
      setItem(token);
      const userInfo = authClient.getServerSession(token);
      setUser(userInfo);
      router.push('/');
    }
  };

  const logout = () => {
    setUser(null);
    removeItem();
    router.push('/login');
  };

  const getCurrentUser = () => {
    return user;
  };

  const contextValue: AuthContextType = {
    getCurrentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { type AuthContextType, AuthProvider, useAuth };
