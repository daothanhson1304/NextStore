export const metadata = {
  title: 'About Us | House of blanks',
  description: 'Learn more about our company, mission, and values.',
};

export default function AboutPage() {
  return (
    <main className='px-6 py-12 max-w-3xl mx-auto text-black font-mono'>
      <h1 className='text-3xl font-bold mb-4'>About Us</h1>
      <p className='mb-6 text-gray-700 leading-relaxed'>
        Welcome to <strong>YourSite</strong>! We are a passionate team dedicated
        to bringing you high-quality products and a seamless shopping
        experience.
      </p>

      <section className='mb-10'>
        <h2 className='text-2xl font-semibold mb-2'>Our Mission</h2>
        <p className='text-gray-700'>
          Our mission is to provide minimalist, high-quality streetwear that
          fits your lifestyle. Every piece is designed with care, focusing on
          both comfort and style.
        </p>
      </section>

      <section className='mb-10'>
        <h2 className='text-2xl font-semibold mb-2'>Our Values</h2>
        <ul className='list-disc list-inside text-gray-700 space-y-1'>
          <li>Quality over quantity</li>
          <li>Transparency and honesty</li>
          <li>Respect for the environment</li>
          <li>Customer-first mindset</li>
        </ul>
      </section>

      <section>
        <h2 className='text-2xl font-semibold mb-2'>Contact</h2>
        <p className='text-gray-700'>
          If you have any questions or feedback, feel free to contact us at{' '}
          <a
            href='mailto:support@yoursite.com'
            className='underline text-blue-600'
          >
            support@yoursite.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
