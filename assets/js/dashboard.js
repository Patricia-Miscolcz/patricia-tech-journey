const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", async function () {
    await auth.signOut();
    window.location.href = "../index.html";
});