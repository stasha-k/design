import { useEffect } from "react";
import { useLocation } from "react-router";

// Client-side route changes don't trigger the browser's normal
// scroll-to-top behavior, so without this, navigating to a new page
// keeps whatever scroll position the previous page was left at.
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
