import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div
      id={props.hero17Id}
      className={`hero17-header78 ${props.rootClassName} `}
    >
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content1">
          <h1 className="hero17-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero17-text5">
                  Expert Auto Repair Services
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero17-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero17-text8">
                  Trust our experienced mechanics to take care of all your car
                  maintenance and repair needs.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button1">
            <span className="thq-body-small">
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text6">Book an Appointment</span>
                </Fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline hero17-button2">
            <span className="thq-body-small">
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text7">Learn More</span>
                </Fragment>
              )}
            </span>
          </button>
        </div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero17-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  rootClassName: '',
  image2Src:
    'https://images.unsplash.com/photo-1614077433726-24a3b9736b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODYyMzUxM3w&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Mechanic working on a car engine',
  heading1: undefined,
  image4Src:
    'https://images.unsplash.com/photo-1636761358757-dbc556c860f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODYyMzUxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'Car maintenance tools',
  image4Alt: 'Car engine parts',
  image6Alt: 'Mechanic changing oil filter',
  image5Src:
    'https://images.unsplash.com/photo-1600598882370-68933b528007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODYyMzUxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1530675706010-bc677ce30ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODYyMzUxM3w&ixlib=rb-4.0.3&q=80&w=1080',
  action1: undefined,
  image5Alt: 'Car diagnostic equipment',
  action2: undefined,
  content1: undefined,
  image6Src:
    'https://images.unsplash.com/photo-1518631145805-509a14b04f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODYyMzUxNHw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Mechanic inspecting a vehicle',
  image1Src:
    'https://images.unsplash.com/photo-1606485940233-76eeff49360c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczODYyMzUxOHw&ixlib=rb-4.0.3&q=80&w=1080',
  hero17Id: '',
}

Hero17.propTypes = {
  rootClassName: PropTypes.string,
  image2Src: PropTypes.string,
  image1Alt: PropTypes.string,
  heading1: PropTypes.element,
  image4Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image3Src: PropTypes.string,
  action1: PropTypes.element,
  image5Alt: PropTypes.string,
  action2: PropTypes.element,
  content1: PropTypes.element,
  image6Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image1Src: PropTypes.string,
  hero17Id: PropTypes.string,
}

export default Hero17
