import { Project } from "@/projectsSlice";

export async function fetchProjectsFromApi(
    page: number = 1
  ): Promise<{ projects: Project[]; hasMore: boolean }> {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/projects?page=${page}`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      return { projects: [], hasMore: false };
    }
  }
  