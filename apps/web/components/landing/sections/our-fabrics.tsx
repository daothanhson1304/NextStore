import Image from 'next/image';

export default function OurFabricsSection() {
  return (
    <section className='relative w-full h-[500px] text-white'>
      <Image
        src='https://www.houseofblanks.com/cdn/shop/files/HOB-Shopify-OurFabrics.png?v=1699029745&width=3000' // chỉnh lại đường dẫn ảnh
        alt='Our Fabrics'
        fill
        className='object-cover brightness-75'
        priority
      />
      <div className='max-w-screen-xl mx-auto relative z-10  py-10 md:py-20'>
        <h2 className='text-2xl md:text-4xl font-mono font-semibold mb-4'>
          OUR FABRICS
        </h2>
        <p className='text-sm md:text-base font-mono leading-relaxed'>
          All of our garments are manufactured in Toronto, Canada. We are
          uniquely able to mill and dye our own fabrics to the highest quality
          specifications required for each garment in the collection.
        </p>
      </div>
    </section>
  );
}
