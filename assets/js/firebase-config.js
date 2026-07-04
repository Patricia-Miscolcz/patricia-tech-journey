// Configuração do Firebase

const firebaseConfig = {
    apiKey: "AIzaSyCvHOQPXSpqPtqN_1lqm9LRuLOPiEUkfqA",
    authDomain: "logincloud-6feb4.firebaseapp.com",
    projectId: "logincloud-6feb4",
    storageBucket: "logincloud-6feb4.firebasestorage.app",
    messagingSenderId: "24623194752",
    appId: "1:24623194752:web:f2b7a5cacc5bcb02607c65"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Serviço utilizado pelo projeto
const db = firebase.firestore();

console.log("Firebase conectado com sucesso!");