import Link from 'next/link';
import { Button } from '../ui/button';
import Image from 'next/image';

export default function Logo() {
  return (
    <Button asChild variant='link'>
      <Link href='/' className='flex items-center'>
        <Image src='/logo.png' alt='Logo' width={88} height={88} />
      </Link>
    </Button>
  );
}
