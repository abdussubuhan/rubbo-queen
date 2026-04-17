import { useEffect } from 'react';
import { Target, Users, Shield } from 'lucide-react';
import './About.css';

export default function About() {
  useEffect(() => {
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
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1 className="reveal">About Us</h1>
          <p className="reveal" style={{ transitionDelay: '0.2s' }}>The legacy behind the leading plywood supplier in Kerala.</p>
        </div>
      </div>

      <section className="about-content section-padding container">
        <div className="about-grid">
          <div className="about-text reveal">
            <h2 className="text-primary">Our Story</h2>
            <p>
              Located in the heart of Kerala at Rubber Park, Airapuram, Rubbo Queen Wood Products Pvt Ltd has grown to become a cornerstone in the plywood manufacturing industry. With a steadfast commitment to high-quality timber and state-of-the-art manufacturing processes, we deliver products that stand the test of time.
            </p>
            <p>
              Our operations are built on a foundation of integrity and craftsmanship. We source premium raw materials and employ rigorous quality control to ensure every sheet of plywood meets international standards.
            </p>
          </div>
          <div className="about-image-wrapper reveal" style={{ transitionDelay: '0.2s' }}>
             <img src="/images/products.png" alt="Rubbo Queen Factory" className="about-image" />
          </div>
        </div>
      </section>

      <section className="core-values bg-light section-padding">
        <div className="container">
          <div className="section-header text-center reveal">
            <h2>Our Core Values</h2>
          </div>
          <div className="values-grid">
            <div className="value-card reveal" style={{ transitionDelay: '0.1s' }}>
              <Shield size={36} className="value-icon" />
              <h3>Uncompromising Quality</h3>
              <p>We never cut corners. Quality is embedded in every layer of our plywood.</p>
            </div>
            <div className="value-card reveal" style={{ transitionDelay: '0.3s' }}>
              <Users size={36} className="value-icon" />
              <h3>Customer Centricity</h3>
              <p>With an exceptional 4.4 rating, our focus remains on delivering exactly what you need.</p>
            </div>
            <div className="value-card reveal" style={{ transitionDelay: '0.5s' }}>
              <Target size={36} className="value-icon" />
              <h3>Innovation</h3>
              <p>Adopting the latest technology to ensure precision, durability, and a stunning finish.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
