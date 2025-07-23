export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  slug: string;
  isExpanded?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'The Future of Hospitality Staffing in the UK',
    excerpt: 'Exploring the latest trends and innovations shaping the hospitality staffing industry in the United Kingdom...',
    content: 'The UK hospitality industry is undergoing a significant transformation, driven by technological advancements and changing workforce expectations. In this article, we explore how these changes are reshaping staffing strategies and what it means for businesses looking to stay competitive in this dynamic landscape.\n\n## The Impact of Technology\n\nTechnology is revolutionizing how hospitality businesses operate and staff their establishments. Automated scheduling systems, mobile apps for shift management, and AI-driven candidate matching are just a few examples of how technology is making staffing more efficient.\n\n## Changing Workforce Expectations\n\nToday\'s hospitality workers are looking for more than just a paycheck. They value flexibility, career development opportunities, and a positive work environment. Businesses that understand and adapt to these changing expectations will be better positioned to attract and retain top talent.\n\n## The Rise of Flexible Staffing\n\nFlexible working arrangements are becoming increasingly popular in the hospitality sector. Many workers now prefer gig work or part-time positions that allow them to balance work with other commitments. This shift is leading to the growth of on-demand staffing platforms and more dynamic workforce management approaches.\n\n## Conclusion\n\nThe future of hospitality staffing in the UK is all about adaptability and innovation. By embracing new technologies and responding to changing worker expectations, businesses can build more resilient and effective teams that drive success in this competitive industry.',
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
    content: 'Building a strong restaurant team goes beyond just hiring skilled individuals. It\'s about creating a cohesive unit that works together seamlessly to deliver exceptional dining experiences. In this comprehensive guide, we share proven strategies for attracting top talent, fostering a positive work environment, and retaining your best employees.\n\n## Hiring the Right People\n\nStart by defining the roles and responsibilities clearly. Look for candidates who not only have the necessary skills but also fit your restaurant\'s culture. Consider their attitude, work ethic, and ability to work in a team.\n\n## Training and Development\n\nInvest in comprehensive training programs to ensure all staff members understand your standards and expectations. Regular training sessions help keep skills sharp and ensure consistency in service quality.\n\n## Creating a Positive Work Environment\n\nA positive work environment is crucial for employee satisfaction and retention. Foster open communication, recognize and reward good performance, and create opportunities for growth and advancement within your organization.\n\n## Conclusion\n\nBuilding a strong restaurant team takes time and effort, but the rewards are well worth it. By focusing on hiring the right people, providing excellent training, and creating a positive work environment, you can build a team that delivers exceptional service and contributes to your restaurant\'s success.',
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
    content: 'Seasonal fluctuations are a reality in the hospitality industry, but they don\'t have to be a source of stress. With the right staffing strategies, your business can not only survive but thrive during peak seasons. In this article, we dive deep into the art and science of seasonal staffing.\n\n## Understanding Seasonal Demand\n\nAnalyze historical data to identify your peak periods and staffing needs. This will help you plan ahead and ensure you have the right number of staff at the right time.\n\n## Recruiting Seasonal Staff\n\nStart your recruitment process well in advance of your peak season. Look for candidates with previous seasonal experience who understand the demands of the industry. Consider offering incentives to attract top talent.\n\n## Training and Onboarding\n\nEfficient onboarding is crucial for seasonal staff. Develop a streamlined training program that quickly brings new hires up to speed on your standards and procedures.\n\n## Conclusion\n\nEffective seasonal staffing requires careful planning and execution. By understanding your business\'s unique needs and implementing smart staffing strategies, you can maximize productivity and profitability during peak periods.',
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
    content: 'In the fast-paced world of hospitality, technical skills can be taught, but certain innate qualities are what truly set exceptional staff apart. In this article, we identify the top five qualities that define outstanding hospitality professionals.\n\n## 1. Customer-Focused Attitude\n\nGreat hospitality professionals genuinely enjoy helping others. They anticipate guests\' needs and go above and beyond to ensure a positive experience.\n\n## 2. Strong Communication Skills\n\nClear and effective communication is essential in hospitality. Staff should be able to listen actively and convey information clearly to both guests and team members.\n\n## 3. Problem-Solving Ability\n\nUnexpected challenges are common in hospitality. The best staff can think on their feet and find creative solutions to problems as they arise.\n\n## 4. Team Player Mentality\n\nHospitality is a team effort. Look for candidates who work well with others and are willing to support their colleagues when needed.\n\n## 5. Professionalism and Reliability\n\nPunctuality, a strong work ethic, and a professional demeanor are non-negotiable qualities in hospitality staff.\n\n## Conclusion\n\nBy focusing on these key qualities during the hiring process, you can build a team of hospitality professionals who will deliver exceptional service and contribute to your business\'s success.',
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
    content: 'Navigating the complex world of work permits and visas can be daunting for hospitality businesses looking to hire international talent. This comprehensive guide breaks down everything you need to know about UK work permits.\n\n## Types of Work Visas\n\n- **Skilled Worker Visa**: For individuals with a job offer from a UK employer with a sponsor license\n- **Temporary Worker - Seasonal Worker Visa**: For seasonal work in the horticulture sector\n- **Youth Mobility Scheme**: For young people from certain countries to live and work in the UK\n\n## Employer Responsibilities\n\n- Obtain a sponsor license if you want to hire workers from outside the UK\n- Ensure all workers have the right to work in the UK\n- Keep records of right-to-work documents\n- Report any changes in employment status to the Home Office\n\n## Application Process\n\n1. Check if the role meets the skill and salary requirements\n2. Apply for a Certificate of Sponsorship\n3. The worker applies for their visa\n4. The worker provides proof of their right to work\n\n## Conclusion\n\nWhile the process of hiring international workers can be complex, the benefits of accessing a global talent pool make it worthwhile for many hospitality businesses. By understanding the requirements and following the proper procedures, you can successfully navigate the work permit process.',
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
    content: 'High employee turnover is one of the biggest challenges facing the hospitality industry today. In this in-depth article, we explore the root causes of turnover and present proven strategies for improving retention rates.\n\n## Understanding Turnover in Hospitality\n\n- Industry average turnover rates and their impact on business\n- The true cost of replacing an employee\n- Common reasons employees leave hospitality jobs\n\n## Effective Retention Strategies\n\n### 1. Competitive Compensation and Benefits\n\n- Offer wages that meet or exceed industry standards\n- Provide performance-based bonuses and incentives\n- Consider benefits like health insurance and retirement plans\n\n### 2. Career Development Opportunities\n\n- Create clear paths for advancement\n- Offer training and skill development programs\n- Support professional certifications and continuing education\n\n### 3. Positive Work Environment\n\n- Foster a culture of respect and appreciation\n- Implement recognition programs\n- Encourage work-life balance through flexible scheduling\n\n### 4. Employee Engagement\n\n- Regular feedback and open communication\n- Opportunities for employee input and ideas\n- Team-building activities and social events\n\n## Measuring Success\n\n- Track key metrics like turnover rate and employee satisfaction\n- Conduct exit interviews to understand why employees leave\n- Regularly review and adjust your retention strategies\n\n## Conclusion\n\nBy implementing these strategies, hospitality businesses can create an environment where employees feel valued and engaged, leading to higher retention rates and a more stable, experienced workforce.',
    date: 'May 5, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    category: 'HR Management',
    slug: 'employee-retention-strategies-hospitality'
  }
];
