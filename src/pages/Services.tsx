import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaUserTie, FaCar, FaBroom, FaGlassCheers, FaConciergeBell, FaUserCheck, FaArrowRight } from 'react-icons/fa';
import './Services.css';

type Service = {
  id: number;
  title: string;
  icon: JSX.Element;
  description: string;
  details: string[];
  image: string;
  category: 'boh' | 'foh';
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'boh' | 'foh'>('all');

  const services: Service[] = [
    {
      id: 1,
      title: 'Chefs & Cooks',
      icon: <FaUtensils className="service-icon" />,
      description: 'Professional chefs and cooks for all types of culinary needs',
      details: [
        'Head Chefs',
        'Sous Chefs',
        'Line Cooks',
        'Pastry Chefs',
        'Commis Chefs'
      ],
      image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'boh'
    },
    {
      id: 2,
      title: 'Wait Staff',
      icon: <FaUserTie className="service-icon" />,
      description: 'Experienced wait staff for all types of events and establishments',
      details: [
        'Waiters/Waitresses',
        'Bartenders',
        'Baristas',
        'Sommeliers',
        'Food Runners'
      ],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'foh'
    },
    {
      id: 3,
      title: 'Drivers',
      icon: <FaCar className="service-icon" />,
      description: 'Reliable drivers for delivery and transportation services',
      details: [
        'Delivery Drivers',
        'Chauffeurs',
        'Van Drivers',
        'Heavy Goods Drivers',
        'Couriers'
      ],
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'boh'
    },
    {
      id: 4,
      title: 'Porters & Cleaners',
      icon: <FaBroom className="service-icon" />,
      description: 'Dedicated staff for cleaning and maintenance',
      details: [
        'Porter',
        'Housekeeping',
        'Kitchen Porters',
        'Cleaners',
        'Maintenance Staff'
      ],
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'boh'
    },
    {
      id: 5,
      title: 'Bar Staff',
      icon: <FaGlassCheers className="service-icon" />,
      description: 'Skilled bar staff for all types of venues',
      details: [
        'Bartenders',
        'Barbacks',
        'Mixologists',
        'Bar Managers',
        'Cocktail Servers'
      ],
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'foh'
    },
    {
      id: 6,
      title: 'Event Staff',
      icon: <FaConciergeBell className="service-icon" />,
      description: 'Professional staff for all types of events',
      details: [
        'Event Managers',
        'Hosts/Hostesses',
        'Catering Staff',
        'Event Coordinators',
        'Security Personnel'
      ],
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'foh'
    },
    {
      id: 7,
      title: 'Front Desk & Reception',
      icon: <FaUserCheck className="service-icon" />,
      description: 'Professional front desk and reception staff',
      details: [
        'Receptionists',
        'Concierge',
        'Front Office Staff',
        'Guest Relations',
        'Reservation Agents'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'foh'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  const openServiceModal = (service: Service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeServiceModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Services</h1>
            <p>Comprehensive staffing solutions for the hospitality industry</p>
          </motion.div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="services-section">
        <div className="container">
          <div className="services-tabs">
            <button 
              className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              All Services
            </button>
            <button 
              className={`tab-btn ${activeTab === 'boh' ? 'active' : ''}`}
              onClick={() => setActiveTab('boh')}
            >
              Back of House
            </button>
            <button 
              className={`tab-btn ${activeTab === 'foh' ? 'active' : ''}`}
              onClick={() => setActiveTab('foh')}
            >
              Front of House
            </button>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {filteredServices.map((service) => (
              <motion.div 
                key={service.id}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
                onClick={() => openServiceModal(service)}
              >
                <div className="service-card-inner">
                  <div className="service-icon-container">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="service-meta">
                    <span className={`service-category ${service.category}`}>
                      {service.category === 'boh' ? 'Back of House' : 'Front of House'}
                    </span>
                    <span className="learn-more">
                      Learn more <FaArrowRight />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="service-modal-overlay" onClick={closeServiceModal}>
          <motion.div 
            className="service-modal"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={closeServiceModal}>
              &times;
            </button>
            <div className="service-modal-content">
              <div className="service-modal-image">
                <img src={selectedService.image} alt={selectedService.title} />
              </div>
              <div className="service-modal-details">
                <h2>{selectedService.title}</h2>
                <p className="service-description">{selectedService.description}</p>
                
                <div className="service-positions">
                  <h3>Available Positions:</h3>
                  <ul>
                    {selectedService.details.map((item, index) => (
                      <li key={index}>
                        <FaArrowRight className="list-icon" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="service-cta">
                  <button className="btn btn-primary">
                    Request This Service
                  </button>
                  <button className="btn btn-outline" onClick={closeServiceModal}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
};

export default Services;
