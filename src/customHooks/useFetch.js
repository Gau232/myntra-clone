import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((data) => {
        // console.log(data);
        setResponses(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return responses;
};

export default useFetch;
