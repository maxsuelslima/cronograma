import { NextRequest } from 'next/server';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, query, getDocs, setDoc, getDoc, where, limit, addDoc, doc } from 'firebase/firestore';
import { TopicosEstudados } from '@/app/constant';
import { NextApiRequest } from 'next';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function GET(request:NextApiRequest,
{ params }: { params: Promise<{ idUsuario: string }> }

) {
    console.log(request.query);
    const { idUsuario } = await params;
    console.log('ID do usuário recebido:', idUsuario);
    const nomeColecao = 'topicos_estudados_usuario';
    const collectionRef = collection(firestore, nomeColecao)
    const q = query(collectionRef, where('id_usuario', '==', idUsuario), limit(1))
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
        return new Response('Nenhum dado encontrado para este usuário', { status: 404 });
    }
    const dados = querySnapshot.docs[0].data();
    console.log('Dados do Firestore:', dados);
    return new Response(JSON.stringify(dados), {
        headers: { 'Content-Type': 'application/json' },
        status: 200
    });
}

type TopicosEstudadosJSON = {
  id: string;
} & TopicosEstudados;

export async function PATCH(request: NextRequest) {
    const {topicos_estudados, id: idUsuario} = await request.json();
    const nomeColecao = 'topicos_estudados_usuario';
    const collectionRef = collection(firestore, nomeColecao)
    const q = query(collectionRef, where('id_usuario', '==', idUsuario), limit(1))
    const querySnapshot = await getDocs(q);
    
    try {
        if (querySnapshot.empty) {
        await addDoc(collectionRef, {
            id_usuario: idUsuario,
            topicos_estudados: topicos_estudados
        });
    } 
      else {
        const docId = querySnapshot.docs[0].id
        await setDoc(doc(firestore, nomeColecao, docId), {
            id_usuario: idUsuario,
            topicos_estudados: topicos_estudados
        }, { merge: true });
    }
    return new Response('Requisição PATCH recebida');
    }
    catch (error) {
        console.error('Erro ao atualizar os tópicos estudados:', error);
        return new Response('Erro ao atualizar os tópicos estudados', { status: 500 });
    }
}