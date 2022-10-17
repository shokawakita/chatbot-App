import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";
import firebaseConfig from "./config";
// 使用したアカウントのデータベースをもとに初期化を行いfire
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
