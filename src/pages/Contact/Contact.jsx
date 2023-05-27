import React, { useEffect, useState } from "react";
import styles from "./Contact.module.scss";
import { useForm, Controller } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [captchaToken, setCaptchaToken] = useState();

  const onSubmit = async (data) => {
    if (!captchaToken) return;
    try {
      const contactMeResponse = fetch("https://formspree.io/f/mwkjjrog", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      toast.promise(contactMeResponse, {
        pending: "We are processing your request",
        success: "All done, thank you for reaching out!",
        error: "Ups, something went wrong try again later!",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className={`${styles["main-container"]}`}>
      <section className={`${styles["contact-section"]}`}>
        <div className={`${styles["contact-wrapper"]}`}>
          <h2>Let's talk</h2>
          <p>
            Are you in need of a <span>front-end developer</span> who can bring
            your vision to life? Whether you're looking for full-time support, a
            freelancer, or have any other requests, don't hesitate to use the
            form.
          </p>
          <div className={`${styles["form-container"]}`}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={`${styles["form-top"]}`}>
                <input
                  className={`${errors?.name && styles["error"]}`}
                  placeholder="Full name"
                  {...register("name", { required: true })}
                />
                <input
                  className={`${errors?.email && styles["error"]}`}
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+\.\S+$/,
                  })}
                />
              </div>
              <input
                className={`${errors?.subject && styles["error"]}`}
                placeholder="Subject"
                {...register("subject", { required: true })}
              />
              <textarea
                rows="5"
                className={`${errors?.message && styles["error"]}`}
                placeholder="Message"
                {...register("message", { required: true })}
              />
              <HCaptcha
                theme="dark"
                sitekey={import.meta.env.VITE_HCAPTCHA_SITEKEY}
                onVerify={(token) => setCaptchaToken(token)}
                onError={(error) => console.log("hCaptcha error:", error)}
              />
              <div className={`${styles["error-message"]}`}>
                {Object.keys(errors).length > 0 && (
                  <p>Please complete required fields correctly</p>
                )}
              </div>

              <div>
                <input type="submit" id={`${styles["submit"]}`} value="Send!" />
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className={`${styles["google-map"]}`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50767.53526005311!2d-59.18390154511881!3d-37.31951570830073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f9b2733946f%3A0xceef2c76899c202d!2sTandil%2C%20Buenos%20Aires%20Province!5e0!3m2!1sen!2sar!4v1682095325034!5m2!1sen!2sar"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </main>
  );
}
