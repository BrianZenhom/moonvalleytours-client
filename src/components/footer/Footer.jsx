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
import Button from './../button/Button'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_moonvalley_grid container">
        <div className="footer_block">
          <div className="footer_section_title">
            <strong>MoonValleyTours</strong>
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
            <strong>Location</strong>
          </div>
          <span>
            Halil Rifat Pasa Mah. <br /> Perpa Ticaret Merk. <br />
            <strong> A Blok 5. Kat</strong> No <strong>432</strong> <br />{' '}
            Sisli, Istanbul - Turkiye
          </span>
        </div>

        <div className="footer_block">
          <div className="footer_section_title">
            <strong>Newsletter</strong> <br />
            <span>
              Get notified with our latest <strong>offers</strong> and{' '}
              <strong>discounts</strong>
              <br />
            </span>
          </div>
          <form>
            <input type="text" placeholder="Your email address" />
            <Button name="Subscribe"></Button>
            <small>
              by clicking suscribe you&apos;re accepting our terms & conditions
            </small>
          </form>
        </div>

        <div className="footer_block">
          <div className="footer_section_title">
            <strong>Reviews</strong>
          </div>
          <span>Clients opinion about us</span>
        </div>

        <div className="footer_block">
          <div className="footer_section_title">
            <strong>Payment Methods</strong>
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
            <strong>Follow Us</strong>
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
                <strong>Newsletter</strong>
                <span>
                  Get notified with our latest <strong>offers</strong> and{' '}
                  <strong>discounts</strong>
                  <br />
                </span>
              </div>
              <form>
                <input type="text" placeholder="Your email address" />
                <Button name="SUBSCRIBE" />
                <small>
                  by clicking suscribe you&apos;re accepting our terms &
                  conditions
                </small>
              </form>
            </div>
          </AccordeonItem>

          <div className="footer_block">
            <div className="opinions">
              <strong>TBD</strong>
              <span>MoonValley&apos;s Opinions</span>
            </div>
          </div>
          <div className="footer_block_mobile socials">
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
          <div className="footer_block_socials">
            <ul className="payment flex">
              <Visa />
              <Mastercard />
              <Paypal />
              <DinersClub />
              <Discover />
              <ApplePay />
              <GooglePay />
              <Klarna />
            </ul>
          </div>
        </Accordeon>
      </div>
      <div className="footers_footer_mobile">
        <div className="footers_footer_mobile container">
          <a href="#">
            <Logo type="footer_logo" />
          </a>
          <ul className="terms">
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
    </footer>
  )
}
