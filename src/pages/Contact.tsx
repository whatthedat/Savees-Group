import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaCheckCircle, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const serviceOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'temporary', label: 'Temporary Staffing' },
    { value: 'permanent', label: 'Permanent Placement' },
    { value: 'event', label: 'Event Staffing' },
    { value: 'training', label: 'Staff Training' },
    { value: 'other', label: 'Other' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Get EmailJS environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    // Validate environment variables
    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS environment variables are not properly configured');
      alert('Error: Email service configuration is missing. Please contact support.');
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: serviceOptions.find(s => s.value === formData.service)?.label || formData.service,
        message: formData.message,
        to_email: 'info@saveesgroup.com', // Primary receiving email
        reply_to: formData.email,
        date: new Date().toLocaleString(),
      };
      
      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      
      // If file is attached, send a separate email with the file
      if (selectedFile) {
        const fileTemplateParams = {
          ...templateParams,
          subject: `File attachment from ${formData.name} - ${formData.company}`,
          notes: 'A file was attached to this contact form submission.',
        };
        
        // Create a new form data object for the file
        const fileFormData = new FormData();
        fileFormData.append('file', selectedFile);
        fileFormData.append('service_id', serviceId);
        fileFormData.append('template_id', templateId);
        fileFormData.append('user_id', publicKey);
        fileFormData.append('template_params', JSON.stringify(fileTemplateParams));
        
        // Send file via EmailJS
        await emailjs.sendForm(
          serviceId,
          templateId,
          fileFormData as any, // Type assertion needed for FormData
          publicKey
        );
      }
      
      // Reset form on success
      setIsSubmitted(true);
      setFormData({ 
        name: '', 
        email: '', 
        phone: '',
        company: '',
        service: 'general',
        message: '' 
      });
      setSelectedFile(null);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div 
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Let's Work Together</h1>
            <p>Looking for exceptional hospitality staff or career opportunities? Our team is ready to assist you 24/7.</p>
          </motion.div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="get-in-touch">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Get in Touch</h2>
            <p>Our dedicated team is here to help you find the perfect staffing solutions for your hospitality needs. Reach out to us through any of these channels.</p>
          </motion.div>
          
          <div className="contact-methods-grid">
            <motion.div 
              className="contact-method"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="contact-method-content">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h3>Our Location</h3>
                  <p>22A Queens Parade</p>
                  <p>Hanger Lane</p>
                  <p>W5 3HU</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="contact-method"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="contact-method-content">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div>
                  <h3>Phone Number</h3>
                  <p><a href="tel:+447543538033">+44 754 353 8033</a></p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="contact-method"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="contact-method-content">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h3>Email Us</h3>
                  <p><a href="mailto:info@saveesgroup.com">info@saveesgroup.com</a></p>
                  <p><a href="mailto:saveesgroupltd@gmail.com">saveesgroupltd@gmail.com</a></p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Send Us a Message Section */}
      <section className="send-message">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Send Us a Message</h2>
            <p>Have questions or ready to get started? Fill out the form below and we'll get back to you promptly.</p>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {isSubmitted ? (
                <div className="form-success">
                  <FaCheckCircle className="success-icon" />
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you soon.</p>
                  <button 
                    className="btn-secondary"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    {serviceOptions.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                  
                  <div className="form-group">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your staffing needs or job requirements..."
                      rows={5}
                      required
                    ></textarea>
                  </div>
                  
                  <div className="form-group file-upload">
                    <label htmlFor="file">Upload CV/Job Description (Optional)</label>
                    <div className="file-input-container">
                      <input
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                        className="file-input"
                        accept=".pdf,.doc,.docx"
                      />
                      <label htmlFor="file" className="file-input-label">
                        {selectedFile ? selectedFile.name : 'Choose file...'}
                      </label>
                    </div>
                    <p className="file-hint">Max file size: 5MB. Accepted formats: PDF, DOC, DOCX</p>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </motion.div>
        </div>
      </section>
      
      {/* Business Hours & Social Media */}
      <section className="additional-info">
        <div className="container">
          <div className="info-grid">
            <motion.div 
              className="business-hours"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
            
            </motion.div>
            
            <motion.div 
              className="social-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>Follow Our Journey</h3>
              <p>Stay updated with our latest news and job opportunities</p>
              <div className="social-links">
                <a href="https://linkedin.com/company/savees-group" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaLinkedin />
                  <span>LinkedIn</span>
                </a>
                <a href="https://instagram.com/saveesgroup" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaInstagram />
                  <span>Instagram</span>
                </a>
                <a href="https://facebook.com/saveesgroup" target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaFacebook />
                  <span>Facebook</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.540423056448!2d-0.12775868422990945!3d51.50735097963254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3b0a2d3b0d%3A0x8f2b9b3b9b8b8b8b8!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            title="Our Location on Map"
          />
        </div>
      </section>
      
      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/447543538033" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <i className="fab fa-whatsapp" />
      </a>
    </main>
  );
};

export default Contact;
