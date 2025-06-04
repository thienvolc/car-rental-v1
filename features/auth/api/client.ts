import { LoginSchema } from '../schema';
import { mockUsers, UserInfo } from './mock';

const authClient = {
  login(userCredential: LoginSchema): { token: string | null } {
    const user = mockUsers.find(
      (user) => user.email === userCredential.email && user.password === userCredential.password,
    );

    if (user) {
      return { token: 'fake-jwt-token-' + user.id };
    } else {
      return { token: null };
    }
  },

  async logout() {
    return;
  },

  getServerSession(token: string): UserInfo | null {
    const user = mockUsers.find((user) => 'fake-jwt-token-' + user.id === token);
    if (user) {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        imageUrl: user.imageUrl,
        role: user.role,
      };
    } else {
      return null;
    }
  },
};

export default authClient;
