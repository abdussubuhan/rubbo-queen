import { useEffect } from 'react';
import { Check } from 'lucide-react';
import './Products.css';

export default function Products() {
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

  const products = [
    {
      id: "mr-grade",
      title: "MR Grade Plywood",
      subtitle: "Moisture Resistant",
      desc: "Designed for elegant indoor applications, offering exceptional resistance to moisture and unmatched durability for interior furnishings.",
      features: ["Premium smooth finish", "Termite & borer resistant", "High load-bearing capacity", "Ideal for home & office furniture"]
    },
    {
      id: "bwr-grade",
      title: "BWR Grade Plywood",
      subtitle: "Boiling Water Resistant",
      desc: "Engineered to withstand prolonged exposure to water, making it perfect for custom kitchens and bathrooms.",
      features: ["Bonded with superior synthetic resin", "Superior core strength", "Withstands cyclic changes in weather", "Excellent for semi-outdoor applications"]
    },
    {
      id: "bwp-marine",
      title: "BWP Marine Grade Plywood",
      subtitle: "Boiling Water Proof",
      desc: "The ultimate choice for demanding environments. BWP Marine Grade is completely waterproof and built for structural integrity.",
      features: ["100% waterproof", "Resists severe weather conditions", "Excellent structural strength", "Ideal for marine applications & heavy-duty outdoor use"]
    }
  ];

  return (
    <div className="products-page">
      <div className="page-header">
        <div className="container">
          <h1 className="reveal">Our Premium Products</h1>
          <p className="reveal" style={{ transitionDelay: '0.2s' }}>Engineered for strength. Crafted for elegance.</p>
        </div>
      </div>

      <section className="products-list section-padding container">
        {products.map((product, index) => (
          <div className="product-row reveal" key={product.id}>
            <div className={`product-info ${index % 2 !== 0 ? 'order-2' : ''}`}>
              <span className="product-subtitle">{product.subtitle}</span>
              <h2>{product.title}</h2>
              <p>{product.desc}</p>
              <ul className="product-features">
                {product.features.map((feature, i) => (
                  <li key={i}>
                    <Check size={18} className="check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`product-image-container ${index % 2 !== 0 ? 'order-1' : ''}`}>
              {/* Reuse proxy generated images for luxurious feel */}
              <img src="/images/products.png" alt={product.title} className="product-image" />
            </div>
          </div>
        ))}
      </section>

      <section className="cta-section text-center reveal">
        <div className="container">
          <h2>Need Custom Sizing?</h2>
          <p>We provide custom dimensions and bulk orders for architectural projects.</p>
          <a href="/contact" className="btn" style={{ marginTop: '2rem' }}>Contact Sales Team</a>
        </div>
      </section>
    </div>
  );
}
