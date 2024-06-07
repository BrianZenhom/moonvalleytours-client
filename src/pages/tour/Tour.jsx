import React from 'react'
import img1 from './../../assets/images/image(3).webp'
import img2 from './../../assets/images/image(4).webp'
import img3 from './../../assets/images/image(1).webp'
import { Link, useLocation } from 'react-router-dom'
import './tour.css'
import {
  DurationIcon,
  IncluidedIcon,
  LanguageIcon,
  NotIncluidedIcon,
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
  const [selected, setSelected] = React.useState()

  let footer = <p></p>
  if (selected) {
    footer = <p>{format(selected, 'EEEE, dd MMMM yyyy')}.</p>
  }

  const { data, loading, error } = Hooks.useFetch(
    `http://localhost:1234/api/v1/tours/${state.state.id}`
  )

  const disabledDays = [{ from: new Date(), to: new Date(1994, 4, 1) }]

  console.log(state.state)

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
              <div className="tour-tags">
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
                <div className="tour-share">
                  <button>share</button>
                </div>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h1>{data?.data?.title}</h1>
                  <span>
                    <strong>{data?.data?.ratingsAverage}/5</strong>{' '}
                    {data?.data?.ratingsQuantity} reviews
                  </span>
                </div>
                <div className="tour-price">
                  <h1>&euro; {data?.data?.price}</h1>
                  <button>check availability</button>
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
                  <h2>More Info</h2>

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
                      <IncluidedIcon />
                      Incluided
                    </strong>
                    <ul>
                      {data?.data?.included?.map(li => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="more-info">
                    <strong>
                      <NotIncluidedIcon />
                      Not Incluided
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
                  <h2>Cancellation</h2>
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
              <div className="contentBox">
                <div className="stickybox">
                  <form action="">
                    <p>{footer}</p>
                    <DayPicker
                      id="daypicker"
                      mode="single"
                      selected={selected}
                      onSelect={setSelected}
                      disabled={disabledDays}
                    />
                  </form>
                </div>
              </div>
            </div>
            <div className="tourscustomer-reviews">
              <div className="hrblacklast container"></div>
              <div className="tour-review container">
                <div className="tour-customerreview">
                  <h2>Our customer&apos;s reviews</h2>
                  <span>
                    These are genuine reviews written by our customers.
                  </span>
                  <small>0 out of 0 reviews</small>
                </div>
                <div className="tour-reviewnumbers">
                  <h1>{data?.ratingsAverage}/5 *****</h1>
                  <span>
                    {data?.ratingsQuantity} reviews | {data?.data?.travellers}{' '}
                    travellers
                  </span>
                </div>
              </div>
              <div className="tour-reviews-customers container">
                <div className="tour-singlereview">
                  <header className="tourreview-header">
                    <div className="reviewrate">
                      <h1>*****</h1>
                      <span>25/10/2023</span>
                    </div>
                    <div className="reviewuser">
                      <div className="review-username">
                        <div className="review-profile">B</div>
                        <div className="review-name">
                          <span>Brian</span> <small>Argentina</small>
                        </div>
                      </div>
                      <div className="usersreview">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Harum magnam reprehenderit, ratione suscipit eum
                          nulla ea aperiam ipsum corporis minima.
                        </p>
                      </div>
                    </div>
                  </header>
                </div>
              </div>
            </div>
          </article>
        </section>
      )}
    </>
  )
}
