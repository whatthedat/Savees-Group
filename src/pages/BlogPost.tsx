import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaArrowLeft, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { blogPosts } from '../data/blogPosts';
import './Blog.css';

const BlogPostComponent = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the blog post with the matching slug
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="blog-post-not-found">
        <h2>Post not found</h2>
        <p>The requested blog post could not be found.</p>
        <Link to="/blog" className="btn-primary">Back to Blog</Link>
      </div>
    );
  }

  // Function to format markdown content
  const formatContent = (content: string) => {
    // Split content by double newlines to handle paragraphs and sections
    return content.split('\n\n').map((section, index) => {
      // Check for headings (## Heading)
      if (section.startsWith('## ')) {
        return <h3 key={index} className="blog-post-subheading">{section.substring(3)}</h3>;
      }
      // Check for subheadings (### Subheading)
      if (section.startsWith('### ')) {
        return <h4 key={index} className="blog-post-subsubheading">{section.substring(4)}</h4>;
      }
      // Check for unordered list items
      if (section.startsWith('- ')) {
        return (
          <ul key={index} className="blog-post-list">
            {section.split('\n').map((item, i) => (
              item.startsWith('- ') && <li key={i} className="blog-post-list-item">{item.substring(2)}</li>
            ))}
          </ul>
        );
      }
      // Check for ordered list items
      if (/^\d+\.\s/.test(section)) {
        return (
          <ol key={index} className="blog-post-list">
            {section.split('\n').map((item, i) => {
              const match = item.match(/^\d+\.\s(.+)/);
              return match && <li key={i} className="blog-post-list-item">{match[1]}</li>;
            })}
          </ol>
        );
      }
      // Default to paragraph
      return <p key={index} className="blog-post-paragraph">{section}</p>;
    });
  };

  // Format the post date for better readability
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  return (
    <motion.article 
      className="blog-post"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <Link to="/blog" className="back-to-blog">
          <FaArrowLeft /> Back to Blog
        </Link>
        
        <header className="blog-post-header">
          <span className="blog-post-category">{post.category}</span>
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-post-meta">
            <span className="blog-post-date">
              <FaCalendarAlt /> {formatDate(post.date)}
            </span>
            <span className="blog-post-read-time">
              <FaClock /> {post.readTime}
            </span>
          </div>
        </header>

        <div className="blog-post-image-container">
          <img 
            src={post.image} 
            alt={post.title} 
            className="blog-post-image"
            loading="lazy"
          />
        </div>

        <div className="blog-post-content">
          {formatContent(post.content)}
        </div>

        <footer className="blog-post-footer">
          <div className="blog-post-share">
            <span>Share this post:</span>
            <div className="social-share-buttons">
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-share-button facebook"
                aria-label="Share on Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-share-button twitter"
                aria-label="Share on Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-share-button linkedin"
                aria-label="Share on LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          <Link to="/blog" className="btn-secondary">
            <FaArrowLeft /> Back to All Articles
          </Link>
        </footer>
      </div>
    </motion.article>
  );
};

export default BlogPostComponent;
