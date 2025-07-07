import { collection, query, getDocs, getDoc, doc, orderBy, limit, where } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { DevLogEntry, DevLogCategory } from '@/types/dev-log';

const COLLECTION_NAME = 'dev-logs';

export async function getDevLogs(category?: DevLogCategory, limitCount = 20): Promise<DevLogEntry[]> {
  try {
    let q;
    
    if (category) {
      q = query(
        collection(db, COLLECTION_NAME),
        where('category', '==', category),
        where('status', '==', 'published'),
        orderBy('date', 'desc'),
        limit(limitCount)
      );
    } else {
      q = query(
        collection(db, COLLECTION_NAME),
        where('status', '==', 'published'),
        orderBy('date', 'desc'),
        limit(limitCount)
      );
    }

    const querySnapshot = await getDocs(q);
    
    const logs: DevLogEntry[] = [];
    querySnapshot.forEach((doc) => {
      logs.push({ id: doc.id, ...doc.data() } as DevLogEntry);
    });

    return logs;
  } catch (error) {
    console.error("Error getting dev logs:", error);
    return [];
  }
}

export async function getDevLogById(id: string): Promise<DevLogEntry | null> {
  try {
    const docRef = doc(db, COLLECTION_NAME, id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as DevLogEntry;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting dev log by ID:", error);
    return null;
  }
}

export async function getRecentDevLogs(count = 3): Promise<DevLogEntry[]> {
  return getDevLogs(undefined, count);
}
