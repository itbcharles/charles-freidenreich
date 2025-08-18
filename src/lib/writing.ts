import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface WritingPost {
  slug: string;
  title: string;
  tldr: string;
  date: string;
  tags: string[];
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'content/writing');

export function getAllPosts(): WritingPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPosts = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        tldr: data.tldr || '',
        date: data.date || '',
        tags: data.tags || [],
        content,
      };
    })
    .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

  return allPosts;
}

export function getPostBySlug(slug: string): WritingPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || '',
      tldr: data.tldr || '',
      date: data.date || '',
      tags: data.tags || [],
      content,
    };
  } catch {
    return null;
  }
}