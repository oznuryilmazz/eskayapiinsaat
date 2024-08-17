import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

import { addressData } from "../../data/data";

import Address from "./address";

import style from "./style.module.scss";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(2, "Adınız en az 2 karakter olmalıdır")
    .required("Adınız gereklidir"),
  email: yup
    .string()
    .email("E-posta geçerli bir e-posta olmalıdır")
    .required("Mail adresi gereklidir"),
  subject: yup
    .string()
    .min(2, "Konu en az 2 karakter olmalıdır")
    .required("Konu gereklidir"),
  message: yup
    .string()
    .min(2, "Mesaj en az 2 karakter olmalıdır")
    .required("Mesaj gereklidir"),
  phone: yup
    .string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Telefon numarası geçerli değildir")
    .required("Telefon numarası gereklidir"),
});

const Contact = () => {
  const [buttonState, setButtonState] = useState({
    disabled: false,
    text: "GÖNDER",
    className: style.button,
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setButtonState({
        disabled: true,
        text: "Sending...",
        className: style.button,
      });
      const success = await SendMessage(
        values.name,
        values.email,
        values.subject,
        values.message,
        values.phone
      );
      if (success) {
        setButtonState({
          disabled: true,
          text: "Message is sent!",
          className: `${style.button} ${style.buttonSuccess}`,
        });
        resetForm();
      } else {
        setButtonState({
          disabled: true,
          text: "Message could not be sent",
          className: `${style.button} ${style.buttonError}`,
        });
      }
      setSubmitting(false);
    },
  });

  const SendMessage = async (name, email, subject, message, phone) => {
    const data = { name, email, subject, message, phone };
    const formspreeEndpoint = addressData.formspreeEndpoint;
    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.ok;
  };

  return (
    <div className={style.container}>
      <div className={style.contactContainer}>
        <h2>İLETİŞİM</h2>
        <Address />
        <div className={style.contact}>
          <div className={style.div1}>
            <iframe
              className={style.map}
              src={addressData.iframe}
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div className={style.div2}>
            <h3 className={style.title}>Bize Mesaj Gönder</h3>
            <form onSubmit={formik.handleSubmit}>
              <input
                className={style.input}
                type="text"
                id="name"
                name="name"
                placeholder="Ad ve Soyad"
                accessKey="n"
                minLength="2"
                autoComplete="name"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className={style.error}>{formik.errors.name}</div>
              ) : null}

              <input
                className={style.input}
                type="email"
                id="email"
                name="email"
                placeholder="Mail Adresiniz"
                accessKey="e"
                autoComplete="email"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className={style.error}>{formik.errors.email}</div>
              ) : null}

              <input
                className={style.input}
                type="text"
                id="subject"
                name="subject"
                placeholder="Konu"
                accessKey="s"
                minLength="2"
                autoComplete="subject"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subject}
              />
              {formik.touched.subject && formik.errors.subject ? (
                <div className={style.error}>{formik.errors.subject}</div>
              ) : null}

              <textarea
                className={style.input}
                id="message"
                name="message"
                rows="5"
                cols="33"
                placeholder="Bir mesaj yazınız"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              />
              {formik.touched.message && formik.errors.message ? (
                <div className={style.error}>{formik.errors.message}</div>
              ) : null}

              <input
                className={style.input}
                type="tel"
                id="phone"
                name="phone"
                placeholder="Telefon Numarası"
                accessKey="t"
                minLength="12"
                autoComplete="tel"
                required
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className={style.error}>{formik.errors.phone}</div>
              ) : null}

              <button
                className={buttonState.className}
                type="submit"
                disabled={buttonState.disabled}
              >
                {buttonState.text}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
