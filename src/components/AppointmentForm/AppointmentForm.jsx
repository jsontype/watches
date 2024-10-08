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
      errors.name = "お名前は必須です";
    }
    if (!formData.email.trim()) {
      errors.email = "メールアドレスは必須です";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "メールアドレスが無効です";
    }
    if (!formData.phone.trim()) {
      errors.phone = "電話番号は必須です";
    }
    if (!formData.vehicle.trim()) {
      errors.vehicle = "時計の種類は必須です";
    }
    if (!formData.time.trim()) {
      errors.time = "時間の選択は必須です";
    }
    if (!formData.date.trim()) {
      errors.date = "日付の選択は必須です";
    }
    if (!formData.msg.trim()) {
      errors.msg = "メッセージは必須です";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      alert("データが正常に送信されました");

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
            ご予約のリクエスト
          </h2>
          <p>
            時計専門店でのご予約に関して、こちらからお申し込みいただけます。お客様のご要望に合わせたサービスを提供いたします。
          </p>
        </div>
        <div className="ak-height-25 ak-height-lg-20"></div>
        <div className="contact-form" data-aos="fade-up" data-aos-delay="750">
          <div id="ak-alert"></div>
          <form onSubmit={handleSubmit} id="appointment-form">
            <div className="from-inputs">
              <div className="type_1">
                <label htmlFor="name" className="form-label">
                  お名前
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="お名前"
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
                  メールアドレス*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="メールアドレス"
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
                  電話番号*
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="電話番号"
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
                  時計の種類*
                </label>
                <input
                  type="text"
                  name="vehicle"
                  value={formData.vehicle}
                  onChange={handleInputChange}
                  placeholder="時計の種類"
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
                  ご希望の時間*
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
                  ご希望の日付*
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
                  メッセージ*
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
              今すぐ予約
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
