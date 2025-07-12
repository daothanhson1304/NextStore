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
  title: 'House of blanks - Home',
  description: 'Welcome to the house of blanks',
};
