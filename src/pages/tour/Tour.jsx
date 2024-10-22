import { useState } from 'react'
import img1 from './../../assets/images/image(3).webp'
import img2 from './../../assets/images/image(4).webp'
import img3 from './../../assets/images/image(1).webp'
import { useLocation } from 'react-router-dom'
import './tour.css'
import {
  DurationIcon,
  IncludedIcon,
  LanguageIcon,
  NotIncludedIcon,
  PetIcon,
  ProviderIcon,
  VoucherIcon,
  WhenToBookIcon,
} from '../../assets/icons/TourIcons'
import Slider from '../../components/slider/Slider'
import Hooks from '../../hooks/useFetch'
import { format } from 'date-fns'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { Calendar, DownCaret, ShareIcon } from '../../assets/icons/AllIcons'
import TourBookingComponent from '../../hooks/stripe'

const images = [
  {
    url: img1,
    alt: 'img1',
  },
  {
    url: img2,
    alt: 'img2',
  },
  {
    url: img3,
    alt: 'img3',
  },
]

export default function Tour() {
  const state = useLocation()
  const [selected, setSelected] = useState()
  const [calendarOpen, setCalendarOpen] = useState(true)

  let footer = <p></p>
  if (selected) {
    footer = (
      <span className="formated-date">
        {format(selected, 'EEEE, dd MMMM yyyy')}.
      </span>
    )
  }

  const { data, loading, error } = Hooks.useFetch(
    `http://api.moonvalleytours.lat/api/v1/tours/${state.state.id}`
  )

  const disabledDays = [{ from: new Date(), to: new Date(1994, 4, 1) }]

  function handleCalendarOpen() {
    setCalendarOpen(!calendarOpen)
  }

  return (
    <>
      {error ? (
        'Something went wrong!'
      ) : loading ? (
        'loading '
      ) : (
        <section className="tour">
          <article className="tour-container">
            <header className="tour-header container">
              {/* <div className="tour-tags">
                <div className="tour-details">
                  <Link
                    to={`/${data?.data?.city?.country?.country.toLowerCase()}`}
                    state={{ country: state.state.country }}
                  >
                    <div className="tour-tags">
                      <small>{data?.data?.city?.country?.country}</small>
                    </div>
                  </Link>
                  <Link
                    to={`/${data?.data?.city?.country?.country.toLowerCase()}/${data?.data?.city?.city.toLowerCase()}`}
                    state={{ dest: state.state.city }}
                  >
                    <div className="tour-tags">
                      <small>{data?.data?.city?.city}</small>
                    </div>
                  </Link>
                </div>
              </div> */}
              <div className="tour-info">
                <div className="tour-title">
                  <strong>{data?.data?.title}</strong>
                  <span>
                    <b>{data?.data?.ratingsAverage}/5</b>
                    {data?.data?.ratingsQuantity} reviews
                  </span>
                </div>
                <div className="tour-price">
                  <span className="tour-price-text" aria-label="price">
                    &euro; {data?.data?.price.toFixed(2)}
                  </span>
                  <div className="share-button">
                    <button className="share-button-icon">
                      <ShareIcon />
                      <span>share</span>
                    </button>
                  </div>
                </div>
              </div>
            </header>
            <div className="tour-image_slider">
              <div className="slider_wrapper">
                <Slider images={images} />
              </div>
            </div>
            <div className="tour-nav ">
              <div className="tour-nav-wrapper container">
                <ul>
                  <li>Description</li>
                  <li>Prices</li>
                  <li>Details</li>
                  <li>Cancellations</li>
                </ul>
              </div>
            </div>
            <div className="singletour-data container">
              <div className="tour-desc-price-details-cancelation">
                <div className="tour-desc">
                  <p>{data?.data?.desc}</p>
                  <p>
                    <span>View complete description</span>
                  </p>
                </div>
                <div className="hrblack"></div>
                <div className="tour-prices">
                  <h2>Price</h2>
                  <div className="hr"></div>
                  <div className="tour-price-wrapper-one">
                    <span className="tour-main-detail">
                      Tour from the airport
                    </span>
                    <div className="exact-price">
                      <small>Adults</small>
                      <span>&euro; {data?.data?.price}</span>
                    </div>
                    <div className="exact-price">
                      <small>
                        Children <br /> 3-10 years old
                      </small>
                      <span>&euro; {data?.data?.price / 2}</span>
                    </div>
                    <div className="exact-price">
                      <small>
                        Children under <br /> 3 years old
                      </small>
                      <span>free</span>
                    </div>
                  </div>
                </div>
                <div className="hrblack"></div>
                <div className="tour-more-info">
                  <h2>Details</h2>

                  <div className="more-info">
                    <strong>
                      <DurationIcon />
                      Duration
                    </strong>
                    <span>{data?.data?.duration} Hours</span>
                  </div>
                  <div className="more-info">
                    <strong>
                      <LanguageIcon />
                      Language
                    </strong>
                    <span>
                      The activity takes place with a guide that speaks{' '}
                      {data?.data?.language}
                    </span>
                  </div>
                  <div className="more-info">
                    <strong>
                      <IncludedIcon />
                      Included
                    </strong>
                    <ul>
                      {data?.data?.included?.map(li => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="more-info">
                    <strong>
                      <NotIncludedIcon />
                      Not Included
                    </strong>
                    <ul>
                      {data?.data?.notIncluded?.map(li => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="more-info">
                    <strong>
                      <WhenToBookIcon />
                      When to book?
                    </strong>
                    <span>
                      You can book up to the start time, as long as there are
                      places remaining. Book now to guarantee your spot.
                    </span>
                  </div>
                  <div className="more-info">
                    <strong>
                      <VoucherIcon />
                      Type of voucher
                    </strong>
                    <span>
                      We will send you an email with your booking confirmation
                      and voucher.
                    </span>
                  </div>
                  <div className="more-info">
                    <strong>
                      <ProviderIcon />
                      Provider
                    </strong>
                    <span>Moon Valley Tours</span>
                  </div>
                  <div className="more-info">
                    <strong>
                      <PetIcon />
                      Pets
                    </strong>
                    <span>Not Allowed</span>
                  </div>
                </div>
                <div className="hrblack"></div>
                <div className="tour-cancellation">
                  <h2>Cancellations</h2>
                  {data?.cancellation ? (
                    <span>
                      Free cancellation <b> 72 hours </b> before the tour
                    </span>
                  ) : (
                    <span>
                      Not refundable. This activity does not permit
                      modifications nor cancelations.
                    </span>
                  )}
                </div>
              </div>
              <div className="content-box">
                <div className="stickybox">
                  <form className="tour-calendar">
                    {calendarOpen ? (
                      <DayPicker
                        id="daypicker"
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        disabled={disabledDays}
                        onDayClick={() => handleCalendarOpen()}
                      />
                    ) : (
                      <div
                        onClick={handleCalendarOpen}
                        className="tour-calendar-selector"
                      >
                        <span className="tour-calendar-selector-span1">
                          <Calendar />
                        </span>
                        {footer}
                        <span className="tour-calendar-selector-downcaret">
                          <DownCaret />
                        </span>
                      </div>
                    )}
                    <TourBookingComponent tourId={state.state.id} />
                  </form>
                </div>
              </div>
            </div>
            <div className="tours-customer-reviews">
              <div className="hrblacklast container"></div>
              <div className="tour-review container">
                <div className="tour-customerreview">
                  <h2>Our customer&apos;s reviews</h2>
                  <span>
                    These are genuine reviews written by our customers.
                  </span>
                  <small>0 out of {data?.data?.reviews?.length} reviews</small>
                </div>
                <div className="tour-reviewnumbers">
                  <strong>{data?.data?.ratingsAverage}/5</strong>
                  <br />
                  <span>
                    {data?.data?.ratingsQuantity} reviews |{' '}
                    {data?.data?.travellers} travellers
                  </span>
                </div>
              </div>
              <div className="tour-reviews-customers container">
                {data?.data?.reviews?.map(review => {
                  const isoString = review.createdAt
                  const date = new Date(isoString)
                  const formattedDate = date.toISOString().split('T')[0]

                  return (
                    <div key={review.id} className="tour-singlereview">
                      <div className="tourreview-header">
                        <div className="reviewrate">
                          <strong>*****</strong>
                          <span>{formattedDate}</span>
                        </div>
                        <div className="reviewuser">
                          <div className="review-username">
                            <div className="review-profile">
                              {review.user.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="review-name">
                              <span>
                                {review.user.name.charAt(0).toUpperCase() +
                                  review.user.name.slice(1)}
                              </span>
                              <small>Argentina</small>
                            </div>
                          </div>
                          <div className="usersreview">
                            <p>{review.review}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </article>
        </section>
      )}
    </>
  )
}
