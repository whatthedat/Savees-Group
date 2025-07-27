import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaGlobe, FaHandshake, FaUsers, FaBullseye, FaLightbulb, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './About.css';

const About = () => {
  const features = [
    {
      icon: <FaCheckCircle className="feature-icon" />,
      title: 'Proven Quality',
      description: 'Consistently delivering exceptional service with a focus on excellence and attention to detail.'
    },
    {
      icon: <FaUsers className="feature-icon" />,
      title: 'Expert Team',
      description: 'Our team of professionals brings years of industry experience and specialized knowledge.'
    },
    {
      icon: <FaHandshake className="feature-icon" />,
      title: 'Trusted Partner',
      description: 'Building long-term relationships based on trust, reliability, and mutual success.'
    },
    {
      icon: <FaGlobe className="feature-icon" />,
      title: 'Global Reach',
      description: 'Bridging Kerala and the UK with international standards and local expertise.'
    }
  ];

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About Savees Group</h1>
            <p>Bridging excellence between Kerala and the UK</p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="about-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Who We Are</h2>
            <div className="section-divider"></div>
          </motion.div>
          
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                Founded with deep roots in Kerala, India, Savees Group has grown to establish a strong presence in the United Kingdom. 
                Our journey began with a simple vision: to bridge the gap between exceptional talent and outstanding opportunities 
                across international borders.
              </p>
              <p>
                Today, we stand as a testament to the power of dedication, integrity, and cross-cultural collaboration. 
                Our dual heritage allows us to bring together the best of both worlds - the rich work ethic and technical 
                expertise from Kerala with the professional standards and global perspective of the UK.
              </p>
            </motion.div>
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Our Team" 
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="features-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Why Choose Us</h2>
            <div className="section-divider"></div>
            <p>We're committed to delivering exceptional value through our unique strengths</p>
          </motion.div>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="feature-icon-container">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <motion.div 
              className="mission-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mission-icon">
                <FaBullseye />
              </div>
              <h3>Our Vision</h3>
              <p>To be the most trusted bridge between global talent and opportunities, setting new standards of excellence in international staffing and business solutions.</p>
            </motion.div>
            
            <motion.div 
              className="mission-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mission-icon">
                <FaLightbulb />
              </div>
              <h3>Our Mission</h3>
              <p>To connect exceptional talent with outstanding opportunities through innovative solutions, cultural understanding, and unwavering commitment to quality and integrity.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Connect CTA Section */}
      <section className="connect-section">
        <div className="container">
          <motion.div 
            className="connect-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Start Your Journey With Us?</h2>
            <p>Get in touch with our team to discuss how we can help you achieve your goals.</p>
            <div className="connect-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/services" className="btn btn-outline">
                Our Services
              </Link>
            </div>
            
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Our Locations</h4>
                  <p>Kochi, Kerala, India</p>
                  <p>London, United Kingdom</p>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Call Us</h4>
                  <p>+44 123 456 7890 (UK)</p>
                  <p>+91 123 456 7890 (IN)</p>
                </div>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email Us</h4>
                  <p>info@saveesgroup.com</p>
                  <p>careers@saveesgroup.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
