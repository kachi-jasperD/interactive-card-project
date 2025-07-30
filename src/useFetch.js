import { useEffect } from "react";

const useFetch = (url) => {
  useEffect(() => {
    fetch(url)
      .then((res) => {
        throw Error("could not fetch the data for the resource");
        if (!res.ok) {
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [url]);
};

export default useFetch;
