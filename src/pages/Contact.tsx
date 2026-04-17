import { useEffect } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1 className="reveal">Contact Us</h1>
          <p className="reveal" style={{ transitionDelay: '0.2s' }}>Let's discuss your next project.</p>
        </div>
      </div>

      <section className="contact-section section-padding container">
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h2>Get in Touch</h2>
            <p className="contact-desc">
              Whether you're an architect, builder, or homeowner, our team is ready to assist you in selecting the perfect premium plywood for your needs.
            </p>
            
            <div className="info-list">
              <div className="info-item">
                <div className="info-icon-container">
                  <MapPin size={24} className="info-icon" />
                </div>
                <div>
                  <h3>Our Factory</h3>
                  <p>R Q wood, Rubber Park<br/>Airapuram, Kerala, IN</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon-container">
                  <Phone size={24} className="info-icon" />
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>+91 97459 23632</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon-container">
                  <Clock size={24} className="info-icon" />
                </div>
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Saturday<br/>9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container reveal" style={{ transitionDelay: '0.2s' }}>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" placeholder="+91 98765 43210" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="Tell us about your project requirements..." required></textarea>
              </div>
              <button type="submit" className="btn submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Map Embedded */}
      <section className="map-section reveal">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15714.288288597014!2d76.4952!3d10.0526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e15d862f91bf%3A0xe74b88d3e6919db1!2sRubbo%20Queen%20Wood%20Products%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="500" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Rubbo Queen Location"
        ></iframe>
      </section>
    </div>
  );
}
