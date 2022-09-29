import { useEffect } from 'react';

interface Options {
  exceptions: Array<any>;
}

const useClickOutside = (ref: any, handler: any, options: Options) => {
  useEffect(() => {
    const includesTarget = (ref, event: Event) =>
      !ref.current || ref.current.contains(event.target);

    const listener = (e: Event) => {
      if (
        includesTarget(ref, e) ||
        options?.exceptions.some((ref) => includesTarget(ref, e))
      ) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useClickOutside;
