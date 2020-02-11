//Modal Window

function modalWindow(buttonMoreSelector, overlaySelector, closeOverlaySelector) {
  let more = document.querySelector(buttonMoreSelector),
    overlay = document.querySelector(overlaySelector),
    close = document.querySelector(closeOverlaySelector);

  more.addEventListener("click", function () {
    overlay.style.display = "block";
    more.classList.add("more-splash");
    document.body.style.overflow = "hidden";
  });

  close.addEventListener("click", function () {
    overlay.style.display = "none";
    more.classList.remove("more-splash");
    document.body.style.overflow = "";
  });
}