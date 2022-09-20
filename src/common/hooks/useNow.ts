import { useEffect, useState } from "react";

interface Time {
  year: number;
  month: number;
  monthDay: number;
  hour: number;
  minute: number;
  second: number;
}

export default function useNow(): Time {
  // If we use new Date() at here, server HTML and client HTML won't match.
  // So we don't compute date before useEffect().
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());

    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000 * 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return now === null
    ? {
        year: 0,
        month: 0,
        monthDay: 0,
        hour: 0,
        minute: 0,
        second: 0,
      }
    : {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        monthDay: now.getDate(),
        hour: now.getHours(),
        minute: now.getMinutes(),
        second: now.getSeconds(),
      };
}
