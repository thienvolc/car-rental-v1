import { User } from './auth-context';

export const mockUser: User = {
  id: '1',
  name: 'Nguyen Van A',
  email: 'nguyenvana@example.com',
  role: 'user',
};

export const mockAdminUser: User = {
  id: '2',
  name: 'Admin User',
  email: 'adminuser@example.com',
  role: 'admin',
};
