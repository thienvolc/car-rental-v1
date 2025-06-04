import Link from "next/link";

export default function Footer() {
  return (
    <footer className='bg-orange-500 text-white p-8'>
      <div className='container mx-auto text-center'>
        <div className='text-2xl font-bold mb-4'>AuRent</div>
        <div className='flex justify-center space-x-6 mb-4'>
          <Link href='#' className='text-white'>
            Trang chủ
          </Link>
          <Link href='page/TimKiemXe.html' className='text-white'>
            Tìm xe
          </Link>
          <Link href='#' className='text-white'>
            Liên hệ
          </Link>
        </div>
        <p className='text-sm'>© 2025 AuRent. Tất cả quyền được bảo lưu.</p>
        <p className='text-sm'>Liên hệ: contact@aurent.com | 0123 456 789</p>
      </div>
    </footer>
  );
}
