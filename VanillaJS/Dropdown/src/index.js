const select = document.querySelector(".select");
const option_list = document.querySelector(".option_list");
const options = document.querySelectorAll(".option");

select.addEventListener("click", () => {
  option_list.classList.toggle("active");
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((option) => {
      option.classList.remove("selected");
    });
    select.querySelector("span").innerHTML = option.innerHTML;
    option_list.classList.remove("active");
    option.classList.add("selected");
  });
});
