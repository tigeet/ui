import { useState, useCallback, useMemo, useEffect } from "react";

type Props = {
  onHover?: () => void;
};
function useHover(props?: Props) {
  const [hover, setHover] = useState(false);
  useEffect(() => {
    if (hover) props?.onHover?.();
  }, [hover, props]);

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
