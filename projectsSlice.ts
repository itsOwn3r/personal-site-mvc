import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Project {
  id: number;
  title: string;
  description: string;
  link: string,
  tech: string[]
}

interface ProjectsState {
  projects: Project[];
  page: number;
  hasMore: boolean;
  loading: boolean;
}

const initialState: ProjectsState = {
  projects: [],
  page: 1,
  hasMore: true,
  loading: false,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = action.payload;
    },
    appendProjects: (state, action: PayloadAction<Project[]>) => {
      state.projects = [...state.projects, ...action.payload];
    },
    incrementPage: (state) => {
      state.page += 1;
    },
    setHasMore: (state, action: PayloadAction<boolean>) => {
      state.hasMore = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setProjects, appendProjects, incrementPage, setHasMore, setLoading } = projectsSlice.actions;
export default projectsSlice.reducer;
