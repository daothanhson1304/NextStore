import { ROUTE_PATHS } from '@/constants';
import Link from 'next/link';
import { AnnouncementBar } from '../landing/announcement-bar';

export default function Header() {
  return (
    <>
      <AnnouncementBar />
      <header className='max-w-page mx-auto py-8 flex items-center justify-between'>
        <nav>
          <ul className='flex items-center gap-4'>
            <li>
              <Link href={ROUTE_PATHS.HOME}>Shop</Link>
            </li>
            <li>
              <Link href={ROUTE_PATHS.ABOUT}>About</Link>
            </li>
            <li>
              <Link href={ROUTE_PATHS.WHOLSALE}>Wholesale</Link>
            </li>
          </ul>
        </nav>
        <Link href={ROUTE_PATHS.HOME}>
          <h1 className='text-2xl font-bold'>House of blanks</h1>
        </Link>
        <div className='flex items-center gap-4'>
          <Link href={ROUTE_PATHS.LOGIN}>
            <span>Account</span>
          </Link>
          <Link href={ROUTE_PATHS.CART}>
            <span>Cart</span>
          </Link>
        </div>
      </header>
    </>
  );
}
