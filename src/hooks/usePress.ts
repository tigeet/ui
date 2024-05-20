import { useState, useCallback } from "react";

function usePress() {
  const [pressed, setIsPressed] = useState(false);

  const onMouseDown = useCallback(() => setIsPressed(true), []);
  const onMouseUp = useCallback(() => setIsPressed(false), []);
  const onTouchStart = useCallback(() => setIsPressed(true), []);
  const onTouchEnd = useCallback(() => setIsPressed(false), []);

  const pressHandlers = {
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp,
    onTouchStart: onTouchStart,
    onTouchEnd: onTouchEnd,
  };

  return { pressed, pressHandlers };
}

export default usePress;
