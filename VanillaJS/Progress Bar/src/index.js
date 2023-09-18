(function () {
  let bar = document.getElementById("progress_bar");
  let width = 0;

  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width += 20;
      bar.style.width = width + "%";
    }
  }, 1000);
})();
