import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

export default function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=16&inc=name,login,picture")
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setUsers(data.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return (
      <div className="App">
        <h2 className="error">Error :(</h2>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="App">
        <h2 className="loadding">Loadding...</h2>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header logInUser={users[users.length - 6]} />
        <Main users={users} />
      </div>
    );
  }
}
