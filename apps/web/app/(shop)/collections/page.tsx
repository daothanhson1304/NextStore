import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Collections | House of blanks',
  description: 'Browse our collections',
};

export default async function CollectionsSection() {
  const collections = await fetch('http://localhost:3000/api/collections');
  const collectionsData = await collections.json();
  return (
    <section className='px-6 py-10 bg-[#f7f7f7]'>
      <h2 className='text-2xl font-bold font-mono mb-6'>COLLECTIONS</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {collectionsData.map((col: any, index: number) => (
          <Link
            key={index}
            href={`/collections/${col.name.toLowerCase().replace(/\s+/g, '-')}`}
            className='group'
          >
            <div className='relative aspect-[3/4] w-full overflow-hidden'>
              <Image
                src={col.image}
                alt={col.name}
                fill
                className='object-cover transition-transform duration-300 group-hover:scale-105'
              />
            </div>
            <p className='mt-2 text-sm font-mono'>
              {col.name} <span className='inline-block'>→</span>
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
