import img1 from './../../assets/images/image(3).webp';
import img2 from './../../assets/images/image(4).webp';
import img3 from './../../assets/images/image(1).webp';
import './tour.css';
import {
  AccessibilityIcon,
  DurationIcon,
  HelpIcon,
  IncluidedIcon,
  LanguageIcon,
  NotIncluidedIcon,
  PetIcon,
  ProviderIcon,
  VoucherIcon,
  WhenToBookIcon,
} from '../../assets/icons/TourIcons';

import Slider from '../../components/slider/Slider';
import Help from '../../assets/icons/Help';

const images = [img1, img2, img3];

export default function Tour() {
  return (
    <>
      <section className="tour">
        <article className="tour-container">
          <header className="tour-header container">
            <div className="tour-details">
              <div className="tour-tags">
                <small>Egipto</small>
                <small>Africa / Asia</small>
                <small>El Cairo</small>
              </div>
              <div className="tour-share">
                <button>share</button>
              </div>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h1>Camel Ride in the Piramids of Giza</h1>
                <span>
                  <strong>9.10/10</strong> 115 reviews
                </span>
              </div>
              <div className="tour-price">
                <h1>&euro; 60</h1>
                <button>check availability</button>
              </div>
            </div>
          </header>
          <div className="tour-image_slider">
            <div className="slider_wrapper">
              <Slider imageUrls={images} />
            </div>
            {/* <div className={sticky ? '' : 'here'}></div> */}
            {/* <div className={sticky ? 'tour-nav' : 'tour-nav  sticky'}> */}
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
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  quo exercitationem laudantium ex esse dolores incidunt commodi
                  eos nesciunt soluta perferendis reiciendis, aspernatur,
                  explicabo cupiditate beatae numquam repellendus totam
                  corrupti?
                </p>
                <br />
                <span>View complete description</span>
                <br />
                <br />
              </div>
              <div className="hrblack"></div>
              <div className="tour-prices">
                <h2>Price</h2>
                <div className="tour-price-wrapper-one">
                  <span className="tour-main-detail">
                    Tour from <br /> the Sheraton Hotel
                  </span>
                  <div className="exact-price">
                    <small>Adults</small>
                    <span>&euro; 60</span>
                  </div>
                  <div className="exact-price">
                    <small>
                      Children <br /> 3-10 years old
                    </small>
                    <span>&euro; 50</span>
                  </div>
                  <div className="exact-price">
                    <small>
                      Children under <br /> 3 years old
                    </small>
                    <span>free</span>
                  </div>
                </div>
                <div className="hr"></div>
                <div className="tour-price-wrapper-two">
                  <span className="tour-main-detail">
                    Tour from <br /> the airport
                  </span>
                  <div className="exact-price">
                    <span>&euro; 60</span>
                  </div>
                  <div className="exact-price">
                    <span>&euro; 50</span>
                  </div>
                  <div className="exact-price">
                    <span>free</span>
                  </div>
                </div>
              </div>
              <div className="hrblack" />
              <div className="tour-more-info">
                <h2>More Info</h2>

                <div className="more-info">
                  <strong>
                    <DurationIcon />
                    Duration
                  </strong>
                  <span>5 hours 30 minutes</span>
                </div>
                <div className="more-info">
                  <strong>
                    <LanguageIcon />
                    Language
                  </strong>
                  <span>
                    Tour is in Spanish, English or Turkish. <br /> Make sure to
                    select the language on checkout.
                  </span>
                </div>
                <div className="more-info">
                  <strong>
                    <IncluidedIcon />
                    Incluided
                  </strong>
                  <ul>
                    <li>Speaking Spanish, English or Turkish Guide</li>
                    <li>Driver</li>
                    <li>Transport by air conditioned vehicle</li>
                  </ul>
                </div>
                <div className="more-info">
                  <strong>
                    <NotIncluidedIcon />
                    Not Incluided
                  </strong>
                  <ul>
                    <li>Food or drinks</li>
                    <li>Tips</li>
                  </ul>
                </div>
                <div className="more-info">
                  <strong>
                    <WhenToBookIcon />
                    When to book?
                  </strong>
                  <span>
                    You can book up to the start time, as long as there are
                    places remaining. <br /> Book now to guarantee your spot.
                  </span>
                </div>
                <div className="more-info">
                  <strong>
                    <VoucherIcon />
                    Type of voucher
                  </strong>
                  <span>
                    We will send you an email with your booking confirmation and
                    voucher.
                  </span>
                </div>
                <div className="more-info">
                  <strong>
                    <AccessibilityIcon />
                    Accesibility
                  </strong>
                  <span>Not wheelchair accessible.</span>
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
                <div className="more-info stack">
                  <strong>
                    <HelpIcon />
                    Faqs
                  </strong>
                  <div className="qa">
                    <span>
                      <strong>Q -</strong> How to book?
                    </span>
                    <br />
                    <span>
                      <strong>A -</strong> To reserve the activity, choose the
                      date and complete <br /> the form on this page. You will
                      receive your confirmation immediately.
                    </span>
                  </div>
                </div>
              </div>
              <div className="hrblack"></div>
              <div className="tour-cancellation">
                <h2>Cancellation</h2>
                <span>
                  Not refundable. This activity does not permit modifications
                  nor cancelations.
                </span>
              </div>
              <div className="hrblack"></div>
              <div className="tour-meetingpoint">
                <h2>Meeting point</h2>
                <span>
                  Bateaux Parisiens. Port de la Bourdonnais, 75007, Paris,
                  France.
                </span>
              </div>
            </div>
            <div className="contentBox">
              <div className="stickybox"></div>
            </div>
          </div>
          <div className="tourscustomer-reviews">
            <div className="hrblacklast container"></div>
            <div className="tour-review container">
              <div className="tour-customerreview">
                <h2>Our customer&apos;s reviews</h2>
                <span>These are genuine reviews written by our customers.</span>
                <small>5 out of 25 reviews</small>
              </div>
              <div className="tour-reviewnumbers">
                <h1>9.40/10 *****</h1>
                <span>25 reviews | 330 travellers</span>
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
    </>
  );
}
