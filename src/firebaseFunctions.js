import { app, db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

export async function getCoords(character) {
  const docRef = doc(db, 'characters', character);
  const docSnap = await getDoc(docRef);

  return docSnap.data()[character];
}
