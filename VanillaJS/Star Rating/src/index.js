let stars = document.querySelectorAll(".star");
let curRating = 0;

stars.forEach((star) => {
  star.addEventListener("mouseover", (e) => {
    let rating = star.getAttribute("data-value");

    highlightRating(rating);
  });

  star.addEventListener("mouseleave", (e) => {
    highlightRating(curRating);
  });

  star.addEventListener("click", (e) => {
    let rating = star.getAttribute("data-value");
    curRating = rating;
    highlightRating(curRating);

    updateRating(curRating);
  });
});

function highlightRating(rating) {
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars[i].classList.add("active");
    } else {
      stars[i].classList.remove("active");
    }
  }
}

function updateRating(rating) {
  document.getElementById("count").innerText = `Rating Count: ${rating}`;
}
