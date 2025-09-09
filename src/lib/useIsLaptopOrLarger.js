import { useEffect, useState } from "react";

export default function useIsLaptopOrLarger() {
  const [isLaptopOrLarger, setIsLaptopOrLarger] = useState(() => window.innerWidth >= 1024);

  useEffect(() => {
    function handleResize() {
      setIsLaptopOrLarger(window.innerWidth >= 1024);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLaptopOrLarger;
}
