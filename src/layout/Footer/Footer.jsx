import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TextAnimation from '../../components/TextAnimation/TextAnimation'

const footerDataArray = [
  {
    className: "footer-info",
    dataAosDelay: "0",
    phone: "+81-70-1543-3733",
    desp: "業界の専門家による圧倒的なサービスをご提供します。お得な価格でのプロフェッショナルな時計修理、個別のショッピング体験、高価買取、自社製作のオリジナル時計も取り扱っています。",
  },
  {
    className: 'footer-menu-one',
    dataAosDelay: '50',
    links: [
      { title: "会社概要", link: "/about" },
      { title: "サービス", link: "/service" },
      { title: "料金プラン", link: "/pricing" },
      { title: "チーム", link: "/team" },
      { title: "お問い合わせ", link: "/contact" },
    ],
  },
  {
    className: 'footer-menu-two',
    dataAosDelay: '100',
    links: [
      { title: "予約", link: "/appointment" },
      { title: "ブログ / ニュース", link: "/blog" },
      { title: "よくある質問", link: "/faq" },
      { title: "チーム", link: "/team" },
    ],
  },
  {
    className: "footer-address",
    dataAosDelay: "150",
    address: "東京都足立区千住寿町",
    email: "jsontyper@gmail.com",
  },
]

const Footer = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (validateEmail(email)) {
      setMessage("購読ありがとうございます！");
      setEmail("");
    } else {
      setMessage("正しいメールアドレスとご登録ください。");
    }
  }

  const validateEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  return (
    <>
      <div className="ak-height-125 ak-height-lg-80"></div>
      <footer className="footer style-1 footer-bg">
        <div className="container">
          <div className="ak-height-40 ak-height-lg-60"></div>
          <div
            className="footer-email"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="100"
            data-aos-offset="0"
          >
            <div
              className="background-text"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              メールマガジン
            </div>
            <div className="footer-heading-email">
              <h5 className="email-title">
              私たちのメールマガジンに登録して、独占的なオファーや割引に関する週刊更新を受け取りましょう！
              </h5>
              <div>
                <p id="ak-alert-footer">{message}</p>
                <form className="email-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="footerEmail"
                    id="footerEmail"
                    placeholder="メールアドレスを入力..."
                    className="email-input"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="submit-btn">
                    <span className="send">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                      >
                        <path
                          d="M23.0345 3.91676C23.5566 2.42362 22.157 0.976718 20.7126 1.51775L3.06022 8.11754C1.61105 8.65982 1.43579 10.704 2.76894 11.5024L8.40369 14.8748L13.4353 9.67315C13.6633 9.44555 13.9686 9.31961 14.2855 9.32246C14.6024 9.3253 14.9055 9.45671 15.1296 9.68837C15.3537 9.92004 15.4808 10.2334 15.4836 10.561C15.4863 10.8887 15.3645 11.2043 15.1444 11.4399L10.1127 16.6415L13.3761 22.4667C14.1472 23.8448 16.1246 23.6624 16.6491 22.1655L23.0345 3.91676Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="ak-height-70 ak-height-lg-30"></div>
          <div className="primary-color-border"></div>
          <div className="ak-height-35 ak-height-lg-30"></div>
          {/* ロゴ修正 */}
          <div className="footer-logo">
            <img src="/assets/img/icon/watches_logo_white.png" alt="logo" width="65" />
            <div className="ak-height-15 ak-height-lg-10"></div>
          </div>
          <div className="footer-content">
            {footerDataArray.map((item, index) => (
              <div
                key={index}
                className={item.className}
                data-aos="fade-up"
                data-aos-delay={item.dataAosDelay}
                data-aos-duration="500"
              >
                {item.phone && (
                  <>
                    <p className="desp">{item.desp}</p>
                    <div className="ak-height-35 ak-height-lg-30"></div>
                    <div className="d-flex align-items-center gap-3">
                      <div className="heartbeat-icon">
                        <Link to="tel:+81-70-1543-3733">
                          <span className="ak-heartbeat-btn">
                            <img src="/assets/img/icon/phone.svg" alt="..." />
                          </span>
                        </Link>
                      </div>
                      <span className="phone white" style={{ fontSize: "2.2rem" }}>
                        {item.phone}
                      </span>
                    </div>
                  </>
                )}
                {item.links && (
                  <div className="footer-menu">
                    <p className="menu-title">リンク一覧</p>
                    {item.links.map((item, idx) => (
                      <TextAnimation
                        key={idx}
                        link={item.link}
                        title={item.title}
                        classNamePass="menu-item white"
                      />
                    ))}
                  </div>
                )}
                {item.address && (
                  <div className="footer-address">
                    <p className="adress-title">所在地とお問い合わせ</p>
                    <Link to="#" className="location">
                      <span className="me-1">
                        <img src="/assets/img/icon/location.svg" alt="Location" />
                      </span>
                      {item.address}
                    </Link>
                    <Link to={`mailto:${item.email}`} className="email">
                      <span className="me-1">
                        <img src="/assets/img/icon/email.svg" alt="Email" />
                      </span>
                      {item.email}
                    </Link>
                    <p className="date">
                      <span className="me-1">
                        <img src="/assets/img/icon/calender.svg" alt="Calendar" />
                      </span>
                      営業日時：土日・祝日 / 10:00-18:00
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="ak-height-70 ak-height-lg-30"></div>
          <div className="primary-color-border"></div>
          <div className="copy-right">
            <p className="title  text-hover-animaiton">Copyright 2024, All Right reserved</p>
            <div className="social-icon">
              <Link to="https://www.facebook.com/">
                <img src="/assets/img/icon/facebookicon.svg" alt="..." />
              </Link>
              <Link to="https://www.linkedin.com/">
                <img src="/assets/img/icon/linkedinicon.svg" alt="..." />
              </Link>
              <Link to="https://www.x.com/">
                <img src="/assets/img/icon/twittericon.svg" alt="..." />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
