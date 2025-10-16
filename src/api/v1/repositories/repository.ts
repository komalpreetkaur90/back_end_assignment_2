import { db } from "../../../config/firebaseConfig";

export const getDocuments = async <T>(collectionName: string): Promise<T[]> => {
  const snapshot = await db.collection(collectionName).get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as T));
};

export const getDocumentById = async <T>(collectionName: string, id: string): Promise<T | null> => {
  const doc = await db.collection(collectionName).doc(id).get();
  return doc.exists ? ({ id: doc.id, ...doc.data() } as T) : null;
};

export const addDocument = async <T>(collectionName: string, data: T): Promise<T & { id: string }> => {
  const plainData = JSON.parse(JSON.stringify(data));
  const docRef = await db.collection(collectionName).add(plainData);
  return { id: docRef.id, ...plainData };
};

export const updateDocument = async <T>(collectionName: string, id: string, data: Partial<T>): Promise<void> => {
  await db.collection(collectionName).doc(id).update(data);
};

export const deleteDocument = async (collectionName: string, id: string): Promise<void> => {
  await db.collection(collectionName).doc(id).delete();
};

export const queryDocuments = async <T>(
  collectionName: string,
  field: string,
  value: any
): Promise<T[]> => {
  const snapshot = await db.collection(collectionName).where(field, "==", value).get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as T));
};