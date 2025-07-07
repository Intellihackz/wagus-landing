export interface SuccessStory {
  id: string;
  title: string;
  summary: string;
  content: string;
  user: {
    name: string;
  };
  coverImage: string;
  tags: string[];
  likes?: number;
  status: 'published' | 'draft' | 'pending';
  createdAt?: string;
  updatedAt?: string;
}

export interface SuccessStoryComment {
  id: string;
  storyId: string;
  userId: string;
  userDisplayName: string;
  comment: string;
  createdAt: string;
}
