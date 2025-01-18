export type MediaItem = {
    id: number;
    title?: string;
    name?: string;  
    poster_path?: string;
    release_date?: string;
    vote_average?: number;
    media_type?: string;
};

export type HorizontalScrollCardProps = {
    data: MediaItem[];
    heading: string;
    trending?: boolean;
    media_type?: string;
  };

export type SearchData = {
    id: number;
    title?: string;
    name?: string;
    poster_path?: string;
    release_date?: string;
    vote_average?: number;
    media_type?: string;
  };

export type VideoData = {
    results: {
      key: string; 
      name?: string; 
      site?: string; 
      type?: string; 
    }[];
};
export type VideoPlayProps = {
    data: {
      id: number;
      [key: string]: any;
    };
    close: () => void;
    media_type: string;
  };

  export interface UserProfile {
    id: string;
    created_at: string;
    full_name_en: string | null;
    full_name_ka: string | null;
    mobile: string | null;
    username: string | null;
}

export interface MovieDetails {
    id: number;
    title?: string;
    name?: string;
    backdrop_path?: string;
    poster_path?: string;
    tagline?: string;
    vote_average?: number;
    vote_count?: number;
    overview?: string;
    status?: string;
    release_date?: string;
    revenue?: number;
    runtime?: number;
  }
  
export interface CastMember {
    name: string;
    profile_path?: string;
  }
  
export interface CrewMember {
    name: string;
    job: string;
    profile_path?: string;
  }
  
export interface CastData {
    cast: CastMember[];
    crew: CrewMember[];
  }
export  interface ExploreData {
    id: string | number; 
  }

export interface CardProps {
    data: {
        id: string | number; 
      title?: string;
      name?: string;
      poster_path?: string;
      release_date?: string;
      vote_average?: number;
      media_type?: string;
    };
    trending?: boolean; 
    index?: number; 
    media_type?: string; 
  }
  