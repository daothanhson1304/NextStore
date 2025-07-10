import {
  BannerSection,
  NewProducts,
  OutProduction,
  NewsletterSection,
  OurFabrics,
} from './sections';

export default function MainContent() {
  return (
    <main>
      <BannerSection />
      <NewProducts />
      <OutProduction />
      <NewProducts />
      <NewsletterSection />
      <OurFabrics />
    </main>
  );
}
