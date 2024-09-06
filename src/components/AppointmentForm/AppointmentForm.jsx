import React, { useState } from "react";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    time: "",
    date: "",
    msg: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    }
    if (!formData.vehicle.trim()) {
      errors.vehicle = "Vehicle type is required";
    }
    if (!formData.time.trim()) {
      errors.time = "Time is required";
    }
    if (!formData.date.trim()) {
      errors.date = "Date is required";
    }
    if (!formData.msg.trim()) {
      errors.msg = "Message is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      alert("Data send successfully");

      setFormData({
        name: "",
        email: "",
        phone: "",
        vehicle: "",
        time: "",
        date: "",
        msg: "",
      });
    }
  };

  return (
    <div className="container">
      <div className="ak-height-125 ak-height-lg-80"></div>
      <div className="contact-content">
        <div
          className="contact-title-section"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <h2 className="contact-form-title ak-white-color text-uppercase">
            Request for an appointment
          </h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's stan.
          </p>
        </div>
        <div className="ak-height-25 ak-height-lg-20"></div>
        <div className="contact-form" data-aos="fade-up" data-aos-delay="750">
          <div id="ak-alert"></div>
          <form onSubmit={handleSubmit} id="appointment-form">
            <div className="from-inputs">
              <div className="type_1">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                />
                {formErrors.name && (
                  <span className="error-message text-danger">
                    {formErrors.name}
                  </span>
                )}
              </div>
              <div className="type_1">
                <label htmlFor="email" className="form-label">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                />
                {formErrors.email && (
                  <span className="error-message text-danger">
                    {formErrors.email}
                  </span>
                )}
              </div>
            </div>
            <div className="from-inputs">
              <div className="type_1">
                <label htmlFor="phone" className="form-label">
                  Phone Number*
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  required
                />
                {formErrors.phone && (
                  <span className="error-message text-danger">
                    {formErrors.phone}
                  </span>
                )}
              </div>
              <div className="type_1">
                <label htmlFor="vehicle" className="form-label">
                  Vehicle Type*
                </label>
                <input
                  type="text"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleInputChange}
                  placeholder="Vehicle Type"
                  required
                />
                {formErrors.vehicle && (
                  <span className="error-message text-danger">
                    {formErrors.vehicle}
                  </span>
                )}
              </div>
            </div>
            <div className="from-inputs">
              <div className="type_1">
                <label htmlFor="time" className="form-label">
                  Select Time*
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                />
                {formErrors.time && (
                  <span className="error-message text-danger">
                    {formErrors.time}
                  </span>
                )}
                <span className="date-time-icon">
                  <img src="/assets/img/icon/time-icon.svg" alt="Time" />
                </span>
              </div>
              <div className="type_1">
                <label htmlFor="date" className="form-label">
                  Select Date*
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
                {formErrors.date && (
                  <span className="error-message text-danger">
                    {formErrors.date}
                  </span>
                )}
                <span className="date-time-icon">
                  <img src="/assets/img/icon/date-icon.svg" alt="Date" />
                </span>
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
                  value={formData.msg}
                  onChange={handleInputChange}
                  required
                ></textarea>
                {formErrors.msg && (
                  <span className="error-message text-danger">
                    {formErrors.msg}
                  </span>
                )}
              </div>
            </div>
            <div className="ak-height-40 ak-height-lg-20"></div>
            <button
              type="submit"
              id="submit"
              name="submit"
              className="common-btn"
            >
              Appointment Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
