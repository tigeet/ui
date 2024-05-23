type TEvent = null | undefined | React.MouseEvent | React.TouchEvent;
type TEventHandler = (event?: TEvent) => void;
type Handlers = Record<string, TEventHandler>;

const mergeHandlers = (...handlersList: Handlers[]) => {
  const grouped: Record<string, TEventHandler[]> = {};

  handlersList.forEach((handlers) => {
    for (const handlerName in handlers) {
      if (!grouped[handlerName]) grouped[handlerName] = [];

      grouped[handlerName].push(handlers[handlerName]);
    }
  });

  const combined: Handlers = {};

  for (const handlerName in grouped) {
    combined[handlerName] = (event: TEvent) => {
      grouped[handlerName].forEach((fn) => fn?.(event));
    };
  }

  return combined;
};

export default mergeHandlers;
