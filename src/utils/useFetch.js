import { useEffect, useState } from "react";

export const useFetch = (url, parameter) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorStatusCode, setErrorStatusCode] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => {
        setErrorStatusCode(res.status);
        return res.json();
      })
      .then(
        (result) => {
          setLoading(true);
          setData(result);
          setError(null);
        },
        (error) => {
          setLoading(true);
          setError(error);
        }
      );
  }, [parameter, url]);

  return { data, error, loading, errorStatusCode };
};
