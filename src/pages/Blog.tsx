import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaArrowRight, FaSearch} from 'react-icons/fa';
import './Blog.css';

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  slug: string;
};

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of Hospitality Staffing in the UK',
      excerpt: 'Exploring the latest trends and innovations shaping the hospitality staffing industry in the United Kingdom...',
      date: 'July 15, 2025',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Industry News',
      slug: 'future-of-hospitality-staffing-uk'
    },
    {
      id: 2,
      title: 'How to Build a Strong Team for Your Restaurant',
      excerpt: 'Essential tips for restaurant owners looking to build and maintain a strong, reliable team in the competitive food service industry...',
      date: 'June 28, 2025',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Tips & Advice',
      slug: 'build-strong-restaurant-team'
    },
    {
      id: 3,
      title: 'The Impact of Seasonal Staffing on Hospitality Businesses',
      excerpt: 'Understanding how effective seasonal staffing strategies can help hospitality businesses thrive during peak periods...',
      date: 'June 15, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1566073053324-2f9e78f0f02b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Industry News',
      slug: 'impact-seasonal-staffing-hospitality'
    },
    {
      id: 4,
      title: 'Top 5 Qualities to Look for in Hospitality Staff',
      excerpt: 'Discover the essential qualities that make a great hospitality professional and how to identify them during the hiring process...',
      date: 'May 30, 2025',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Recruitment',
      slug: 'qualities-hospitality-staff'
    },
    {
      id: 5,
      title: 'Navigating Work Permits for International Hospitality Workers',
      excerpt: 'A comprehensive guide to work permits and visa requirements for international hospitality staff in the UK...',
      date: 'May 18, 2025',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'Legal & Compliance',
      slug: 'work-permits-international-staff'
    },
    {
      id: 6,
      title: 'Employee Retention Strategies for the Hospitality Industry',
      excerpt: 'Effective strategies to improve employee retention rates and reduce turnover in the competitive hospitality sector...',
      date: 'May 5, 2025',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      category: 'HR Management',
      slug: 'employee-retention-strategies-hospitality'
    }
  ];

  // Get unique categories
  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <motion.div 
            className="blog-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Our Blog</h1>
            <p>Insights, news, and updates from the world of hospitality staffing</p>
            
            {/* Search Bar */}
            <div className="blog-search">
              <div className="search-input-container">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content">
        <div className="container">
          {/* Category Filter */}
          <div className="blog-categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-tag ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="blog-grid">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <motion.article 
                  key={post.id}
                  className="blog-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
                >
                  <Link to={`/blog/${post.slug}`} className="blog-card-link">
                    <div className="blog-card-image">
                      <img src={post.image} alt={post.title} />
                      <span className="blog-category">{post.category}</span>
                    </div>
                    <div className="blog-card-content">
                      <div className="blog-meta">
                        <span className="blog-date">
                          <FaCalendarAlt /> {post.date}
                        </span>
                        <span className="blog-read-time">
                          <FaClock /> {post.readTime}
                        </span>
                      </div>
                      <h2 className="blog-title">{post.title}</h2>
                      <p className="blog-excerpt">{post.excerpt}</p>
                      <div className="blog-read-more">
                        Read more <FaArrowRight className="arrow-icon" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))
            ) : (
              <div className="no-results">
                <h3>No articles found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>

          {/* Newsletter Signup */}
          <div className="blog-newsletter">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest industry insights and updates</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
                required 
              />
              <button type="submit" className="newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
