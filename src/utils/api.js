// This file contains functions that make requests to the server.
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
} from "firebase/firestore/lite"; // This allows us to use realtime storage data, if something changes in the database, it will automatically update the data in the app
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_API_KEY,
  authDomain: import.meta.env.REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_APP_APP_ID,
  measurementId: import.meta.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export async function getVans() {
  // Since the data is not live, and can be outdate it is just a snapshot of the data
  const snapshot = await getDocs(vansCollectionRef);
  // Turn the snapshot into an array of objects
  // Also note that the id is not included in the data object, so we need to add it
  const dataArr = snapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

export async function getVan(id) {
  console.log(id);
  // Get a singular document
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  console.log(vanSnapshot);
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
}

// This function fetches a single van by its ID.
// if no van exists the fetch the ent
// export async function getVans(id) {
//   const url = id ? `/api/vans/${id}` : "/api/vans";
//   const res = await fetch(url)
//   if (!res.ok) {
//     throw {
//       message: "Failed to fetch vans.",
//       statusText: res.statusText,
//       status: res.status
//     };
//   }
//   const data = await res.json();
//   return data.vans;
// }

// This function fetches a single van by its ID.
// if no van exists the fetch the entire list of vans
export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
  const res = await fetch(url);
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans.",
      statusText: res.statusText,
      status: res.status,
    };
  }
  const data = await res.json();
  return data.vans;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
