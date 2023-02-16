function cursorMove() {
  const CURSOR = document.querySelector(".cursor");
  document.addEventListener("mousemove", function (e) {
    CURSOR.style.cssText =
      "left: " + e.clientX + "px; top: " + e.clientY + "px;";
  });
}

function detectDevice() {
  if ("ontouchstart" in document.documentElement) {
    document.styleSheets[1].disabled = true;
    const cursorOuter = document.querySelector(".cursor-outer");
    const cursorInner = document.querySelector(".cursor-inner");
    cursorOuter.remove();
    cursorInner.remove();
  } else {
    cursorMove();
  }
}

detectDevice();
