import { useEffect, useState } from "react";

const throttle = require("lodash.throttle");

function useDocumentScrollThrottled(callback: {
  (callbackData: any): void;
  (arg0: { previousScrollTop: number; currentScrollTop: number }): void;
}) {
  const [, setScrollPosition] = useState(0);
  let previousScrollTop = 0;

  function handleDocumentScroll() {
    const { scrollTop: currentScrollTop } =
      document.documentElement || document.body;

    setScrollPosition((previousPosition) => {
      previousScrollTop = previousPosition;
      return currentScrollTop;
    });

    callback({ previousScrollTop, currentScrollTop });
  }

  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250);

  useEffect(() => {
    window.addEventListener("scroll", handleDocumentScrollThrottled);

    return () =>
      window.removeEventListener("scroll", handleDocumentScrollThrottled);
  }, []);
}

export default useDocumentScrollThrottled;
