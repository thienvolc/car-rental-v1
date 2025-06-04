import CommonLayout from '@/components/layout/common-layout';
import { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
  return <CommonLayout>{children}</CommonLayout>;
}
