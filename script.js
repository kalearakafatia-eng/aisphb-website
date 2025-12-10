
document.addEventListener("DOMContentLoaded", () => {
  const notice = document.getElementById("desktop-notice");
  const okBtn = document.getElementById("notice-ok");

  if (!notice || !okBtn) return;

  const BREAKPOINT = 900;

  function isSmallScreen() {
    return window.innerWidth < BREAKPOINT;
  }

  function shouldShowNotice() {
    return (
      isSmallScreen() &&
      !sessionStorage.getItem("desktopNoticeDismissed")
    );
  }

  function updateNotice() {
    if (shouldShowNotice()) {
      notice.style.display = "flex";
    } else {
      notice.style.display = "none";
    }
  }

  okBtn.addEventListener("click", () => {
    sessionStorage.setItem("desktopNoticeDismissed", "true");
    notice.style.display = "none";
  });

  // ✅ Run once on page load
  updateNotice();

  // ✅ Run again on resize
  window.addEventListener("resize", updateNotice);
});