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
            <h3 className="contact10-text3 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text5">Shop Location</span>
                </Fragment>
              )}
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3294.044505114083!2d-119.0564549!3d34.34934539999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e9b59e7bd35f9b%3A0x97df42a452e46323!2sSpearmint%20Dyno!5e0!3m2!1sen!2sus!4v1738700857304!5m2!1sen!2sus"
              className="contact10-iframe"
            ></iframe>
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
                href="https://geo:34.34943397856818, -119.05646562886578"
                target="_blank"
                rel="noreferrer noopener"
                className="contact10-link thq-body-small thq-button-flat"
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
  location1Description: undefined,
  content1: undefined,
}

Contact10.propTypes = {
  location1: PropTypes.element,
  heading1: PropTypes.element,
  location1Description: PropTypes.element,
  content1: PropTypes.element,
}

export default Contact10
