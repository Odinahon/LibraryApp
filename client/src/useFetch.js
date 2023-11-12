import { useState, useEffect } from "react";
// We need to things to do register states here from Home.js component and imprort useState

const useFetch = (url, setBookDetails) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          if (setBookDetails) {
            setBookDetails({
              title: data.title,
              description: data.description,
              author: data.author,
            });
          }
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsPending(false);
            setError(err.message);
          }
        });
    }, 1000);
    return () => abortCont.abort();
  }, [url, setBookDetails]);
  return { data, isPending, error };
};

export default useFetch;
