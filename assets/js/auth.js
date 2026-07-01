function cadastrarUsuario(email, senha) {
    return auth.createUserWithEmailAndPassword(email, senha);
}

function loginUsuario(email, senha) {
    return auth.signInWithEmailAndPassword(email, senha);
}

function logoutUsuario() {
    return auth.signOut();
}