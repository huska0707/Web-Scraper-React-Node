import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://localhost:8000/api/vi/items")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error", error));
  });
  return (
    <div>
      <h1>React Node Web Scraper</h1>
      {data &&
        data.map((item, index) => (
          <div key={item}>
            <h4>{item.name}</h4>
            <img src={item.img} alt={item.name} width={100} height={100} />
            <p>{item.price}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
