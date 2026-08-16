import type { BlogPost } from "@/types/brand";

export interface BlogsApiData {
  items: BlogPost[];
}

interface BlogsApiResponse {
  success: boolean;
  data: BlogsApiData;
  message: string;
}

/**
 * Получает список постов блога
 */
export async function getBlogPosts(): Promise<BlogsApiData | null> {
  try {
    const response = await fetch('https://api2.skilla.ru/api/site/blogs');
    const data: BlogsApiResponse = await response.json();
    
    if (!data.success) return null;
    
    return data.data;
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    return null;
  }
}

/**
 * Получает конкретный пост блога по URL
 */
export async function getBlogPostByUrl(url: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`https://api2.skilla.ru/api/site/blogs/${url}`);
    const data = await response.json();
    
    if (!data.success) return null;
    
    return data.data;
  } catch (error) {
    console.error('Failed to fetch blog post:', error);
    return null;
  }
}