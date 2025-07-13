import MainContent from '@/components/landing/main-content';
import Footer from '@/components/shared/footer';
import { Metadata } from 'next';

export default function Page() {
  return (
    <div className='landing-page'>
      <MainContent />
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Happy Paw - Pet shop & Care',
  description: 'Welcome to the Happy Paw',
};
