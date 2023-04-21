import React from 'react'
import styles from './Contact.module.scss'

export default function Contact() {
  return (
    <div className={`${styles['main-container']}`}>
      <div className={`${styles['contact-form']}`}>Contact form</div>
      <div className={`${styles['google-map']}`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50767.53526005311!2d-59.18390154511881!3d-37.31951570830073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f9b2733946f%3A0xceef2c76899c202d!2sTandil%2C%20Buenos%20Aires%20Province!5e0!3m2!1sen!2sar!4v1682095325034!5m2!1sen!2sar"
          style={{ border: 0 }}
          allowfullscreen={true}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
