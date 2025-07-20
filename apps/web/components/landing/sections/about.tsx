import Image from 'next/image';
import HappyPets from '@/assets/images/happy-pets.webp';
import { CreditCard, Headset, Repeat, Truck } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className='max-w-screen-xl mx-auto py-24'>
      <div className='container mx-auto flex flex-col md:flex-row items-center gap-8'>
        <div className='flex flex-col gap-4 md:w-1/2 items-center md:items-start'>
          <div className='relative'>
            <Image
              src={HappyPets}
              alt='Happy Pets'
              className='rounded'
              width={500}
            />
          </div>
        </div>

        <div className='md:w-1/2'>
          <h2 className='text-5xl font-bold mb-4'>
            We Care About Your Pets <br /> And Their Well-Being
          </h2>
          <p className='text-lg mb-4'>
            Happy Paw is an online store that offers goods for your pets: cats
            and dogs, fish, rabbits, birds, and many other animals.
          </p>
          <p className='text-lg mb-4'>
            We sell pet food, supplies, clothes, and different products by the
            best American and European manufacturers. We are pet lovers, just
            like you, and pick only the best and high-quality goods:
          </p>
          <ul className='list-disc ml-5 text-lg space-y-1'>
            <li>hypoallergenic dry and wet food;</li>
            <li>safe and long-lasting toys;</li>
            <li>bedding, beds, and cages;</li>
            <li>aquariums, tanks, and accessories;</li>
            <li>clothes, collars, and harnesses.</li>
          </ul>
        </div>
      </div>

      <div className='mx-auto flex flex-wrap justify-between gap-6 mt-16'>
        <Feature
          icon={<Truck className='w-6 h-6' />}
          title='Free Shipping'
          desc='Free shipping on all orders.'
        />
        <Feature
          icon={<Repeat />}
          title='10-Day Returns'
          desc='Contact us for a return.'
        />
        <Feature
          icon={<CreditCard />}
          title='Secure Payment'
          desc='We accept Visa and MasterCard.'
        />
        <Feature
          icon={<Headset />}
          title='Online Support'
          desc='We are always here to help.'
        />
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className='flex items-center gap-3'>
      <div className='text-3xl'>{icon}</div>
      <div>
        <div className='font-semibold text-2xl'>{title}</div>
        <div className='text-base'>{desc}</div>
      </div>
    </div>
  );
}
