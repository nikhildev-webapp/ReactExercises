import React, { useEffect, useState } from 'react'

const RandomJoke = () => {
    const [joke, setJoke] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchJoke = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const json = await response.json();
            setJoke(json);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchJoke();
    }, []);
    if (loading) {
        return <p>Please wait, loading joke...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
  return (
      <>
          <h1>Random Joke Generator</h1>
          {<div>
              <p>Setup:{joke.setup}</p>
              <p>PunchLine:{joke.punchline}</p>
          </div>
          }
          <button onClick={fetchJoke}>GetJoke</button>

      </>
  )
}

export default RandomJoke