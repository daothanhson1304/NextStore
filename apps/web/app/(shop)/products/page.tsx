import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | Happy Paw',
  description: 'Browse our products',
};

export default async function Products() {
  return (
    <div className='max-w-page mx-auto py-8'>
      <h1 className='text-3xl font-bold mb-8'>All Products</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
        {/* Product cards will be rendered here */}
        <div className='text-center py-8 text-gray-500'>
          <p>Products coming soon...</p>
        </div>
      </div>
    </div>
  );
}
