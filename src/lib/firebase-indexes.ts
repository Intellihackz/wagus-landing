/**
 * Firebase Indexes Configuration
 * 
 * This file documents the Firestore indexes required for this application.
 * You'll need to create these indexes in the Firebase Console or using the Firebase CLI.
 */

/**
 * Collection: success_stories
 * 
 * Indexes:
 * 1. Composite Index for getSuccessStories:
 *    - Fields: status (ASC), createdAt (DESC)
 *    - Query: where status == 'published' order by createdAt desc
 * 
 * 2. Composite Index for getAllSuccessStories:
 *    - Fields: createdAt (DESC)
 *    - Query: order by createdAt desc
 */

/**
 * Collection: success_story_comments
 * 
 * Indexes:
 * 1. Composite Index for getSuccessStoryComments:
 *    - Fields: storyId (ASC), createdAt (ASC)
 *    - Query: where storyId == [storyId] order by createdAt asc
 * 
 * 2. Simple Index for deleteSuccessStory cascade:
 *    - Fields: storyId (ASC)
 *    - Query: where storyId == [storyId]
 */

/**
 * Collection: dev_logs
 * 
 * Indexes:
 * 1. Composite Index for getPublishedDevLogs:
 *    - Fields: status (ASC), createdAt (DESC)
 *    - Query: where status == 'published' order by createdAt desc
 * 
 * 2. Composite Index for getAllDevLogs (admin):
 *    - Fields: createdAt (DESC)
 *    - Query: order by createdAt desc
 */

export {};
