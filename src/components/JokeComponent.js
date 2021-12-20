import { useState, useEffect } from "react";
import { loadJoke } from "../api/jokes";

export default function JokeComponent() {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetchJoke();
  }, [])

  const fetchJoke = () => {
    setJoke(null);
    loadJoke().then((res) => {
      setJoke(res);
    })
  }

  const renderJoke = () => {
    switch (joke.type) {
      case 'single':
        return (<div>{joke.joke}</div>) 
      case 'twopart':
        return (
          <>
            <div>{joke.setup}</div>
            <div>{joke.delivery}</div>
          </>
        )   
      default:
        return (<div> Opps! I am still learning how to render this joke</div>)
    }
  }

  return (
    <>
      {joke ? renderJoke() : <div> Loading Joke</div>}

      <button onClick={fetchJoke}> New Joke </button>
    </>
  )
}