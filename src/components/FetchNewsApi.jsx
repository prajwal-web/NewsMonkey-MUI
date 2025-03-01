import { useEffect, useState } from "react";

export default function FetchNewsApi(page) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);  

  useEffect(() => {
    const getData = async () => {
      setLoading(true); 
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=6798cc7847714673a40bdc8870fbc85c&page=${page}`
        );
        const result = await response.json();
        setData(result.articles ); 
      setLoading(false); 
    };
    getData();
  }, [page]);

  return { data, loading };
}
