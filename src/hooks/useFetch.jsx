import { useState } from 'react';
import { useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export const useFetchCountry = (url) => {
  const [dataCountry, setDataCountry] = useState([]);
  const [loadingCountry, setLoadingCountry] = useState(false);
  const [errorCountry, setErrorCountry] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingCountry(true);
        const response = await fetch(url);
        const dataCountry = await response.json();
        setDataCountry(dataCountry);
      } catch (err) {
        setErrorCountry(true);
      }
      setLoadingCountry(false);
    };
    fetchData();
  }, [url]);

  return { dataCountry, loadingCountry, errorCountry };
};
