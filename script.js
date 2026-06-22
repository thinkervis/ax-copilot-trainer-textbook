document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre").forEach((pre) => {
    const wrapper = pre.parentElement?.classList.contains("prompt")
      ? pre.parentElement
      : null;
    if (!wrapper) return;
    const button = document.createElement("button");
    button.className = "copy-btn";
    button.type = "button";
    button.textContent = "복사";
    button.addEventListener("click", async () => {
      await navigator.clipboard.writeText(pre.innerText);
      button.textContent = "복사됨";
      setTimeout(() => { button.textContent = "복사"; }, 1200);
    });
    wrapper.appendChild(button);
  });
});
