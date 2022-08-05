import { useState, useEffect } from "react";

export default function useURL(url: string) {
  const [isValidURL, setValidURL] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await fetch(url, { method: "GET" });
      setValidURL(response.status === 200);
    })();
  }, [url, setValidURL]);

  return { isValidURL, setValidURL };
}
