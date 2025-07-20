import ProductSection from '@/components/shared/product-section';
import Image from 'next/image';

export default function NewArrivals() {
  return (
    <section className='py-24  bg-white'>
      <div className='max-w-screen-xl mx-auto'>
        <h2 className='text-5xl font-bold mb-2 text-center'>
          Our New Arrivals
        </h2>

        <p className='text-lg mb-8 text-center'>
          We offer affordable and safe toys and accessories for your pets.
        </p>

        <ProductSection />
      </div>
    </section>
  );
}
