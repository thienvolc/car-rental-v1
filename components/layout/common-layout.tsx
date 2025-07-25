import Footer from '@/components/layout/components/footer';
import Header from '@/components/layout/components/header';
import { PropsWithChildren } from 'react';

export default function CommonLayout({ children }: PropsWithChildren) {
  return (
    <div className='min-h-screen'>
      <Header />
      <main className='min-h-screen px-6 pt-4 pb-40'>{children}</main>
      <Footer />
    </div>
  );
}
