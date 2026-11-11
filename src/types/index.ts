export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  bio: string;
  email: string;
  phone: string;
}

export interface Interest {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Hobby {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PersonalityTrait {
  id: string;
  title: string;
  description: string;
  percentage: number;
}

export interface FavoriteThing {
  id: string;
  category: string;
  items: string[];
  icon: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  personalInfo: PersonalInfo;
  interests: Interest[];
  hobbies: Hobby[];
  personalityTraits: PersonalityTrait[];
  favoriteThings: FavoriteThing[];
  galleryImages: GalleryImage[];
  socialLinks: SocialLink[];
}