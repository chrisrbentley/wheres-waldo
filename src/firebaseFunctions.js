import { app, db } from './firebase';
import {
  doc,
  get,
  getDoc,
  getDocs,
  collection,
  addDoc,
  query,
  orderBy,
} from 'firebase/firestore';

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

export async function getWinners() {
  try {
    const winnersRef = collection(db, 'winners');
    const orderedQuery = query(winnersRef, orderBy('time'));
    const orderedDocs = await getDocs(orderedQuery);

    const orderedWinners = [];
    orderedDocs.forEach((doc) => {
      const winner = doc.data();
      orderedWinners.push(winner);
    });
    console.log(orderedWinners);
    return orderedWinners;
  } catch (error) {
    return null;
  }
}
