import React, { useEffect } from 'react'
import styles from './Contact.module.scss'
import { useForm } from 'react-hook-form'

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <div className={`${styles['main-container']}`}>
      <div className={`${styles['contact-section']}`}>
        <h2>Contact me</h2>
        <p>
          Are you in need of a <span>front-end developer</span> who can bring
          your vision to life? Whether you're looking for full-time support, a
          freelancer, or have any other requests, don't hesitate to use the
          form.
        </p>
        <div className={`${styles['form-container']}`}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={`${styles['form-top']}`}>
              <input
                className={`${errors?.name && styles['error']}`}
                placeholder="Name"
                {...register('name', { required: true })}
                onError={() => toast('Wow so easy !')}
              />
              <input
                className={`${errors?.email && styles['error']}`}
                placeholder="Email"
                {...register('email', {
                  required: true,
                  pattern: /^\S+@\S+\.\S+$/,
                })}
              />
            </div>
            <input
              className={`${errors?.subject && styles['error']}`}
              placeholder="Subject"
              {...register('subject', { required: true })}
            />
            <textarea
              rows="4"
              className={`${errors?.message && styles['error']}`}
              placeholder="Message"
              {...register('message', { required: true })}
            />
            <div className={`${styles['error-message']}`}>
              {Object.keys(errors).length > 0 ? (
                <p>Please complete required fields correctly</p>
              ) : (
                ''
              )}
            </div>
            <div>
              <input type="submit" id={`${styles['submit']}`} value="Send!" />
            </div>
          </form>
        </div>
      </div>
      <div className={`${styles['google-map']}`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50767.53526005311!2d-59.18390154511881!3d-37.31951570830073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f9b2733946f%3A0xceef2c76899c202d!2sTandil%2C%20Buenos%20Aires%20Province!5e0!3m2!1sen!2sar!4v1682095325034!5m2!1sen!2sar"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
