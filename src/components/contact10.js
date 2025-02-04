import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text6">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text8">
                    Have Questions? Need a Tune? Let’s Talk Performance!
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image thq-img-ratio-16-9"
            />
            <h3 className="contact10-text3 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text5">Shop Location</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact10-text7">
                    1234 Auto Repair Street, City, State, Zip Code
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-body-small thq-button-flat"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location1: undefined,
  heading1: undefined,
  location1ImageSrc: '/8-1400w.jpg',
  location1ImageAlt: 'Main Shop Location Image',
  location1Description: undefined,
  content1: undefined,
}

Contact10.propTypes = {
  location1: PropTypes.element,
  heading1: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  location1Description: PropTypes.element,
  content1: PropTypes.element,
}

export default Contact10
