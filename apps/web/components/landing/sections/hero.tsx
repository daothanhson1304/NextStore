import { Button } from '@workspace/ui/components/button';
import { url } from 'inspector';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative bg-cover bg-no-repeat bg-[url("/images/banner.png")] h-[calc(100vh-132px)]'>
      <div className='max-w-screen-xl mx-auto py-48'>
        <h2 className='font-bold tracking-wide text-7xl leading-tight'>
          Grand Opening Sale! <br /> Up to 30% Off
        </h2>
        <p className='mt-6 text-xl text-muted-foreground'>
          Treat your pets with the best toys, treats, and more.
        </p>
      </div>

      {/* Caption */}
    </section>
  );
}
