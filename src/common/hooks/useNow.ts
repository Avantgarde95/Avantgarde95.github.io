import { useEffect, useState } from "react";

export default function useNow() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000 * 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    monthDay: now.getDate(),
    hour: now.getHours(),
    minute: now.getMinutes(),
    second: now.getSeconds(),
  };
}
