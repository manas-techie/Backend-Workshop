import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
      }, []);
  });

  return (
    <>
      <h1>Hello World!</h1>
      <p>Jokes: {jokes.length} </p>
      {jokes.length > 0 ? (
        <ul>
          {jokes.map((joke) => (
            <li key={joke.id}>
              {joke.title}: {joke.content}
            </li>
          ))}
        </ul>
      ) : (
        <p>No jokes found</p>
      )}
    </>
  );
}

export default App;
