export interface DevLogEntry {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  category: DevLogCategory;
  tags: string[];
  imageUrl?: string;
  status: 'published' | 'draft';
}

export enum DevLogCategory {
  FEATURE_UPDATE = 'Feature Update',
  ROADMAP_UPDATE = 'Roadmap Update',
  COMMUNITY = 'Community',
  TECHNICAL = 'Technical',
  ANNOUNCEMENT = 'Announcement',
}

export interface TabItem {
  label: string;
  value: string;
  filter: (entry: DevLogEntry) => boolean;
}
