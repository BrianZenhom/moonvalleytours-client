import Hero from './sections/hero/Hero'
import MainDestinations from './sections/maindestinations/MainDestinations'
import TopTours from './sections/toptours/TopTours'
import Button from './../../components/button/Button'

export default function Home() {
  return (
    <>
      <main className="main">
        <Hero />
        <MainDestinations type="Main Destinations" />
        <div className="showmore_button">
          <Button name="See more" />
        </div>
        <TopTours />
      </main>
    </>
  )
}
