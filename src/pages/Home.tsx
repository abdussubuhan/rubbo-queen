import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, TreePine, Award } from 'lucide-react';
import { useEffect } from 'react';
import './Home.css';

export default function Home() {
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
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <span className="hero-subtitle reveal" style={{ transitionDelay: '0.2s' }}>Premium Kerala Plywood</span>
          <h1 className="hero-title reveal" style={{ transitionDelay: '0.4s' }}>Crafting Strength. <br/>Defining Elegance.</h1>
          <p className="hero-desc reveal" style={{ transitionDelay: '0.6s' }}>
            Rubbo Queen Wood Products delivers uncompromising quality for your most demanding architectural and interior projects.
          </p>
          <div className="hero-actions reveal" style={{ transitionDelay: '0.8s' }}>
            <Link to="/products" className="btn">Explore Products</Link>
            <Link to="/contact" className="btn btn-outline hero-btn-outline">Get a Quote</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section-padding container">
        <div className="section-header text-center reveal">
          <h2>Why Choose Rubbo Queen?</h2>
          <p style={{marginTop: '0.5rem', opacity: 0.8}}>Excellence manufactured at Rubber Park, Airapuram.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card reveal" style={{ transitionDelay: '0.1s' }}>
            <ShieldCheck size={40} className="feature-icon" />
            <h3>Unmatched Durability</h3>
            <p>Our plywood undergoes rigorous testing to withstand time, moisture, and impact.</p>
          </div>
          <div className="feature-card reveal" style={{ transitionDelay: '0.3s' }}>
            <TreePine size={40} className="feature-icon" />
            <h3>Premium Wood</h3>
            <p>Sourced from the finest timber, ensuring a flawless finish and robust core.</p>
          </div>
          <div className="feature-card reveal" style={{ transitionDelay: '0.5s' }}>
            <Award size={40} className="feature-icon" />
            <h3>Certified Quality</h3>
            <p>IS certified and highly rated (4.4 stars) by our trusted clients across Kerala.</p>
          </div>
        </div>
      </section>

      {/* Showcase Snippet */}
      <section className="showcase">
        <div className="showcase-content container">
          <div className="showcase-text reveal">
            <h2>The Foundation of Luxury Interiors</h2>
            <p>From MR Grade for elegant living spaces to BWP Marine Grade for demanding environments, our versatile range is the architect's first choice.</p>
            <Link to="/products" className="btn" style={{ marginTop: '1.5rem' }}>View Collection <ArrowRight size={18}/></Link>
          </div>
          <div className="showcase-img-container reveal" style={{ transitionDelay: '0.3s' }}>
             <img src="/images/products.png" alt="Premium Plywood" className="showcase-image" />
          </div>
        </div>
      </section>
    </div>
  );
}
