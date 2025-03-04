import { NextResponse } from "next/server";
import { OTHER_PROJECTS } from '@/data/other_projects';



export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") || "1");
  const pageSize = 3;
  
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const projects = OTHER_PROJECTS.slice(startIndex, endIndex);
  
  return NextResponse.json({ projects, hasMore: endIndex < OTHER_PROJECTS.length });
}
