import "./styles.css";
import { useEffect, useState, useRef } from "react";

export default function App() {
  const inputRef = useRef();
  const suggestionAreaRef = useRef();

  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const debounceTimer = () => {
      const debounce = setTimeout(() => {
        if (input.trim() !== "") {
          fetchData(input);
        } else {
          setSuggestion([]);
        }
      }, 2000);

      return () => clearTimeout(debounce);
    };

    debounceTimer();

    window.addEventListener("click", (e) => {
      if (
        e.target !== inputRef.current &&
        e.target !== suggestionAreaRef.current
      ) {
        setVisible(false);
      }
    });
    return () => {
      window.removeEventListener("click", () => {});
    };
  }, [input]);

  const fetchData = async (anime) => {
    try {
      const data = await fetch(`https://api.jikan.moe/v4/anime?q=${anime}`);
      const res = await data.json();

      setSuggestion(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSuggestion = (item) => {
    setInput(item);
    // setSuggestion([]);
  };

  return (
    <div className="App">
      <h1>Search Anime</h1>
      <hr />
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onFocus={() => setVisible(true)}
        ref={inputRef}
        onChange={handleInput}
      />

      {visible && (
        <div className="suggestion_container" ref={suggestionAreaRef}>
          {suggestion?.map((item, i) => (
            <span
              key={item.i}
              className="span_item"
              onClick={() => handleSuggestion(item.title)}
            >
              {item.title}
              {/* {item.title.length > 25
                ? item.title.substring(0, 30) + "..."
                : item.title} */}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
