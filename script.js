function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s =>
    s.classList.remove("show")
  );
  document.getElementById(id).classList.add("show");
}

/* first screen */
document.getElementById("yesBtn").onclick = () => showScreen("gift");
document.getElementById("noBtn").onclick = () => showScreen("no");
document.getElementById("tryAgainBtn").onclick = () => showScreen("ready");

/* gift */
const giftGif = document.getElementById("giftGif");
giftGif.onclick = () => {
  const src = giftGif.src;
  giftGif.src = "";
  giftGif.src = src;

  setTimeout(() => showScreen("afterGift"), 1400);
};

/* exit chaos */
const exitBtn = document.getElementById("exitBtn");
exitBtn.onmouseover = () => {
  exitBtn.style.position = "absolute";
  exitBtn.style.left = Math.random() * 70 + "vw";
  exitBtn.style.top = Math.random() * 70 + "vh";
};

/* proceed */
document.getElementById("proceedBtn").onclick = () =>
  showScreen("final");
