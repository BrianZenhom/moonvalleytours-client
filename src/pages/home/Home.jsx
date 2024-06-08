import Hero from './sections/hero/Hero'
import MainDestinations from './sections/maindestinations/MainDestinations'
import TopTours from './sections/toptours/TopTours'

export default function Home() {
  return (
    <>
      <main className="main">
        <Hero />
        <MainDestinations type="Preferred Destinations" />
        <div className="showmore_button">
          <button>See more</button>
        </div>
        <TopTours />
      </main>
    </>
  )
}
