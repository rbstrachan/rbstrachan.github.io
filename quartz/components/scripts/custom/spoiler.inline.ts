document.addEventListener("nav", () => {
  const spoilers = document.querySelectorAll("spoiler");

  spoilers.forEach((spoiler) => {
    spoiler.style.userSelect = "none";

    spoiler.addEventListener("click", () => {
      spoiler.classList.add("revealed");
    }, { once: true });
  });
});
