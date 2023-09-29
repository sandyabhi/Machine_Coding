const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("suggestion-area");

document.addEventListener("click", handleDocumentClick);

searchInput.addEventListener("input", debounce(searchAnime, 400));
// searchInput.addEventListener("input", searchAnime);

async function searchAnime() {
  const query = searchInput.value.trim();

  if (query.length === 0) {
    searchResults.innerHTML = "";
    return;
  }

  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${query}`);
    const { data } = await response.json();

    console.log(data);

    displayResults(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

function displayResults(data) {
  searchResults.innerHTML = "";

  data.forEach((anime) => {
    const listItem = document.createElement("li");
    listItem.textContent = anime.title;
    listItem.classList.add("list");
    searchResults.style.display = "block";
    searchResults.appendChild(listItem);
  });
}

function handleDocumentClick(event) {
  if (event.target !== searchInput) {
    searchResults.style.display = "none";
  }
}

searchResults.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    searchInput.value = event.target.textContent;
    searchResults.innerHTML = "";
  }
});

function debounce(func, wait) {
  let timeout;
  return () => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func(...arguments);
    }, wait);
  };
}
