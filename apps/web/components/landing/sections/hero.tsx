import { Button } from '@workspace/ui/components/button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className='relative'>
      {/* Main Image */}
      <div className='relative mx-auto w-full max-w-screen-xl'>
        <div className='relative aspect-[16/9] overflow-hidden '>
          <Image
            src='https://www.houseofblanks.com/cdn/shop/files/HOB-summersale25-shopify-2.jpg?v=1751374010&width=3000' // bạn thay bằng đường dẫn ảnh thật
            alt='Summer Sale Banner'
            fill
            className='object-cover'
            priority
          />

          {/* Navigation */}
          <div className='absolute bottom-4 left-4 text-xs tracking-wider text-white'>
            <span>01 / 04</span>
          </div>

          {/* Shop button */}
          <div className='absolute bottom-4 right-4'>
            <Button
              variant='outline'
              className='rounded-full border-white text-white px-6 py-1 hover:bg-white/10'
            >
              SHOP
            </Button>
          </div>
        </div>
      </div>

      {/* Caption */}
      <div className='max-w-screen-xl mx-auto  py-6'>
        <h2 className='text-3xl font-bold tracking-wide'>SUMMER SALE</h2>
        <p className='mt-2 text-sm text-muted-foreground'>
          Our favourite styles and colours are now up to 50% off for our Summer
          Sale.
        </p>
      </div>
    </section>
  );
}
