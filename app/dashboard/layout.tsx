import DashboardLayout from '@/components/layout/dashboard-layout';
import { PropsWithChildren } from 'react';

export default function DashboardRootLayout({ children }: PropsWithChildren) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
