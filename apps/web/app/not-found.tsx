import { Button } from '@workspace/ui/components/button';
import Link from 'next/link';
import { Metadata } from 'next';
import { ROUTE_PATHS } from '@/constants';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-400px)] text-center space-y-6 px-4'>
      <h1 className='text-6xl font-bold'>404</h1>
      <p className='text-xl'>Oops! Page not found.</p>
      <Link href={ROUTE_PATHS.HOME}>
        <Button className='w-full rounded-full py-6 px-8 text-base font-mono bg-black text-white '>
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
}

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
};
