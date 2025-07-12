import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products | House of blanks',
  description: 'Browse our products',
};

export default async function Products({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  // console.log(slug);
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}
