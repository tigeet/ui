import { useEffect, useMemo, useState } from "react";

let id = 0;
type Props = {
  callback?: (event?: KeyboardEvent) => void;
  keys: string | string[];
};
const useKeyPress = ({ callback, keys }: Props) => {
  const keysArray = useMemo(
    () => (Array.isArray(keys) ? keys : [keys]),
    [keys]
  );

  const [uid] = useState(() => id++);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (keysArray.includes(event.code)) {
        callback?.(event);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [callback, keysArray, uid]);
};

export default useKeyPress;
