import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Spearmint Dyno</title>
        <meta property="og:title" content="Spearmint Dyno" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">#services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text12">#contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text13">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text14">Services</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text15">About Us</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text16">Contact</span>
          </Fragment>
        }
        link21={
          <Fragment>
            <span className="home-text17">#contact us</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text18">Main Action</span>
          </Fragment>
        }
        link1Url="https://spearmintdyno.com"
        link2Url="#Features24"
        link2Url1="#Hero17"
        page1Description={
          <Fragment>
            <span className="home-text19">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text20">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text21">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text22">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text23">Book an Appointment</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text24">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text25">
              From Street to Track, We Fine-Tune Your Car for Ultimate
              Performance.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text26">
              Precision Tuning. Peak Performance.
            </span>
          </Fragment>
        }
        hero17Id="Hero17"
        image1Src="/1-1500w.jpg"
        image2Src="/2-1500w.jpg"
        image3Src="/3-1500w.jpg"
        image4Src="/9-1500w.jpg"
        image5Src="/4-1500w.jpg"
        image6Src="/5-1500w.jpg"
        image7Src="/5-1500w.jpg"
        image8Src="/6-1500w.jpg"
        image9Src="/3-1500w.jpg"
        image10Src="/9-1500w.jpg"
        rootClassName="hero17root-class-name"
      ></Hero17>
      <Features24
        features24Id="Features24"
        feature1Title={
          <Fragment>
            <span className="home-text27">
              Performance Tuning &amp; Dyno Testing
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text28">Auto Repair &amp; Maintenance</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text29">
              Custom Upgrades &amp; Modifications
            </span>
          </Fragment>
        }
        feature1ImgSrc="/7-1400w.jpg"
        feature1Description={
          <Fragment>
            <span className="home-text30">
              {' '}
              Maximize horsepower, torque, and efficiency with expert tuning.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text31">
              <span>
                From diagnostics to full repairs, we keep your car running
                strong.
              </span>
              <br></br>
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text34">
              {' '}
              High-performance parts and expert installs for the perfect build.
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text35">Schedule an Appointment</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text36">
              Book a dyno tune or service appointment today and experience the
              difference. Performance starts here!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text37">
              Ready to Unlock Your Car’s True Potential?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text38">
              Have Questions? Need a Tune? Let’s Talk Performance!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text39">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text40">Location</span>
          </Fragment>
        }
        location1ImageSrc="/8-1400w.jpg"
        location1Description={
          <Fragment>
            <span className="home-text41">
              <span>304 S. Ojai St.</span>
              <br></br>
              <span>Santa Paula CA. 93060</span>
              <br></br>
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        logoSrc="/logo-removebg-preview-1500h.png"
        termsLink={
          <Fragment>
            <span className="home-text46">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text47">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text48">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
