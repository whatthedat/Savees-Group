import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaMapMarkerAlt, FaBriefcase, FaMoneyBillWave, FaClock, FaArrowRight, FaFilter, FaTimes } from 'react-icons/fa';
import './Jobs.css';

type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Temporary' | 'Internship';
type ExperienceLevel = 'Entry Level' | 'Mid Level' | 'Senior Level' | 'Executive';

interface Job {
  id: number;
  title: string;
  location: string;
  type: JobType;
  experience: ExperienceLevel;
  salary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  posted: string;
  department: string;
  isFeatured?: boolean;
}

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [jobTypeFilter, setJobTypeFilter] = useState<JobType | ''>('');
  const [experienceFilter, setExperienceFilter] = useState<ExperienceLevel | ''>('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showJobModal, setShowJobModal] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  // Sample job data
  const jobs: Job[] = [
    {
      id: 1,
      title: 'Head Chef',
      location: 'London',
      type: 'Full-time',
      experience: 'Senior Level',
      salary: '£45,000 - £55,000',
      description: 'We are looking for an experienced Head Chef to lead our kitchen team in a high-end restaurant environment.',
      responsibilities: [
        'Oversee all kitchen operations',
        'Create and update menus',
        'Manage kitchen staff and schedules',
        'Ensure food quality and safety standards',
        'Control food and labor costs'
      ],
      requirements: [
        'Proven experience as a Head Chef',
        'Culinary school diploma or equivalent',
        'Strong leadership and communication skills',
        'Knowledge of food safety regulations',
        'Creative approach to menu development'
      ],
      posted: '2 days ago',
      department: 'Kitchen',
      isFeatured: true
    },
    {
      id: 2,
      title: 'Restaurant Manager',
      location: 'Manchester',
      type: 'Full-time',
      experience: 'Mid Level',
      salary: '£35,000 - £45,000',
      description: 'Join our team as a Restaurant Manager and help us deliver exceptional dining experiences.',
      responsibilities: [
        'Manage daily restaurant operations',
        'Train and supervise staff',
        'Handle customer complaints and feedback',
        'Monitor financial performance',
        'Ensure compliance with health and safety regulations'
      ],
      requirements: [
        'Proven work experience as a Restaurant Manager',
        'Strong leadership and interpersonal skills',
        'Excellent customer service skills',
        'Knowledge of restaurant management software',
        'Flexibility to work in shifts'
      ],
      posted: '1 week ago',
      department: 'Management'
    },
    {
      id: 3,
      title: 'Sous Chef',
      location: 'Birmingham',
      type: 'Full-time',
      experience: 'Mid Level',
      salary: '£30,000 - £38,000',
      description: 'We are seeking a talented Sous Chef to assist in our busy kitchen operations.',
      responsibilities: [
        'Assist Head Chef in menu planning',
        'Supervise kitchen staff',
        'Ensure food preparation meets quality standards',
        'Maintain kitchen inventory',
        'Follow food safety standards'
      ],
      requirements: [
        'Proven experience as a Sous Chef',
        'Knowledge of various cooking methods',
        'Leadership and communication skills',
        'Ability to work in a fast-paced environment',
        'Culinary school diploma preferred'
      ],
      posted: '3 days ago',
      department: 'Kitchen'
    },
    {
      id: 4,
      title: 'Waiter/Waitress',
      location: 'London',
      type: 'Part-time',
      experience: 'Entry Level',
      salary: '£10 - £12 per hour',
      description: 'Join our front-of-house team as a Waiter/Waitress and provide excellent customer service.',
      responsibilities: [
        'Take food and drink orders',
        'Serve food and beverages',
        'Provide menu recommendations',
        'Process payments',
        'Ensure customer satisfaction'
      ],
      requirements: [
        'Previous experience in hospitality preferred',
        'Excellent communication skills',
        'Friendly and professional demeanor',
        'Ability to work in a team',
        'Flexible schedule'
      ],
      posted: '5 days ago',
      department: 'Front of House'
    },
    {
      id: 5,
      title: 'Bartender',
      location: 'Edinburgh',
      type: 'Part-time',
      experience: 'Entry Level',
      salary: '£9 - £11 per hour',
      description: 'We are looking for a skilled Bartender to create and serve alcoholic and non-alcoholic beverages.',
      responsibilities: [
        'Prepare and serve drinks',
        'Check customers\' identification',
        'Restock and replenish bar inventory',
        'Maintain clean bar area',
        'Provide excellent customer service'
      ],
      requirements: [
        'Previous bartending experience',
        'Knowledge of mixing drinks and bar equipment',
        'Ability to handle cash and process payments',
        'Excellent communication skills',
        'Knowledge of responsible alcohol service'
      ],
      posted: '1 week ago',
      department: 'Bar'
    },
    {
      id: 6,
      title: 'Pastry Chef',
      location: 'Bristol',
      type: 'Full-time',
      experience: 'Mid Level',
      salary: '£28,000 - £35,000',
      description: 'Join our team as a Pastry Chef and create delicious desserts and baked goods.',
      responsibilities: [
        'Prepare pastries, cakes, and desserts',
        'Develop new dessert recipes',
        'Decorate and present pastries',
        'Monitor stock and order supplies',
        'Ensure food safety standards'
      ],
      requirements: [
        'Proven experience as a Pastry Chef',
        'Creativity in baking and decorating',
        'Knowledge of baking techniques',
        'Attention to detail',
        'Culinary school diploma preferred'
      ],
      posted: '2 weeks ago',
      department: 'Kitchen'
    }
  ];

  // Filter jobs based on search and filters
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesJobType = !jobTypeFilter || job.type === jobTypeFilter;
    const matchesExperience = !experienceFilter || job.experience === experienceFilter;

    return matchesSearch && matchesLocation && matchesJobType && matchesExperience;
  });

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
    setShowJobModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeJobModal = () => {
    setShowJobModal(false);
    document.body.style.overflow = 'auto';
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle application submission
    if (resumeFile) {
      alert(`Application submitted for ${selectedJob?.title} position with ${resumeFile.name}`);
      setShowJobModal(false);
      setResumeFile(null);
    } else {
      alert('Please upload your resume');
    }
  };

  const clearFilters = () => {
    setLocationFilter('');
    setJobTypeFilter('');
    setExperienceFilter('');
    setSearchTerm('');
  };

  return (
    <main className="jobs-page">
      {/* Hero Section */}
      <section className="jobs-hero">
        <div className="container">
          <motion.div 
            className="jobs-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Join Our Team</h1>
            <p>Find your next career opportunity with Savees Group</p>
            
            {/* Search Bar */}
            <div className="jobs-search">
              <div className="search-input-container">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search jobs by title, keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
              <button 
                className="filter-toggle"
                onClick={() => setShowFilters(!showFilters)}
              >
                <FaFilter /> {showFilters ? 'Hide Filters' : 'Filters'}
              </button>
            </div>
            
            {/* Filters */}
            {showFilters && (
              <motion.div 
                className="jobs-filters"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="filter-group">
                  <label>Location</label>
                  <div className="input-with-icon">
                    <FaMapMarkerAlt className="input-icon" />
                    <input 
                      type="text" 
                      placeholder="City or postcode" 
                      value={locationFilter}
                      onChange={(e) => setLocationFilter(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="filter-group">
                  <label>Job Type</label>
                  <div className="input-with-icon">
                    <FaBriefcase className="input-icon" />
                    <select 
                      value={jobTypeFilter}
                      onChange={(e) => setJobTypeFilter(e.target.value as JobType | '')}
                    >
                      <option value="">All Types</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Part-time">Part-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Temporary">Temporary</option>
                      <option value="Internship">Internship</option>
                    </select>
                  </div>
                </div>
                
                <div className="filter-group">
                  <label>Experience Level</label>
                  <div className="input-with-icon">
                    <FaClock className="input-icon" />
                    <select 
                      value={experienceFilter}
                      onChange={(e) => setExperienceFilter(e.target.value as ExperienceLevel | '')}
                    >
                      <option value="">All Levels</option>
                      <option value="Entry Level">Entry Level</option>
                      <option value="Mid Level">Mid Level</option>
                      <option value="Senior Level">Senior Level</option>
                      <option value="Executive">Executive</option>
                    </select>
                  </div>
                </div>
                
                {(locationFilter || jobTypeFilter || experienceFilter) && (
                  <button className="clear-filters" onClick={clearFilters}>
                    <FaTimes /> Clear Filters
                  </button>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Jobs Listings */}
      <section className="jobs-listings">
        <div className="container">
          <div className="jobs-header">
            <h2>Available Positions</h2>
            <p>{filteredJobs.length} {filteredJobs.length === 1 ? 'job' : 'jobs'} found</p>
          </div>
          
          {filteredJobs.length > 0 ? (
            <div className="jobs-grid">
              {filteredJobs.map((job, index) => (
                <motion.article 
                  key={job.id}
                  className={`job-card ${job.isFeatured ? 'featured' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
                  onClick={() => handleJobClick(job)}
                >
                  {job.isFeatured && <div className="featured-badge">Featured</div>}
                  <div className="job-card-header">
                    <h3>{job.title}</h3>
                    <span className="job-department">{job.department}</span>
                  </div>
                  <div className="job-meta">
                    <span className="job-location">
                      <FaMapMarkerAlt /> {job.location}
                    </span>
                    <span className="job-type">
                      <FaBriefcase /> {job.type}
                    </span>
                    <span className="job-salary">
                      <FaMoneyBillWave /> {job.salary}
                    </span>
                  </div>
                  <p className="job-description">
                    {job.description.length > 120 
                      ? `${job.description.substring(0, 120)}...` 
                      : job.description}
                  </p>
                  <div className="job-footer">
                    <span className="job-posted">Posted {job.posted}</span>
                    <button className="apply-button">
                      Apply Now <FaArrowRight />
                    </button>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="no-jobs">
              <h3>No jobs found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button className="clear-filters" onClick={clearFilters}>
                <FaTimes /> Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="why-join-us">
        <div className="container">
          <div className="section-header">
            <h2>Why Join Savees Group?</h2>
            <p>We value our employees and offer a supportive work environment with opportunities for growth.</p>
          </div>
          
          <div className="benefits-grid">
            <motion.div 
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
            >
              <div className="benefit-icon">
                <FaMoneyBillWave />
              </div>
              <h3>Competitive Pay</h3>
              <p>We offer industry-competitive salaries and regular performance reviews.</p>
            </motion.div>
            
            <motion.div 
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="benefit-icon">
                <FaBriefcase />
              </div>
              <h3>Career Growth</h3>
              <p>Opportunities for professional development and career advancement.</p>
            </motion.div>
            
            <motion.div 
              className="benefit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="benefit-icon">
                <FaClock />
              </div>
              <h3>Flexible Schedules</h3>
              <p>We understand the importance of work-life balance.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Application Modal */}
      {showJobModal && selectedJob && (
        <div className="job-modal-overlay" onClick={closeJobModal}>
          <motion.div 
            className="job-modal"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={closeJobModal}>
              <FaTimes />
            </button>
            
            <div className="job-modal-content">
              <div className="job-modal-header">
                <h2>{selectedJob.title}</h2>
                <div className="job-meta">
                  <span><FaMapMarkerAlt /> {selectedJob.location}</span>
                  <span><FaBriefcase /> {selectedJob.type}</span>
                  <span><FaMoneyBillWave /> {selectedJob.salary}</span>
                </div>
                <p className="job-department">{selectedJob.department} Department</p>
              </div>
              
              <div className="job-modal-body">
                <div className="job-details">
                  <div className="job-section">
                    <h3>Job Description</h3>
                    <p>{selectedJob.description}</p>
                  </div>
                  
                  <div className="job-section">
                    <h3>Key Responsibilities</h3>
                    <ul>
                      {selectedJob.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="job-section">
                    <h3>Requirements</h3>
                    <ul>
                      {selectedJob.requirements.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="job-application">
                  <h3>Apply for this Position</h3>
                  <form onSubmit={handleApply} className="application-form">
                    <div className="form-group">
                      <label htmlFor="fullName">Full Name *</label>
                      <input 
                        type="text" 
                        id="fullName" 
                        required 
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        placeholder="Your email address"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div className="form-group file-upload">
                      <label>Upload Resume/CV *</label>
                      <div className="file-input-container">
                        <input 
                          type="file" 
                          id="resume" 
                          accept=".pdf,.doc,.docx" 
                          onChange={handleResumeChange}
                          required
                        />
                        <label htmlFor="resume" className="file-input-label">
                          {resumeFile ? resumeFile.name : 'Choose file...'}
                        </label>
                      </div>
                      <p className="file-hint">Accepted file types: .pdf, .doc, .docx (Max size: 5MB)</p>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="coverLetter">Cover Letter (Optional)</label>
                      <textarea 
                        id="coverLetter" 
                        rows={5} 
                        placeholder="Tell us why you'd be a great fit for this position..."
                      ></textarea>
                    </div>
                    
                    <div className="form-actions">
                      <button type="button" className="btn-secondary" onClick={closeJobModal}>
                        Cancel
                      </button>
                      <button type="submit" className="btn-primary">
                        Submit Application
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
};

export default Jobs;
