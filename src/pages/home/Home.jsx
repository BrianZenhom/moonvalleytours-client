import Hero from './sections/hero/Hero';
import MainDestinations from './sections/maindestinations/MainDestinations';
import TopTours from './sections/toptours/TopTours';

export default function Home() {
  return (
    <>
      <main className="main">
        <Hero />
        <MainDestinations />
        <TopTours />
      </main>
    </>
  );
}
