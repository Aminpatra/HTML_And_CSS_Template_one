const iconEl = document.querySelector(".icon");
const ulEl = document.querySelector(".links ul");

document.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") {
    ulEl.classList.toggle("active");
  } else {
    ulEl.classList.remove("active");
  }
});
