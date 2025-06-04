import CommonLayout from '@/components/layout/common-layout';
import { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
  return <CommonLayout>{children}</CommonLayout>;
}
