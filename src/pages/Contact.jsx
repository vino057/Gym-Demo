
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Send,
} from 'lucide-react';
import '../styles/contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace with your actual WhatsApp number.
    // Country code included, without + or spaces.
    const whatsappNumber = '91XXXXXXXXXX';

    const message = `
Hello IRON CORE FITNESS!

New Website Enquiry

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
    `;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <div className="container">
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            WE ARE HERE FOR YOU
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            GET IN <span>TOUCH.</span>
          </motion.h1>

          <p>
            Have questions about membership or training?
            Let's start your fitness journey together.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-section section-padding">
        <div className="container">
          <div className="contact-layout">

            {/* CONTACT INFORMATION */}
            <motion.div
              className="contact-info"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="section-label">CONTACT INFORMATION</p>

              <h2 className="section-heading">
                LET'S TALK <span className="gold-text">FITNESS.</span>
              </h2>

              <p className="contact-description">
                Our team is ready to help you choose the right
                membership and answer your questions.
              </p>

              <div className="contact-details">

                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3>TEYNAMPET, CHENNAI</h3>
                    <p>Your Gym Address, Chennai</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3>PHONE NUMBER</h3>
                    <p>+91 9791456999</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3>EMAIL ADDRESS</h3>
                    <p>vinorajendran057@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3>OPENING HOURS</h3>
                    <p>Monday - Saturday: 5 AM - 10 PM</p>
                  </div>
                </div>

              </div>

              <div className="contact-social">
                <span>FOLLOW OUR JOURNEY</span>
                <a href="#" aria-label="Instagram">IG</a>
                <a href="#" aria-label="Facebook">FB</a>
              </div>
            </motion.div>

            {/* CONTACT FORM */}
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="contact-form-heading">
                <p className="section-label">SEND US A MESSAGE</p>
                <h2>LET'S CONNECT.</h2>
                <p>Fill out the form and tell us how we can help.</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="contact-form-grid">

                  <div className="form-group">
                    <label htmlFor="contact-name">FULL NAME</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">EMAIL ADDRESS</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone">PHONE NUMBER</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-subject">SUBJECT</label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      placeholder="How can we help?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="contact-message">YOUR MESSAGE</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows="5"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                </div>

                <button type="submit" className="contact-submit">
                  SEND MESSAGE <Send size={17} />
                </button>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section className="contact-map">
        <div className="contact-map-content">
          <MapPin size={32} />
          <h2>VISIT OUR GYM</h2>
          <p>Find us on Google Maps.</p>

          <a
            href="https://www.google.com/maps/place/EFFEVERSE+GAMING+ENTERPRISE/@13.0392583,80.2460783,18.86z/data=!4m6!3m5!1s0x3a5267c373aa6eed:0xb02616eead51f934!8m2!3d13.0386849!4d80.2465312!16s%2Fg%2F11y3wwlzjh"
            target="_blank"
            rel="noopener noreferrer"
          >
            OPEN GOOGLE MAPS <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

    </main>
  );
}

export default Contact;
