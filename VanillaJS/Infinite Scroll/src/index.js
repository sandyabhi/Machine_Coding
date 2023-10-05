const products = [];
let page = 1;

const fetchProducts = async () => {
  // isLoading = true;
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
    );
    const data = await response.json();
    console.log(data);

    products.push(...data);
    page++;
    renderProducts();
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

const renderProducts = () => {
  const scrollMain = document.getElementById("scrollMain");

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";
    const image = document.createElement("img");
    image.src = product.thumbnailUrl;
    image.alt = product.title;
    const title = document.createElement("p");
    title.textContent = product.title;
    card.appendChild(image);
    card.appendChild(title);
    scrollMain.appendChild(card);
  });
};

fetchProducts();

window.addEventListener("scroll", () => {
  if (
    window.screenY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    fetchProducts();
  }
});
