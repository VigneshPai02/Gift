console.log("JS LOADED");

function hideAll() {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.add("hidden");
  });
}

function goGift() {
  console.log("YES clicked");
  hideAll();
  document.getElementById("gift").classList.remove("hidden");
}

function goNo() {
  console.log("NO clicked");
  hideAll();
  document.getElementById("no").classList.remove("hidden");
}

function goFinal() {
  console.log("Proceed clicked");
  hideAll();
  document.getElementById("final").classList.remove("hidden");
}

const giftGif = document.getElementById("giftGif");
giftGif.addEventListener("click", () => {
  console.log("Gift clicked");

  // restart gif safely
  const src = giftGif.src;
  giftGif.src = "";
  giftGif.src = src;

  setTimeout(() => {
    hideAll();
    document.getElementById("afterGift").classList.remove("hidden");
  }, 1200);
});

const exitBtn = document.getElementById("exitBtn");
exitBtn.addEventListener("mouseover", () => {
  exitBtn.style.position = "absolute";
  exitBtn.style.left = Math.random() * 70 + "vw";
  exitBtn.style.top = Math.random() * 70 + "vh";
});
