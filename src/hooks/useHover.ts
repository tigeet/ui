import { useState, useCallback, useMemo } from "react";

function useHover() {
  const [hover, setHover] = useState(false);

  const onMouseEnter = useCallback(() => setHover(true), []);
  const onMouseLeave = useCallback(() => setHover(false), []);
  const onTouchStart = useCallback(() => setHover(true), []);
  const onTouchEnd = useCallback(() => setHover(false), []);

  const hoverHandlers = useMemo(
    () => ({
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onTouchStart: onTouchStart,
      onTouchEnd: onTouchEnd,
    }),
    [onMouseEnter, onMouseLeave, onTouchEnd, onTouchStart]
  );

  return { hover, hoverHandlers };
}

export default useHover;
