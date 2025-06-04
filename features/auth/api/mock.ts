export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  HOST = 'host',
  MODERATOR = 'moderator',
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  imageUrl?: string;
  role: UserRole;
}

export interface UserInfo extends Omit<User, 'password'> {}

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Nguyen Van A',
    email: 'user@example.com',
    password: '123456',
    role: UserRole.USER,
  },
  {
    id: '2',
    name: 'Nguyen Van B',
    email: 'hostuser@example.com',
    password: '123456',
    role: UserRole.HOST,
  },
  {
    id: '3',
    name: 'Nguyen Van C',
    password: '123456',
    email: 'moderatoruser@example.com',
    role: UserRole.MODERATOR,
  },
  {
    id: '4',
    name: 'Nguyen Van D',
    password: '123456',
    email: 'adminuser@example.com',
    role: UserRole.ADMIN,
  },
];
