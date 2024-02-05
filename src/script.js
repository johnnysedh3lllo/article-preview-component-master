"use strict";
const socialSection = document.querySelector(".card__details__social");
const shareBtn = document.querySelector(".card__details__btn");

shareBtn.addEventListener("click", function (e) {
  const clicked = e.target.closest(".card__details__btn");

  if (!clicked) return;

  socialSection.classList.toggle("nodisplay");
  shareBtn.classList.toggle("active");
});
