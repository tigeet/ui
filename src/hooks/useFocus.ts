import { useState, useCallback, useMemo } from "react";

const useFocus = () => {
  const [focused, setFocused] = useState<boolean>(false);

  const onFocus = useCallback(() => {
    setFocused(true);
  }, []);

  const onBlur = useCallback(() => {
    setFocused(false);
  }, []);

  const focusHandlers = useMemo(() => ({ onFocus, onBlur }), [onBlur, onFocus]);
  return { focused, focusHandlers };
};

export default useFocus;
