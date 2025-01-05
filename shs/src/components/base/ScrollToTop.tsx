import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);
};

export const ScrollToTop: FC = () => {
  useScrollTop();
  return null;
};
