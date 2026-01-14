import { User, Stats, Boat, Post, Template, Social } from './types';

// Mock user data
export const DUMMY_USER: User = {
  id: 1,
  email: 'captain@anchorcast.com',
  wpDomain: 'anchorcast.yachts',
};

// Mock stats data for dashboard
export const DUMMY_STATS: Stats = {
  totalBoats: 24,
  publishedPosts: 156,
  failedPosts: 3,
  nextSync: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // 2 hours from now
};

// Mock boat inventory data
export const DUMMY_BOATS: Boat[] = [
  {
    id: 1,
    title: '2023 Sea Ray SLX 400',
    price: '$389,000',
    year: 2023,
    lengthFt: 40,
    imgUrl: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=800&q=80',
    modifiedGmt: '2024-01-15T10:30:00Z',
    publishCount: 5,
  },
  {
    id: 2,
    title: '2022 Boston Whaler 350 Outrage',
    price: '$425,000',
    year: 2022,
    lengthFt: 35,
    imgUrl: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80',
    modifiedGmt: '2024-01-14T14:22:00Z',
    publishCount: 8,
  },
  {
    id: 3,
    title: '2021 Princess V40',
    price: '$595,000',
    year: 2021,
    lengthFt: 40,
    imgUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    modifiedGmt: '2024-01-13T09:15:00Z',
    publishCount: 3,
  },
  {
    id: 4,
    title: '2024 Azimut Fly 55',
    price: '$1,250,000',
    year: 2024,
    lengthFt: 55,
    imgUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    modifiedGmt: '2024-01-15T16:45:00Z',
    publishCount: 2,
  },
  {
    id: 5,
    title: '2020 Sunseeker Predator 55',
    price: '$975,000',
    year: 2020,
    lengthFt: 55,
    imgUrl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
    modifiedGmt: '2024-01-12T11:30:00Z',
    publishCount: 6,
  },
  {
    id: 6,
    title: '2023 Regal 42 FXO',
    price: '$445,000',
    year: 2023,
    lengthFt: 42,
    imgUrl: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80',
    modifiedGmt: '2024-01-11T08:00:00Z',
    publishCount: 4,
  },
  {
    id: 7,
    title: '2022 Viking 55C',
    price: '$2,100,000',
    year: 2022,
    lengthFt: 55,
    imgUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80',
    modifiedGmt: '2024-01-10T13:20:00Z',
    publishCount: 7,
  },
  {
    id: 8,
    title: '2024 Jeanneau Leader 40',
    price: '$365,000',
    year: 2024,
    lengthFt: 40,
    imgUrl: 'https://images.unsplash.com/photo-1621406061793-77e549812702?w=800&q=80',
    modifiedGmt: '2024-01-09T15:50:00Z',
    publishCount: 1,
  },
];

// Mock post data
export const DUMMY_POSTS: Post[] = [
  {
    id: 1,
    boatId: 1,
    platform: 'fb',
    status: 'published',
    createdAt: '2024-01-15T09:00:00Z',
    errorMsg: null,
    payload: { message: 'Check out this beautiful Sea Ray!' },
  },
  {
    id: 2,
    boatId: 1,
    platform: 'ig',
    status: 'published',
    createdAt: '2024-01-15T09:05:00Z',
    errorMsg: null,
    payload: { caption: 'Just listed! 2023 Sea Ray SLX 400' },
  },
  {
    id: 3,
    boatId: 2,
    platform: 'fb',
    status: 'failed',
    createdAt: '2024-01-15T08:30:00Z',
    errorMsg: 'Graph API Error: Invalid access token',
    payload: { message: 'Boston Whaler now available!' },
  },
  {
    id: 4,
    boatId: 2,
    platform: 'ig',
    status: 'published',
    createdAt: '2024-01-15T08:35:00Z',
    errorMsg: null,
    payload: { caption: 'Boston Whaler 350 Outrage - Ready for adventure' },
  },
  {
    id: 5,
    boatId: 3,
    platform: 'fb',
    status: 'published',
    createdAt: '2024-01-14T14:00:00Z',
    errorMsg: null,
    payload: { message: 'Luxury cruising with Princess V40' },
  },
  {
    id: 6,
    boatId: 4,
    platform: 'ig',
    status: 'failed',
    createdAt: '2024-01-14T10:00:00Z',
    errorMsg: 'Rate limit exceeded. Please try again later.',
    payload: { caption: 'Azimut Fly 55 - Pure elegance' },
  },
  {
    id: 7,
    boatId: 5,
    platform: 'fb',
    status: 'published',
    createdAt: '2024-01-13T16:00:00Z',
    errorMsg: null,
    payload: { message: 'Sunseeker Predator - The ultimate sport yacht' },
  },
  {
    id: 8,
    boatId: 6,
    platform: 'ig',
    status: 'published',
    createdAt: '2024-01-13T12:30:00Z',
    errorMsg: null,
    payload: { caption: 'Regal 42 FXO - Performance meets comfort' },
  },
];

// Mock template data
export const DUMMY_TEMPLATES: Template[] = [
  {
    platform: 'fb',
    templateText: '🚤 Just Listed: {title} ({year})\n\nPrice: {price}\nLength: {lengthFt} ft\n\nContact us for more details! #yachtforsale',
    hashtagPool: ['yachtforsale', 'boatlife', 'luxuryyacht', 'yachting', 'boating', 'marinelife', 'oceanlover', 'yachtbroker', 'sailing', 'boatinglifestyle', 'boatdealer', 'yachtshow'],
    maxHashtags: 5,
  },
  {
    platform: 'ig',
    templateText: '✨ New Arrival! ✨\n\n{title}\n📍 {year} • {lengthFt}ft\n💰 {price}\n\nDM for inquiries 📩',
    hashtagPool: ['yacht', 'yachtlife', 'luxurylifestyle', 'boat', 'boatstagram', 'yachting', 'marina', 'boatshow', 'yachtworld', 'luxuryboats', 'instayacht', 'yachtdesign', 'boating'],
    maxHashtags: 10,
  },
];

// Mock social connection data
export const DUMMY_SOCIAL: Social = {
  fbPageName: 'AnchorCast Yachts',
  igUserName: '@anchorcastyachts',
  tokenExpiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days from now
};

// Export aliases for easier importing
export const posts = DUMMY_POSTS;
export const user = DUMMY_USER;
export const stats = DUMMY_STATS;
export const boats = DUMMY_BOATS;
export const templates = DUMMY_TEMPLATES;
export const social = DUMMY_SOCIAL;
