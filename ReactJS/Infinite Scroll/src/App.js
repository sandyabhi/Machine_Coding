import React, { useState, useEffect } from "react";

import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
      );
      const data = await response.json();
      setProducts((prev) => [...prev, ...data]);
      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight
    ) {
      fetchProducts();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="infinite_scroll">
      <h1>Infinite Scroll</h1>
      <hr />
      <div className="scroll_main">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <div>
              <img src={product.thumbnailUrl} alt={product.title} />
              <p>{product.title}</p>
            </div>
          </div>
        ))}
      </div>
      {isLoading && <h2>Loading...</h2>}
    </div>
  );
}
