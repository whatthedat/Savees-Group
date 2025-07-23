import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import { blogPosts } from '../../data/blogPosts';
import type { BlogPost } from '../../data/blogPosts';
import { getRecentPosts } from './getRecentPosts';

// Ensure blogPosts is properly typed
const typedBlogPosts: BlogPost[] = blogPosts;
import './Home.css';

import type { Variants } from 'framer-motion';

// Animation variants with proper typing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const fadeInUp: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Animation variants with proper typing

const Home = () => {
  // Get the 3 most recent blog posts
  const recentPosts = getRecentPosts(typedBlogPosts, 3);
  // Services data
  const services = [
    { 
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'Waiters & Waitresses', 
      description: 'Professional and experienced wait staff to provide exceptional service in any dining environment.',
      features: [
        'Fine dining and casual service experience',
        'Food and beverage knowledge',
        'Customer service excellence',
        'Flexible scheduling'
      ]
    },
    { 
      image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'Kitchen Assistants', 
      description: 'Skilled kitchen support staff to keep your culinary operations running smoothly.',
      features: [
        'Food preparation assistance',
        'Kitchen maintenance',
        'Stock management',
        'Health and safety compliance'
      ]
    },
    { 
      image: '/images/services/warehouse.jpg',
      title: 'Warehouse Staff', 
      description: 'Reliable warehouse personnel for efficient inventory and logistics management.',
      features: [
        'Stock handling',
        'Inventory control',
        'Order processing',
        'Equipment operation'
      ]
    },
    { 
      image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'Kitchen Porters & Event Porters', 
      description: 'Dedicated porters for kitchen support and event operations.',
      features: [
        'Kitchen cleaning and maintenance',
        'Waste management',
        'Equipment movement',
        'Event setup and breakdown'
      ]
    },
    { 
      image: '/images/services/drivers.jpg',
      title: 'Drivers', 
      description: 'Professional drivers for various transportation needs.',
      features: [
        'Clean driving record',
        'Local and long-distance routes',
        'Delivery services',
        'Vehicle maintenance'
      ]
    },
    { 
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      title: 'Bar Backs', 
      description: 'Support staff to keep your bar operations running efficiently.',
      features: [
        'Bar setup and maintenance',
        'Glassware handling',
        'Stock replenishment',
        'Bar cleaning'
      ]
    },
    { 
      image: '/images/services/foh&boh.jpeg',
      title: 'FOH & BOH Roles', 
      description: 'Front of House and Back of House staff for complete hospitality solutions.',
      features: [
        'Hosts/Hostesses',
        'Food Runners',
        'Expeditors',
        'Dishwashers'
      ]
    }
  ];

  // Job openings section has been hidden as per request
  /*
  const jobOpenings = [
    { title: 'Senior Accountant', location: 'New York, NY', type: 'Full-time' },
    { title: 'HR Manager', location: 'Remote', type: 'Full-time' },
    { title: 'Business Analyst', location: 'Chicago, IL', type: 'Contract' },
    { title: 'Marketing Specialist', location: 'Los Angeles, CA', type: 'Part-time' }
  ];
  */
  const jobOpenings: any[] = []; // Empty array to prevent undefined errors


  const clients = ['Client1', 'Client2', 'Client3', 'Client4', 'Client5'];

  // Animation controls for hero content
  const heroControls = useAnimation();
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  useEffect(() => {
    if (isHeroInView) {
      heroControls.start('visible');
    }
  }, [heroControls, isHeroInView]);

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero" id="home" ref={heroRef}>
        <div className="container">
          <div className="hero-content-wrapper">
            <motion.div 
              className="hero-text"
              initial="hidden"
              animate={heroControls}
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.3
                  }
                }
              }}
            >
              <motion.h1 
                className="hero-title"
                variants={itemVariants}
              >
                Where <motion.span 
                  className="highlight"
                  initial={{ backgroundSize: '0% 10px' }}
                  animate={{ backgroundSize: '100% 10px' }}
                  transition={{ duration: 1, delay: 0.8, ease: 'easeInOut' }}
                >
                  Service
                </motion.span>
                Excellence 
              </motion.h1>
              <motion.p 
                className="hero-subtitle"
                variants={itemVariants}
              >
                UK’s trusted hospitality staffing partner for FOH, BOH, Events, and Logistics.
              </motion.p>
              <motion.div 
                className="hero-buttons"
                variants={itemVariants}
              >
                <Link to="/contact" className="btn btn-primary">
                  Get Started
                </Link>
                <Link to="/about" className="btn btn-outline">
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="hero-image"
              initial={{ opacity: 0, x: 40 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                transition: { 
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                } 
              }}
            >
              <img 
                src="/images/hero.jpg" 
                alt="Hero illustration" 
                className="hero-img"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section" id="about">
        <div className="container">
          <motion.div 
            className="about-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div 
              className="about-text"
              variants={fadeInUp}
            >
              <motion.h2
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                About Savees Group
              </motion.h2>
              <motion.p 
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                With over a decade of experience in the staffing industry, Savees Group has established itself as a trusted partner for businesses seeking top talent and individuals pursuing rewarding careers.
              </motion.p>
              <motion.p
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Our commitment to excellence and personalized approach sets us apart in the competitive staffing landscape.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Link to="about" className="btn btn-learn-more">
                  Learn More About Us
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="about-image"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
            >
              <img src="/images/about-us.jpg" alt="Our Team" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <motion.div 
            className="section-header text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive HR solutions designed to help your business thrive in today's competitive landscape</p>
          </motion.div>
          
          <div className="services-list">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="service-item"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: index * 0.1
                  }
                }}
                viewport={{ once: true, margin: '-50px' }}
              >
                <div className="service-image-container">
                  <motion.img 
                    src={service.image} 
                    alt={service.title}
                    className="service-image"
                    loading="lazy"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <motion.div 
                  className="service-content"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                      duration: 0.6,
                      delay: 0.2 + (index * 0.1)
                    }
                  }}
                  viewport={{ once: true }}
                >
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  {service.features && service.features.length > 0 && (
                    <ul className="service-features">
                      {service.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  )}
                  <Link to="/services" className="service-link">
                    Learn more about {service.title} <FaArrowRight />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section - Hidden as per request */}
      {false && (
      <section className="jobs-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Current Opportunities</h2>
            <p>Join our growing team of professionals</p>
          </motion.div>
          
          <motion.div 
            className="jobs-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {jobOpenings.map((job, index) => (
              <motion.div 
                key={index} 
                className="job-card"
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
                  transition: { duration: 0.3 }
                }}
              >
                <h3>{job.title}</h3>
                <p className="job-location">{job.location} • {job.type}</p>
                <Link to="/careers" className="job-link">
                  View Details <motion.span 
                    animate={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/careers" className="btn btn-outline">
              View All Openings
            </Link>
          </motion.div>
        </div>
      </section>
      )}

      {/* Clients Section */}
      <section className="clients-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Trusted By Leading Companies</h2>
          </motion.div>
          
          <motion.div 
            className="clients-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {clients.map((client, index) => (
              <motion.div 
                key={index}
                className="client-logo"
                whileHover={{ 
                  scale: 1.05,
                  filter: 'grayscale(0%) opacity(1)',
                  transition: { duration: 0.3 }
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ 
                  scale: 1, 
                  opacity: 0.7,
                  transition: { 
                    delay: index * 0.1,
                    type: 'spring',
                    damping: 10
                  }
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <img 
                  src={`/images/clients/${client.toLowerCase()}.png`} 
                  alt={client}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;charset=UTF-8,' + 
                      encodeURIComponent(
                        `<svg width="150" height="80" viewBox="0 0 150 80" xmlns="http://www.w3.org/2000/svg">
                          <rect width="150" height="80" fill="%23f5f5f5"/>
                          <text x="50%" y="50%" font-family="Arial" font-size="12" text-anchor="middle" dominant-baseline="middle" fill="%23999">
                            ${client} Logo
                          </text>
                        </svg>`
                      );
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industry Experience Section */}
      <section className="experience-section">
        <div className="container">
          <motion.div 
            className="experience-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {[
              { value: '30+', label: 'Years Experience' },
              { value: '200+', label: 'Clients Served' },
              { value: '1000+', label: 'Professionals Placed' },
              { value: '93%', label: 'Retention Rate' }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                className="experience-item"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.h3
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ 
                    scale: 1, 
                    opacity: 1,
                    transition: { 
                      delay: index * 0.1,
                      type: 'spring',
                      stiffness: 100
                    }
                  }}
                  viewport={{ once: true }}
                >
                  {item.value}
                </motion.h3>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ 
                    y: 0, 
                    opacity: 0.9,
                    transition: { 
                      delay: 0.3 + (index * 0.1),
                      duration: 0.6
                    }
                  }}
                  viewport={{ once: true }}
                >
                  {item.label}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-light" id="blog">
        <div className="container">
          <motion.div 
            className="section-header text-center mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Latest From Our Blog</h2>
            <p className="section-subtitle">Insights, news, and updates from the world of hospitality staffing</p>
          </motion.div>
          
          <div className="blog-grid">
            {recentPosts.map((post, index) => (
              <motion.article 
                key={post.id}
                className="blog-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
              >
                <Link to={`/blog/${post.slug}`} className="blog-card-link">
                  <div className="blog-card-image">
                    <img src={post.image} alt={post.title} loading="lazy" />
                    <span className="blog-card-category">{post.category}</span>
                  </div>
                  <div className="blog-card-content">
                    <div className="blog-card-meta">
                      <span className="blog-card-date">
                        <FaCalendarAlt /> {post.date}
                      </span>
                      <span className="blog-card-read-time">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">
                      {post.excerpt.length > 120 
                        ? `${post.excerpt.substring(0, 120)}...` 
                        : post.excerpt}
                    </p>
                    <div className="blog-card-footer">
                      <span className="read-more">
                        Read More <FaArrowRight className="arrow-icon" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="contact">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8,
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }}
            viewport={{ once: true }}
          >
            <motion.h2
              variants={itemVariants}
            >
              Ready to Transform Your Workforce?
            </motion.h2>
            <motion.p
              variants={itemVariants}
            >
              Get in touch with our experts today to discuss your staffing needs.
            </motion.p>
            <motion.div 
              className="cta-buttons"
              variants={itemVariants}
            >
              <Link to="/contact" className="btn btn-primary">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.span>
              </Link>
              <Link to="/get-started" className="btn btn-outline">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;
