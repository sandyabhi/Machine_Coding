import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    if (data && data.products) {
      setProducts(data.products);
    }
    console.log(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectPageHandler = (selectedPage) => {
    // console.log(page);
    if (
      selectedPage > 0 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <>
      <div>
        {products.length > 0 && (
          <div className="products">
            {products.slice(page * 10 - 10, page * 10).map((product) => {
              return (
                <span className="product__card" key={product.id}>
                  <img src={product.thumbnail} alt={product.title} />
                  <span>{product.title}</span>
                </span>
              );
            })}
          </div>
        )}

        {products.length > 0 && (
          <div className="pagination">
            <span
              role="img"
              aria-label="back"
              className={page === 1 ? "pagination__diasble" : ""}
              onClick={() => selectPageHandler(page - 1)}
            >
              ◀️
            </span>

            {[...Array(products.length / 10)].map((_, id) => {
              return (
                <span
                  className={page === id + 1 ? "pagination__selected" : ""}
                  key={id}
                  onClick={() => selectPageHandler(id + 1)}
                >
                  {id + 1}
                </span>
              );
            })}

            <span
              role="img"
              aria-label="next"
              className={
                page === products.length / 10 ? "pagination__diasble" : ""
              }
              onClick={() => selectPageHandler(page + 1)}
            >
              ▶️
            </span>
          </div>
        )}
      </div>
    </>
  );
}
