import Image from 'next/image';

export default function OurProductionSection() {
  return (
    <section className='bg-primary px-6 py-12'>
      <div className='max-w-screen-xl mx-auto'>
        <h2 className='text-2xl md:text-3xl font-mono font-semibold tracking-widest mb-10'>
          OUR PRODUCTION<span className='ml-1'>_</span>
        </h2>

        <div className='grid grid-cols-3 md:grid-cols-3 gap-8'>
          {productionSteps.map((step, idx) => (
            <div key={idx}>
              <div className='relative w-full aspect-[3/4] rounded overflow-hidden mb-4'>
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className='object-cover'
                  sizes='100vw'
                  priority
                />
              </div>
              <h3 className='text-sm font-mono font-semibold mb-1'>
                {step.title}
              </h3>
              <p className='text-xs text-muted-foreground leading-relaxed'>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const productionSteps = [
  {
    title: 'KNITTING MILL',
    description:
      'Our parent company Roopa Knitting Mills has been manufacturing world class knit textiles for the last 30 years in Toronto, Canada. Our knowledge base and state of the art knitting machines allow us to create the highest quality fabrics for every product in our line.',
    image:
      'https://www.houseofblanks.com/cdn/shop/files/SarahKohler_-_HOB_-_OCT_2022-5.jpg?v=1696275204&width=750',
  },
  {
    title: 'DYE HOUSE',
    description:
      'Milling fabrics to the highest quality specifications is only the first part of our process. Our dye house is located a few meters from the mill and allows us the opportunity to be hands on with our products every step of the way.',
    image:
      'https://www.houseofblanks.com/cdn/shop/files/SarahKohler_-_HOB_-_OCT_2022-36.jpg?v=1698738982&width=750',
  },
  {
    title: 'SEWING FACTORY',
    description:
      'Located only 15 km from the mill, our sewing operation is where art and manufacturing connect with unparalleled construction techniques and an extreme attention to detail. Every product is carefully sewn to the highest quality specification and quality assured before shipping to you.',
    image:
      'https://www.houseofblanks.com/cdn/shop/files/SarahKohler_HOB_Feb2023_Web-17.jpg?v=1698738994&width=750',
  },
];
