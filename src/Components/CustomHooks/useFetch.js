import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(URL) {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let fetchApi = async () => {
      try {
        //let response = await fetch(URL, { method: method });
        let response = await axios.get(URL);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, []);

  return { data, error, isLoading, setData };
}
export default useFetch;
