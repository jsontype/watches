import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    subject: "",
    msg: "",
  });

  const [alertMessage, setAlertMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name) {
      isValid = false;
      tempErrors["name"] = "Please enter your full name.";
    }

    if (!formData.email) {
      isValid = false;
      tempErrors["email"] = "Please enter your email address.";
    } else if (typeof formData.email !== "undefined") {
      let pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      if (!pattern.test(formData.email)) {
        isValid = false;
        tempErrors["email"] = "Please enter a valid email address.";
      }
    }

    if (!formData.topic) {
      isValid = false;
      tempErrors["topic"] = "Please enter a topic.";
    }

    if (!formData.subject) {
      isValid = false;
      tempErrors["subject"] = "Please enter a subject.";
    }

    if (!formData.msg) {
      isValid = false;
      tempErrors["msg"] = "Please enter your message.";
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Your message has been sent successfully!");

      setFormData({
        name: "",
        email: "",
        topic: "",
        subject: "",
        msg: "",
      });
    }
  };

  return (
    <div className="container">
      <div className="ak-height-100 ak-height-lg-40"></div>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="contact-content">
        <div
          className="contact-title-section"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <h2 className="contact-form-title ak-white-color text-uppercase">
            Contact Us
          </h2>
          <p>Home / Contact</p>
        </div>
        <div className="ak-height-25 ak-height-lg-20"></div>
        <div className="contact-form" data-aos="fade-up" data-aos-delay="750">
          <div>
            <h5 className="mb-3">How can we help?</h5>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </p>
            <div className="ak-height-45 ak-height-lg-30"></div>
          </div>
          <div id="ak-alert">{alertMessage && <p>{alertMessage}</p>}</div>
          <form method="POST" id="contact-form" onSubmit={handleSubmit}>
            <div className="from-inputs">
              <div className="type_1">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </div>
              <div className="type_1">
                <label htmlFor="email" className="form-label">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
            </div>
            <div className="from-inputs">
              <div className="type_1">
                <label htmlFor="topic" className="form-label">
                  Which topic best matches your question?
                </label>
                <input
                  type="text"
                  name="topic"
                  id="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                />
                {errors.topic && <p className="error">{errors.topic}</p>}
              </div>
              <div className="type_1">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                {errors.subject && <p className="error">{errors.subject}</p>}
              </div>
            </div>
            <div className="from-textarea">
              <div className="type_1">
                <label htmlFor="msg" className="form-label">
                  Your Message*
                </label>
                <textarea
                  name="msg"
                  rows="5"
                  id="msg"
                  value={formData.msg}
                  onChange={handleChange}
                  required
                ></textarea>
                {errors.msg && <p className="error">{errors.msg}</p>}
              </div>
            </div>

            <div className="ak-height-40 ak-height-lg-20"></div>
            <button
              type="submit"
              id="submit"
              name="submit"
              className="common-btn"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
