import type { RefObject } from "preact";
import { useEffect } from "preact/hooks";

export default function useOutsideClick(
  targetRef: RefObject<HTMLElement | null>,
  onOutsideClick: (event: MouseEvent) => void,
  dependencies: Array<unknown>,
) {
  useEffect(
    () => {
      const handleClick = (event: MouseEvent) => {
        if (targetRef.current && !targetRef.current.contains(event.target as HTMLElement | null)) {
          onOutsideClick(event);
        }
      };

      window.addEventListener("click", handleClick);

      return () => {
        window.removeEventListener("click", handleClick);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies,
  );
}
