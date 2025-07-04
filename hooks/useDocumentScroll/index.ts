import { useEffect, useState } from 'react';
import throttle from 'lodash.throttle';

type ScrollCallback = (data: {
  previousScrollTop: number;
  currentScrollTop: number;
}) => void;

function useDocumentScrollThrottled(callback: ScrollCallback) {
  const [, setScrollPosition] = useState(0);
  let previousScrollTop = 0;

  function handleDocumentScroll() {
    const { scrollTop: currentScrollTop } =
      document.documentElement || document.body;

    setScrollPosition(previousPosition => {
      previousScrollTop = previousPosition;
      return currentScrollTop;
    });

    callback({ previousScrollTop, currentScrollTop });
  }

  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250);

  useEffect(() => {
    window.addEventListener('scroll', handleDocumentScrollThrottled);

    return () =>
      window.removeEventListener('scroll', handleDocumentScrollThrottled);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default useDocumentScrollThrottled;
