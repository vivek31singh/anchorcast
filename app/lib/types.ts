// User interface representing the authenticated broker/admin
export interface User {
  id: number;
  email: string;
  wpDomain: string;
}

// Stats interface for dashboard overview metrics
export interface Stats {
  totalBoats: number;
  publishedPosts: number;
  failedPosts: number;
  nextSync: string; // ISO Date string
}

// Boat interface representing a boat listing from WordPress
export interface Boat {
  id: number;
  title: string;
  price: string;
  year: number;
  lengthFt: number;
  imgUrl: string;
  modifiedGmt: string;
  publishCount: number;
}

// Post interface representing a social media post attempt
export interface Post {
  id: number;
  boatId: number;
  platform: 'fb' | 'ig';
  status: 'published' | 'failed';
  createdAt: string;
  errorMsg: string | null;
  payload: object;
}

// Template interface for social media post templates
export interface Template {
  platform: 'fb' | 'ig';
  templateText: string;
  hashtagPool: string[];
  maxHashtags: number;
}

// Social interface for connected social media accounts
export interface Social {
  fbPageName: string;
  igUserName: string;
  tokenExpiresAt: string;
}
