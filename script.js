const screens = {
  ready: document.getElementById("ready"),
  no: document.getElementById("no"),
  gift: document.getElementById("gift"),
  after: document.getElementById("afterGift"),
  final: document.getElementById("final")
};

function show(target) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  target.classList.add("active");
}

document.getElementById("yesBtn").onclick = () => show(screens.gift);
document.getElementById("noBtn").onclick = () => show(screens.no);

const giftGif = document.getElementById("giftGif");
giftGif.onclick = () => {
  const src = giftGif.src;
  giftGif.src = "";
  giftGif.src = src;

  setTimeout(() => show(screens.after), 1500);
};

const exitBtn = document.getElementById("exit");
exitBtn.onmouseover = () => {
  exitBtn.style.position = "absolute";
  exitBtn.style.left = Math.random() * 70 + "vw";
  exitBtn.style.top = Math.random() * 70 + "vh";
};

document.getElementById("proceed").onclick = () => show(screens.final);
