function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

/* Initial */
showScreen("ready");

/* Ready */
document.getElementById("yesBtn").onclick = () => showScreen("gift");
document.getElementById("noBtn").onclick = () => showScreen("no");
document.getElementById("tryAgainBtn").onclick = () => showScreen("ready");

/* Gift click */
const giftGif = document.getElementById("giftGif");
giftGif.onclick = () => {
  const src = giftGif.src;
  giftGif.src = "";
  giftGif.src = src;

  setTimeout(() => showScreen("afterGift"), 1400);
};

/* Exit button dodge */
const exitBtn = document.getElementById("exitBtn");
exitBtn.onmouseover = () => {
  exitBtn.style.position = "absolute";
  exitBtn.style.left = Math.random() * 70 + "vw";
  exitBtn.style.top = Math.random() * 70 + "vh";
};

/* Proceed */
document.getElementById("proceedBtn").onclick = () =>
  showScreen("final");

/* Final GIF redirect */
document.getElementById("riddhiGif").onclick = () => {
  window.open("https://open.spotify.com/playlist/1TTqypu4nMytVBdonDJodn?si=17AA3DnDTti3TxU75RDuEA", "_blank");
};
