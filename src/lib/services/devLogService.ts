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
  serverTimestamp
} from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { DevLogEntry } from '@/types/dev-log';

/**
 * Get all dev logs
 */
export async function getDevLogs() {
  try {
    const querySnapshot = await getDocs(
      query(
        collection(db, 'dev_logs'),
        where('status', '==', 'published'),
        orderBy('date', 'desc')
      )
    );
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as DevLogEntry));
  } catch (error) {
    console.error('Error fetching dev logs:', error);
    return [];
  }
}

/**
 * Get a dev log by ID
 */
export async function getDevLogById(id: string) {
  try {
    const docRef = doc(db, 'dev_logs', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as DevLogEntry;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching dev log:', error);
    return null;
  }
}

/**
 * Get recent dev logs with limit
 */
export async function getRecentDevLogs(limitCount = 3) {
  try {
    const querySnapshot = await getDocs(
      query(
        collection(db, 'dev_logs'),
        where('status', '==', 'published'),
        orderBy('date', 'desc'),
        limit(limitCount)
      )
    );
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as DevLogEntry));
  } catch (error) {
    console.error('Error fetching recent dev logs:', error);
    return [];
  }
}

/**
 * Get dev logs by category
 */
export async function getDevLogsByCategory(category: string) {
  try {
    const querySnapshot = await getDocs(
      query(
        collection(db, 'dev_logs'),
        where('status', '==', 'published'),
        where('category', '==', category),
        orderBy('date', 'desc')
      )
    );
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as DevLogEntry));
  } catch (error) {
    console.error('Error fetching dev logs by category:', error);
    return [];
  }
}

/**
 * Search dev logs
 */
export async function searchDevLogs(searchTerm: string) {
  try {
    // Note: This is a simple implementation. For production,
    // consider using Algolia or a similar search service
    const querySnapshot = await getDocs(
      query(
        collection(db, 'dev_logs'),
        where('status', '==', 'published'),
        orderBy('date', 'desc')
      )
    );
    
    const logs = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as DevLogEntry));
    
    // Filter logs that contain the search term
    return logs.filter(log => 
      log.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (log.tags && log.tags.some(tag => 
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      ))
    );
  } catch (error) {
    console.error('Error searching dev logs:', error);
    return [];
  }
}

/**
 * Get all dev logs for admin (including drafts)
 */
export async function getAllDevLogs() {
  try {
    const querySnapshot = await getDocs(
      query(
        collection(db, 'dev_logs'),
        orderBy('date', 'desc')
      )
    );
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as DevLogEntry));
  } catch (error) {
    console.error('Error fetching all dev logs:', error);
    return [];
  }
}

/**
 * Create a new dev log
 */
export async function createDevLog(data: Partial<DevLogEntry>) {
  try {
    const docRef = await addDoc(collection(db, 'dev_logs'), {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    
    return docRef.id;
  } catch (error) {
    console.error('Error creating dev log:', error);
    throw error;
  }
}

/**
 * Update an existing dev log
 */
export async function updateDevLog(id: string, data: Partial<DevLogEntry>) {
  try {
    const docRef = doc(db, 'dev_logs', id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp()
    });
    
    return id;
  } catch (error) {
    console.error('Error updating dev log:', error);
    throw error;
  }
}

/**
 * Delete a dev log
 */
export async function deleteDevLog(id: string) {
  try {
    const docRef = doc(db, 'dev_logs', id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error('Error deleting dev log:', error);
    throw error;
  }
}
