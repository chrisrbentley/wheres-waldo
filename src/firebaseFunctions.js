import { app, db } from './firebase';
import { doc, getDoc, collection, addDoc } from 'firebase/firestore';

export async function getCoords(character) {
  const docRef = doc(db, 'characters', character);
  const docSnap = await getDoc(docRef);

  return docSnap.data()[character];
}

export async function uploadTime(player, time) {
  await addDoc(collection(db, 'winners'), {
    name: player,
    time: time,
  });
}
