import { useState } from "react";

export default function useForceUpdate() {
  const [value, setValue] = useState(0);

  const forceUpdate = () => {
    setValue(prevValue => prevValue + 1);
  };

  return { value, forceUpdate };
}
