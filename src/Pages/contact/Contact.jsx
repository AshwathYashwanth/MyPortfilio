import { RiMapPin2Fill } from "react-icons/ri";
import { RiUser3Line } from "react-icons/ri";
import { RiMailLine } from "react-icons/ri";
import { RiBook2Line } from "react-icons/ri";
import { RiSendPlaneLine } from "react-icons/ri";
import './contact.css'
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [feedbackMessage, setFeedBackMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const handlerChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if(!formData.name || !formData.email || !formData.subject || !formData.message) {
      setMessageColor('color-red');
      setFeedBackMessage('Write all the input fields');
      setTimeout(() => setFeedBackMessage(''), 3000)
      return;
    }

    emailjs
      .send('service_hwn25gm', 'template_idk5w15', formData, 'QYbiacBFocC7hMg6w')
      .then(
        () => {
          setMessageColor('color-first');
          setFeedBackMessage('Message Sent');

          setTimeout(() => setFeedBackMessage(''), 5000)

          setFormData({name: '', email: '', subject: '', message: ''});
        },
        (error) => {
          alert('OOPs! SOMETHING WENT WRONG...', error)
        },
      );
  };

  return (
    <section className="contact section">
      <h2 className="section-title">Contact <span>ME</span>
      </h2>
      <div className="contact-container container grid">
        <div className="contact-content grid">
          <div className="contact-card">
            <span className="contact-icon">
            <RiMapPin2Fill />
            </span>
            <div>
              <h3 className="contact-title">Address</h3>
              <div className="contact-data">India, Karnataka, Bangalore</div>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
            <RiUser3Line />
            </span>
            <div>
              <h3 className="contact-title">Freelance</h3>
              <div className="contact-data">Available Right Now</div>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
            <RiMailLine />
            </span>
            <div>
              <h3 className="contact-title">Email</h3>
              <p className="contact-data">yashwanthashwath@gmail.com</p>
            </div>
          </div>

          <div className="contact-card">
            <span className="contact-icon">
            <RiBook2Line />
            </span>
            <div>
              <h3 className="contact-title">Phone</h3>
              <p className="contact-data">+91 7676475325</p>
            </div>
          </div>
        </div>
        <form action="" className="contact-form grid" onSubmit={sendEmail}>
            <div className="contact-form-group grid">
              <div className="contact-form-div">
                <label htmlFor="" className="contact-form-label">
                  Your full Name <b>*</b>
                </label>

                <input type="text" name="name" onChange={handlerChange} value={formData.name} className="contact-form-input" />
              </div>

              <div className="contact-form-div">
                <label htmlFor="" className="contact-form-label">
                  Your Email Address <b>*</b>
                </label>

                <input type="email" name="email" onChange={handlerChange} value={formData.email} className="contact-form-input" />
              </div>
            </div>
            <div className="contact-form-div">
                <label htmlFor="" className="contact-form-label">
                  Your Subject <b>*</b>
                </label>

                <input type="text" name="subject" onChange={handlerChange} value={formData.subject} className="contact-form-input" />
              </div>

              <div className="contact-form-div">
                <label htmlFor="" className="contact-form-label">
                  Your Message <b>*</b>
                </label>
                <textarea name="message" onChange={handlerChange} value={formData.message} className="contact-form-input contact-form-area"></textarea>
              </div>

              <div className="contact-button">
                <button className="button">Send Message

                  <span className="button-icon">
                    <RiSendPlaneLine/>
                  </span>
                </button>
              </div>
              {feedbackMessage && (
                <p className={`contact-message ${messageColor}`}>
                  {feedbackMessage}
                </p>
              )}
          </form>
      </div>
    </section>
  )
  }
  
  export default Contact