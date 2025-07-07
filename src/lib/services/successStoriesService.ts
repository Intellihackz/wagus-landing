import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  query, 
  where, 
  orderBy, 
  limit,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { indexedQueries } from '@/lib/firebase-utils';
import { SuccessStory, SuccessStoryComment } from '@/types/success-stories';

/**
 * Get all published success stories
 */
export async function getSuccessStories() {
  try {
    // Use our pre-configured indexed query
    console.log("Fetching published success stories...");
    const querySnapshot = await getDocs(indexedQueries.successStories.getPublished());
    console.log(`Found ${querySnapshot.docs.length} published stories`);
    
    // Debug each story
    querySnapshot.docs.forEach(doc => {
      const data = doc.data();
      console.log(`Story ID: ${doc.id}, Title: ${data.title}, Status: ${data.status}`);
    });
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      // Safely handle timestamps that might not be Firestore Timestamp objects
      let createdAt = data.createdAt;
      let updatedAt = data.updatedAt;
      
      // Convert timestamps if they have toDate method
      if (createdAt && typeof createdAt.toDate === 'function') {
        createdAt = createdAt.toDate().toISOString();
      }
      
      if (updatedAt && typeof updatedAt.toDate === 'function') {
        updatedAt = updatedAt.toDate().toISOString();
      }
      
      return {
        id: doc.id,
        ...data,
        createdAt,
        updatedAt
      } as SuccessStory;
    });
  } catch (error) {
    console.error('Error fetching success stories:', error);
    return [];
  }
}

/**
 * Get a success story by ID
 */
export async function getSuccessStoryById(id: string) {
  try {
    const docRef = doc(db, 'success_stories', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const data = docSnap.data();
      
      // Safely handle timestamps that might not be Firestore Timestamp objects
      let createdAt = data.createdAt;
      let updatedAt = data.updatedAt;
      
      // Convert timestamps if they have toDate method
      if (createdAt && typeof createdAt.toDate === 'function') {
        createdAt = createdAt.toDate().toISOString();
      }
      
      if (updatedAt && typeof updatedAt.toDate === 'function') {
        updatedAt = updatedAt.toDate().toISOString();
      }
      
      return {
        id: docSnap.id,
        ...data,
        createdAt,
        updatedAt
      } as SuccessStory;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching success story:', error);
    return null;
  }
}

/**
 * Get comments for a specific success story
 */
export async function getSuccessStoryComments(storyId: string) {
  try {
    // Use our pre-configured indexed query
    const querySnapshot = await getDocs(indexedQueries.comments.getByStoryId(storyId));
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      // Safely handle timestamp that might not be a Firestore Timestamp object
      let createdAt = data.createdAt;
      
      // Convert timestamp if it has toDate method
      if (createdAt && typeof createdAt.toDate === 'function') {
        createdAt = createdAt.toDate().toISOString();
      }
      
      return {
        id: doc.id,
        ...data,
        createdAt
      } as SuccessStoryComment;
    });
  } catch (error) {
    console.error('Error fetching success story comments:', error);
    return [];
  }
}

/**
 * Add a comment to a success story
 */
export async function addSuccessStoryComment(comment: Omit<SuccessStoryComment, 'id' | 'createdAt'>) {
  try {
    const docRef = await addDoc(collection(db, 'success_story_comments'), {
      ...comment,
      createdAt: serverTimestamp()
    });
    
    return docRef.id;
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
}

// Admin Functions

/**
 * Get all success stories (including drafts and pending)
 */
export async function getAllSuccessStories() {
  try {
    // Use our pre-configured indexed query
    const querySnapshot = await getDocs(indexedQueries.successStories.getAll());
    
    return querySnapshot.docs.map(doc => {
      const data = doc.data();
      // Safely handle timestamps that might not be Firestore Timestamp objects
      let createdAt = data.createdAt;
      let updatedAt = data.updatedAt;
      
      // Convert timestamps if they have toDate method
      if (createdAt && typeof createdAt.toDate === 'function') {
        createdAt = createdAt.toDate().toISOString();
      }
      
      if (updatedAt && typeof updatedAt.toDate === 'function') {
        updatedAt = updatedAt.toDate().toISOString();
      }
      
      return {
        id: doc.id,
        ...data,
        createdAt,
        updatedAt
      } as SuccessStory;
    });
  } catch (error) {
    console.error('Error fetching all success stories:', error);
    return [];
  }
}

/**
 * Create a new success story
 */
export async function createSuccessStory(data: Partial<SuccessStory>) {
  try {
    // Ensure status is set to published
    const storyData = {
      ...data,
      status: data.status || 'published', // Default to published if not set
      likes: 0,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };
    
    console.log("Creating story with data:", storyData);
    
    const docRef = await addDoc(collection(db, 'success_stories'), storyData);
    console.log(`Story created with ID: ${docRef.id}`);
    
    return docRef.id;
  } catch (error) {
    console.error('Error creating success story:', error);
    throw error;
  }
}

/**
 * Update an existing success story
 */
export async function updateSuccessStory(id: string, data: Partial<SuccessStory>) {
  try {
    const docRef = doc(db, 'success_stories', id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp()
    });
    
    return id;
  } catch (error) {
    console.error('Error updating success story:', error);
    throw error;
  }
}

/**
 * Delete a success story and its comments
 */
export async function deleteSuccessStory(id: string) {
  try {
    // Delete the success story
    const storyRef = doc(db, 'success_stories', id);
    await deleteDoc(storyRef);
    
    // Delete all associated comments using our indexed query
    const commentQuery = query(
      collection(db, 'success_story_comments'),
      where('storyId', '==', id)
    );
    const commentSnapshot = await getDocs(commentQuery);
    
    const deletePromises = commentSnapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
    
    return true;
  } catch (error) {
    console.error('Error deleting success story:', error);
    throw error;
  }
}

/**
 * Delete a specific comment from a success story
 */
export async function deleteSuccessStoryComment(storyId: string, commentId: string) {
  try {
    const commentRef = doc(db, 'success_story_comments', commentId);
    await deleteDoc(commentRef);
    return true;
  } catch (error) {
    console.error('Error deleting success story comment:', error);
    throw error;
  }
}
