import { 
  query, 
  collection, 
  where, 
  orderBy, 
  limit as limitDocs, 
  QueryConstraint, 
  WhereFilterOp, 
  OrderByDirection,
  Query,
  DocumentData,
  CollectionReference 
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

/**
 * Creates an indexed query for Firestore collections
 * 
 * This utility helps ensure all queries use the proper indexes
 * as defined in firestore.indexes.json
 */
export function createIndexedQuery(
  collectionPath: string,
  filters: {
    field: string;
    operator: WhereFilterOp;
    value: any;
  }[] = [],
  sortBy: {
    field: string;
    direction: OrderByDirection;
  }[] = [],
  limit?: number
): Query<DocumentData> {
  const collectionRef = collection(db, collectionPath);
  const constraints: QueryConstraint[] = [];
  
  // Add all filter constraints
  filters.forEach(filter => {
    constraints.push(where(filter.field, filter.operator, filter.value));
  });
  
  // Add all sort constraints
  sortBy.forEach(sort => {
    constraints.push(orderBy(sort.field, sort.direction));
  });
  
  // Add limit if specified
  if (limit) {
    constraints.push(limitDocs(limit));
  }
  
  return query(collectionRef, ...constraints);
}

/**
 * Pre-configured indexed queries for common operations
 */
export const indexedQueries = {
  successStories: {
    /**
     * Gets published success stories sorted by creation date
     */
    getPublished: () => createIndexedQuery(
      'success_stories',
      [{ field: 'status', operator: '==', value: 'published' }],
      [{ field: 'createdAt', direction: 'desc' }]
    ),
    
    /**
     * Gets all success stories for admin view
     */
    getAll: () => createIndexedQuery(
      'success_stories',
      [],
      [{ field: 'createdAt', direction: 'desc' }]
    ),
  },
  
  comments: {
    /**
     * Gets all comments for a specific success story
     */
    getByStoryId: (storyId: string) => createIndexedQuery(
      'success_story_comments',
      [{ field: 'storyId', operator: '==', value: storyId }],
      [{ field: 'createdAt', direction: 'asc' }]
    ),
  },
  
  devLogs: {
    /**
     * Gets published dev logs sorted by creation date
     */
    getPublished: () => createIndexedQuery(
      'dev_logs',
      [{ field: 'status', operator: '==', value: 'published' }],
      [{ field: 'createdAt', direction: 'desc' }]
    ),
    
    /**
     * Gets all dev logs for admin view
     */
    getAll: () => createIndexedQuery(
      'dev_logs',
      [],
      [{ field: 'createdAt', direction: 'desc' }]
    ),
  }
};
