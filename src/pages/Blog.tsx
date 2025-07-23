import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaSearch, FaCalendarAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import { type BlogPost, blogPosts } from '../data/blogPosts';
import './Blog.css';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [categories, setCategories] = useState<string[]>([]);

  // Initialize filtered posts and categories
  useEffect(() => {
    setFilteredPosts(blogPosts);
    
    // Extract unique categories from blog posts
    const uniqueCategories = Array.from(new Set(blogPosts.map(post => post.category)));
    setCategories(['all', ...uniqueCategories]);
  }, []);

  // Filter posts based on search term and selected category
  useEffect(() => {
    let result = [...blogPosts];
    
    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        post => 
          post.title.toLowerCase().includes(term) || 
          post.excerpt.toLowerCase().includes(term) ||
          post.content.toLowerCase().includes(term)
      );
    }
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(post => post.category === selectedCategory);
    }
    
    setFilteredPosts(result);
  }, [searchTerm, selectedCategory]);

  // Function to handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle category filter change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <main className="blog-page">
      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <motion.div 
            className="blog-hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1>Our Blog</h1>
            <p>Insights, news, and updates from the world of hospitality staffing</p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="blog-content">
        <div className="container">
          {/* Search and Filter */}
          <div className="blog-filters">
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
              />
            </div>
            
            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-tag ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          {filteredPosts.length > 0 ? (
            <div className="blog-grid">
              {filteredPosts.map((post) => (
                <motion.article 
                  key={post.id} 
                  className="blog-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Link to={`/blog/${post.slug}`} className="blog-card-link">
                    <div className="blog-card-image">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        loading="lazy"
                      />
                      <span className="blog-card-category">{post.category}</span>
                    </div>
                    <div className="blog-card-content">
                      <div className="blog-card-meta">
                        <span className="blog-card-date">
                          <FaCalendarAlt /> {post.date}
                        </span>
                        <span className="blog-card-read-time">
                          <FaClock /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="blog-card-title">{post.title}</h3>
                      <p className="blog-card-excerpt">
                        {post.excerpt.length > 150 
                          ? `${post.excerpt.substring(0, 150)}...` 
                          : post.excerpt}
                      </p>
                      <div className="blog-card-footer">
                        <span className="read-more">
                          Read more <FaArrowRight className="arrow-icon" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>No articles found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Blog;
