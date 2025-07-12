import {
  BannerSection,
  OutProduction,
  NewsletterSection,
  OurFabrics,
} from './sections';
import ProductsSection from '@/components/shared/product-section';

export default function MainContent() {
  return (
    <main>
      <BannerSection />
      <ProductsSection title='NEW ITEMS' />
      <OutProduction />
      <ProductsSection title='CANADIAN MADE FLEECE' />
      <NewsletterSection />
      <OurFabrics />
    </main>
  );
}
