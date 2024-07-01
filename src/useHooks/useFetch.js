import { useState, useEffect } from "react";
import fetchApi from "@/untils/fetchApi";

const useApiRequest = (url, method, body = null, token = null) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchApi(url, method, body, token);
        setResult(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, body, token]);

  return { loading, error, result };
};

const useGet = (url, token = null) => useApiRequest(url, "GET", null, token);
const usePost = (url, body, token = null) => useApiRequest(url, "POST", body, token);
const usePut = (url, body, token = null) => useApiRequest(url, "PUT", body, token);
const useDelete = (url, token = null) => useApiRequest(url, "DELETE", null, token);

export { useGet, usePost, usePut, useDelete };
