import Logo from './../../assets/logos/Logo'
import './footer.css'
import {
  Visa,
  Mastercard,
  Paypal,
  DinersClub,
  Discover,
  ApplePay,
  GooglePay,
  Klarna,
} from './../../assets/icons/PaymentMethods'
import { Facebook, Instagram } from './../../assets/icons/Socials'
import { Accordeon, AccordeonItem } from '../accordeon/Accordeon'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_moonvalley_grid container">
        <div className="footer_block">
          <div className="footer_section_title">
            <h1>MoonValleyTours</h1>
          </div>
          <div className="about">
            <ul>
              <li>
                <a href="/aboutus">About us</a>
              </li>
              <li>
                <a href="">Destinations</a>
              </li>
              <li>
                <a href="">Partners</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer_block">
          <div className="footer_section_title">
            <h1>Location</h1>
          </div>
          <span>
            Halil Rifat Pasa Mah. <br /> Perpa Ticaret Merk. <br />
            <strong> A Blok 5. Kat</strong> No <strong>432</strong> <br />{' '}
            Sisli, Istanbul - Turkiye
          </span>
        </div>

        <div className="footer_block">
          <div className="footer_section_title">
            <h1>Newsletter</h1>
            <span>
              Get notified with our latest <strong>offers</strong> and{' '}
              <strong>discounts</strong>
              <br />
            </span>
          </div>
          <form>
            <input type="text" placeholder="Your email address" />
            <button>SUBSCRIBE</button>
            <small>
              by clicking suscribe you&apos;re accepting our terms & conditions
            </small>
          </form>
        </div>

        <div className="footer_block">
          <div className="footer_section_title">
            <h1>Reviews</h1>
          </div>
          <span>Clients opinion about us</span>
        </div>

        <div className="footer_block">
          <div className="footer_section_title">
            <h1>Payment Methods</h1>
          </div>
          <ul className="payment flex">
            <Visa />
            <Mastercard />
            <Paypal />
            <DinersClub />
          </ul>
          <ul className="payment flex">
            <Discover />
            <ApplePay />
            <GooglePay />
            <Klarna />
          </ul>
        </div>

        <div className="footer_block socials">
          <div className="footer_section_title">
            <h1>Follow Us</h1>
          </div>
          <ul>
            <li>
              <a
                href="https://facebook.com/moonvalleytours"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/moonvalleytours"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footers_footer">
        <div className="footers_footer container">
          <a href="#">
            <Logo type="footer_logo" />
          </a>
          <ul>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
            <li>
              <a href="">Privacy</a>
            </li>
            <li>
              <a href="">Cookies</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_moonvalley_grid_mobile container">
        <Accordeon>
          <AccordeonItem value="1" trigger="Moon Valley Tours">
            <div className="footer_block">
              <div className="about">
                <ul>
                  <li>
                    <a href="/aboutus">About us</a>
                  </li>
                  <li>
                    <a href="">Destinations</a>
                  </li>
                  <li>
                    <a href="">Partners</a>
                  </li>
                </ul>
              </div>
            </div>
          </AccordeonItem>
          <AccordeonItem value="2" trigger="Location">
            <div className="footer_block">
              <span>
                Halil Rifat Pasa Mah. <br /> Perpa Ticaret Merk. <br />
                <strong> A Blok 5. Kat</strong> No <strong>432</strong> <br />{' '}
                Sisli, Istanbul - Turkiye
              </span>
            </div>
          </AccordeonItem>
          <AccordeonItem value="3" trigger="Latest offers">
            <div className="footer_block">
              <div className="footer_section_title">
                <h1>Newsletter</h1>
                <span>
                  Get notified with our latest <strong>offers</strong> and{' '}
                  <strong>discounts</strong>
                  <br />
                </span>
              </div>
              <form>
                <input type="text" placeholder="Your email address" />
                <button>SUBSCRIBE</button>
                <small>
                  by clicking suscribe you&apos;re accepting our terms &
                  conditions
                </small>
              </form>
            </div>
          </AccordeonItem>
          <AccordeonItem value="4" trigger="Reviews">
            <div className="footer_block">
              <span>Clients opinion about us</span>
            </div>
          </AccordeonItem>
          <AccordeonItem value="5" trigger="Payment Method">
            <div className="footer_block">
              <ul className="payment flex">
                <Visa />
                <Mastercard />
                <Paypal />
                <DinersClub />
              </ul>
              <ul className="payment flex">
                <Discover />
                <ApplePay />
                <GooglePay />
                <Klarna />
              </ul>
            </div>
          </AccordeonItem>
        </Accordeon>
        <div className="footer_block_mobile socials">
          <div className="footer_section_title">
            <h1>Follow Us</h1>
          </div>
          <ul>
            <li>
              <a
                href="https://facebook.com/moonvalleytours"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/moonvalleytours"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
        <div className="footers_footer_mobile">
          <div className="footers_footer_mobile container">
            <a href="#">
              <Logo type="footer_logo" />
            </a>
            <ul>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
