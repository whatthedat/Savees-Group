import type { BlogPost } from '../../data/blogPosts';

export function getRecentPosts(posts: BlogPost[], count: number): BlogPost[] {
  return [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}
